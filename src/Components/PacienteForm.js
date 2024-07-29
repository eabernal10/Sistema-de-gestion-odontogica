// src/components/PacienteForm.js
import React, { useState, useEffect } from 'react';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { Calendar } from 'primereact/calendar';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';
import axios from 'axios';

const PacienteForm = ({ visible, onHide, paciente, fetchPacientes }) => {
    const [formData, setFormData] = useState({
        apellidos: '',
        nombres: '',
        edad: 0,
        sexo: ''
    });

    useEffect(() => {
        if (paciente) {
            setFormData({
                apellidos: paciente.apellidos,
                nombres: paciente.nombres,
                edad: paciente.edad,
                sexo: paciente.sexo
            });
        }
    }, [paciente]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async () => {
       
            // Crear nuevo paciente
            await axios.post('http://localhost:8080/pacientes/crear', formData);
        
        fetchPacientes();
        onHide();
    };

    const sexoOptions = [
        { label: 'Masculino', value: 'Masculino' },
        { label: 'Femenino', value: 'Femenino' },
    ];

    return (
        <Dialog header={paciente ? "Editar Paciente" : "Nuevo Paciente"} visible={visible} style={{ width: '50vw' }} onHide={onHide}>
            <div className="p-fluid">
                <div className="p-field">
                    <label htmlFor="apellidos">Apellidos</label>
                    <InputText id="apellidos" name="apellidos" value={formData.apellidos} onChange={handleInputChange} />
                </div>
                <div className="p-field">
                    <label htmlFor="nombres">Nombres</label>
                    <InputText id="nombres" name="nombres" value={formData.nombres} onChange={handleInputChange} />
                </div>
                <div className="p-field">
                    <label htmlFor="edad">Edad</label>
                    <InputText id="edad" name="edad" value={formData.edad} onChange={handleInputChange} />
                </div>
                
                <div className="p-field">
                    <label htmlFor="sexo">Sexo</label>
                    <Dropdown id="sexo" name="sexo" value={formData.sexo} options={sexoOptions} onChange={handleInputChange} placeholder="Selecciona el sexo" />
                </div>
                <div className="p-field">
                    <Button label="Guardar" icon="pi pi-check" onClick={handleSubmit} />
                </div>
            </div>
        </Dialog>
    );
};

export default PacienteForm;
