import React from 'react';

const ProjectList = ({ projects, onDeleteProject }) => {
    return (
        <div>
            {projects.length === 0 ? (
                <p>No hay proyectos</p>
            ) : (
                projects.map((project) => (
                    <React.Fragment key={project.id}>
                        <div>
                            <h3>{project.name}</h3>
                            <p>{project.description}</p>
                            {project.additionalData && (
                                <div>
                                    <p><strong>Datos adicionales:</strong></p>
                                    <p>ID: {project.additionalData.id}</p>
                                    <p>Title: {project.additionalData.title}</p>
                                    {}
                                </div>
                            )}
                            <button onClick={() => onDeleteProject(project.id)}>Eliminar</button>
                        </div>
                        <hr />
                    </React.Fragment>
                ))
            )}
        </div>
    );
};

export default ProjectList;
