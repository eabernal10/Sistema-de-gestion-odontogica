import React, { useState, useEffect, useCallback } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { Dialog } from 'primereact/dialog';
import { Calendar } from 'primereact/calendar';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';
import { format } from 'date-fns';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';


const ListaCitas = () => {
    const { id } = useParams();
    const navigate = useNavigate(); 

    const [paciente, setPaciente] = useState({
        apellidos: '',
        nombres: '',
        edad: 0,
        sexo: ''
    });

    const [tratamientos, setTratamientos] = useState([]);
    const [dialogVisible, setDialogVisible] = useState(false);
    const [newTratamiento, setNewTratamiento] = useState({
        fecha: null,
        tratamiento: '',
        diagnostico: '',
        idtipo: 1,
    });


    useEffect(() => {
        fetchPaciente();
        fetchTratamientos();
    }, [id]);

     const fetchPaciente = async () => {
        const response = await axios.get(`http://localhost:8080/pacientes/${id}`);
        setPaciente(response.data);
    };

    const fetchTratamientos = async () => {
        const response = await axios.get(`http://localhost:8080/tratamientos/${id}`);
        setTratamientos(response.data);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setPaciente({ ...paciente, [name]: value });
    };

    const handleTratamientoChange = (e) => {
        const { name, value } = e.target;
        setNewTratamiento({ ...newTratamiento, [name]: value });
    };
 
    const handleTratamientoDateChange = (e) => {
        setNewTratamiento({ ...newTratamiento, fecha: e.value });
    };

    const eliminarTratamiento = async (idtratamiento) => {
        await axios.delete(`http://localhost:8080/tratamientos/${idtratamiento}`);
        setTratamientos(tratamientos.filter(tratamiento => tratamiento.idtratamiento !== idtratamiento));
    };

    const handleSubmit = async () => {
        await axios.put(`http://localhost:8080/pacientes/${id}`, paciente);
       navigate('/');
    };

    const agregarTratamiento = async () => {
        const response = await axios.post('http://localhost:8080/tratamientos/crear', {
            ...newTratamiento,
            idpaciente: id,
        });
        setDialogVisible(false);
        setNewTratamiento({
            fecha: null,
            tratamiento: '',
            diagnostico: '',
            idtipo: 1,
        });
        fetchTratamientos();
    };
    const sexoOptions = [
        { label: 'Masculino', value: 'Masculino' },
        { label: 'Femenino', value: 'Femenino' },
    ];



    return (
        <div>
        <h2>Datos Paciente</h2>
        <div className="card flex flex-wrap gap-3 p-fluid">
            <div className="p-field">
                <label htmlFor="apellidos">Apellidos</label>
                <InputText id="apellidos" name="apellidos" value={paciente.apellidos} onChange={handleInputChange} />
            </div>
            <div className="p-field">
                <label htmlFor="nombres">Nombres</label>
                <InputText id="nombres" name="nombres" value={paciente.nombres} onChange={handleInputChange} />
            </div>
            <div className="p-field">
                <label htmlFor="edad">Edad</label>
                <InputText id="edad" name="edad" value={paciente.edad} onChange={handleInputChange} />
            </div>
            <div className="p-field">
                <label htmlFor="sexo">Sexo</label>
                <Dropdown id="sexo" name="sexo" value={paciente.sexo} options={sexoOptions} onChange={handleInputChange} placeholder="Selecciona el sexo" />
            </div>
            <div className="p-field">
                <Button label="Guardar" icon="pi pi-check" onClick={handleSubmit} />
            </div>
        </div>
        <h3>Tratamientos</h3>
        <Button label="Agregar Tratamiento" icon="pi pi-plus" onClick={() => setDialogVisible(true)} />
        <DataTable value={tratamientos}>
            <Column field="fecha" header="Fecha" body={(rowData) => format(new Date(rowData.fecha), 'dd-MM-yyyy')} />
            <Column field="tratamiento" header="Tratamiento" />
            <Column field="diagnostico" header="Diagnóstico" />
            <Column body={(rowData) => <Button label="Eliminar" icon="pi pi-trash" className="p-button-danger" onClick={() => eliminarTratamiento(rowData.idtratamiento)} />} />
        </DataTable>
        <Dialog header="Agregar Tratamiento" visible={dialogVisible} style={{ width: '50vw' }} onHide={() => setDialogVisible(false)}>
                <div>
                    <label>Fecha:</label>
                    <Calendar name="fecha" value={newTratamiento.fecha} onChange={handleTratamientoDateChange} dateFormat="dd-mm-yy" />
                </div>
                <div>
                    <label>Tratamiento:</label>
                    <InputText name="tratamiento" value={newTratamiento.tratamiento} onChange={handleTratamientoChange} />
                </div>
                <div>
                    <label>Diagnóstico:</label>
                    <InputText name="diagnostico" value={newTratamiento.diagnostico} onChange={handleTratamientoChange} />
                </div>
                
                <Button label="Agregar" icon="pi pi-check" onClick={agregarTratamiento} />
            </Dialog>
    </div>
    );
};

export default ListaCitas;