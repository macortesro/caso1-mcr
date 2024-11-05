import React, { useState, useRef } from 'react';
import SimpleReactValidator from 'simple-react-validator';
import axios from 'axios';

const ProjectForm = ({ onAddProject }) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [validator] = useState(new SimpleReactValidator());

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (validator.allValid()) {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
                const additionalData = response.data;


                onAddProject({
                    name,
                    description,
                    additionalData,
                });

                setName('');
                setDescription('');
                validator.hideMessages(); 
            } catch (error) {
                console.error('Error al obtener datos adicionales:', error);
            }
        } else {
            validator.showMessages();
            setName(name);
            setDescription(description);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Nombre del proyecto:</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    onBlur={() => validator.showMessageFor('name')}
                />
                {validator.message('name', name, 'required', { className: 'text-danger' })}
            </div>

            <div>
                <label>Descripción:</label>
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    onBlur={() => validator.showMessageFor('description')}
                />
                {validator.message('description', description, 'min:10', { className: 'text-danger' })}
            </div>

            <button type="submit">Agregar Proyecto</button>
        </form>
    );
};

export default ProjectForm;
