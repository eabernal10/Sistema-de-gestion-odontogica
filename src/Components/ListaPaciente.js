import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { format } from 'date-fns';
import PacienteForm from './PacienteForm'
import { useNavigate } from 'react-router-dom';
import Toolbar from './Toolbar';

function ListaPacientes() {
  const [pacientes, setPacientes] = useState([]);
  const [selectedPaciente, setSelectedPaciente] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const navigate = useNavigate();

  const handleEdit = (id) => {
      navigate(`/pacientes/${id}/editar`);
  };

   const handleOdonto = (id,odontograma) => {
    navigate(`/odontograma/${id}/${odontograma}`);
  };
  
  const handleAdd = () => {
      setSelectedPaciente(null);
      setShowForm(true);
  };
  
  const handleFormClose = () => {
      setShowForm(false);
      fetchPacientes();
  };

  useEffect(() => {
    
       fetchPacientes();
  }, []);

  const fetchPacientes = async () => {
    const response = await axios.get('http://localhost:8080/pacientes');
    setPacientes(response.data);
  };

  return (
    <div className="card">
      <h1>Lista de Pacientes</h1>
      <Button label="Nuevo Paciente" icon="pi pi-plus" onClick={handleAdd} />
      <DataTable value={pacientes} sortMode='multiple' stripedRows tableStyle={{ minWidth: '50rem' }} className='p-datatable'>
        <Column field="idpaciente" header="ID"></Column>
        <Column field="apellidos" sortable header="Apellidos"></Column>
        <Column field="nombres" sortable header="Nombres"></Column>
        <Column field="edad" header="Edad" ></Column>
        <Column field="sexo" header="Sexo"></Column>
        <Column
                    header="Tratamientos"
                    body={(rowData) => (
                        <Button label="" icon="pi pi-address-book" onClick={() => handleEdit(rowData.idpaciente)} />
                        
                    )} />
        <Column
                    header="Odontograma"
                    body={(rowData) => (
                        <Button label="" icon="pi pi-spinner-dotted" onClick={() => handleOdonto(rowData.idpaciente, rowData.odontograma)} />
                        
                    )} />
      </DataTable>
      <PacienteForm visible={showForm} onHide={handleFormClose} paciente={selectedPaciente} fetchPacientes={fetchPacientes} />
      
    </div>
  );
}

export default ListaPacientes;