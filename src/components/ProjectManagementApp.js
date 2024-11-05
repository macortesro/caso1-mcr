import React, { useState, useEffect } from 'react';
import ProjectForm from './ProjectForm';
import ProjectList from './ProjectList';
import { db } from '../firebaseConfig';
import { collection, addDoc, getDocs } from 'firebase/firestore';

const ProjectManagementApp = () => {
    const [projects, setProjects] = useState([]);
    const [showForm, setShowForm] = useState(false);

    // Función para agregar un proyecto a Firestore
    const addProject = async (project) => {
        try {
            const docRef = await addDoc(collection(db, 'projects'), project);
            console.log('Proyecto agregado con ID: ', docRef.id);

            setProjects([...projects, { ...project, id: docRef.id }]);
            setShowForm(false);
        } catch (e) {
            console.error('Error agregando el proyecto: ', e);
        }
    };

    // Función para obtener los proyectos de Firestore a
    useEffect(() => {
        const fetchProjects = async () => {
            const querySnapshot = await getDocs(collection(db, 'projects'));
            const projectList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setProjects(projectList);
        };

        fetchProjects();
    }, []);


    const deleteProject = (projectId) => {
        setProjects(projects.filter(project => project.id !== projectId));
    };

    return (
        <div>
            <h1>Gestión de Proyectos</h1>
            <button onClick={() => setShowForm(!showForm)}>
                {showForm ? 'Cancelar' : 'Agregar Proyecto'}
            </button>
            {showForm && <ProjectForm onAddProject={addProject} />}
            <ProjectList projects={projects} onDeleteProject={deleteProject} />
        </div>
    );
};

export default ProjectManagementApp;
