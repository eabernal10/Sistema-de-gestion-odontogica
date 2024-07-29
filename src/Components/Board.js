import React, { useState, useEffect } from 'react';
import Pieza from './Pieza';
import Toolbar from './Toolbar';
import axios from 'axios';
import { InputText } from 'primereact/inputtext';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import './css/Board.css'

const Board = () => {
    
    const { id, odonto } = useParams();
    const navigate = useNavigate();
    const initialBoard=(odonto.split(''));
   
    const [board, setBoard] =useState(initialBoard);

   
    const [paciente, setPaciente] = useState({
        apellidos: '',
        nombres: '',
        edad: 0,
        sexo: '',
        odontograma: '000000000000000000000000000000000000000000000000000'
    });

    useEffect(() => {
        fetchPaciente();
    }, [id]);

    


     const fetchPaciente = async () => {
        const response = await axios.get(`http://localhost:8080/pacientes/${id}`);
        setPaciente(response.data);
   
    };

    

    const handleGuardar = async () => {
        paciente.odontograma=board.join('');
        
        alert(paciente.odontograma);
        await axios.put(`http://localhost:8080/pacientes/${id}`, paciente);
        alert("Odontograma Actualizado");
        navigate('/listapacientes');
    };

    const handleDragStart = (event, code) => {
        event.dataTransfer.setData('text/plain', code);
    };

    const handlePieceDrop = (index) => (event) => {
        event.preventDefault();
        const code = event.dataTransfer.getData('text/plain');
        const newBoard = [...board];
        newBoard[index] = code;
        setBoard(newBoard);
    };

    const getCodigo=(index)=>{
        return board[index];
    }
    const getResult = () => {
        return board.join('');
    };

    return (
        <div>
            <Card title="Odontograma">
                <p className="m-0">
                    Paciente: {paciente.apellidos} {paciente.nombres}<br/>
                    Sexo: {paciente.sexo}<br/>
                    Edad: {paciente.edad}<br/>
                </p>
            </Card>
                
            <Toolbar onDragStart={handleDragStart} />
            <div className="board">
                <table>
                    <tr id="f1">
                        <td >0<Pieza key="0" code={getCodigo(0)} onDrop={handlePieceDrop(0)} /></td>
                        <td >1<Pieza key="1" code={getCodigo(1)} onDrop={handlePieceDrop(1)} /></td>
                        <td >2<Pieza key="2" code={getCodigo(2)} onDrop={handlePieceDrop(2)} /></td>
                        <td >3<Pieza key="3" code={getCodigo(3)} onDrop={handlePieceDrop(3)} /></td>
                        <td >4<Pieza key="4" code={getCodigo(4)} onDrop={handlePieceDrop(4)} /></td>
                        <td >5<Pieza key="5" code={getCodigo(5)} onDrop={handlePieceDrop(5)} /></td>
                        <td >6<Pieza key="6" code={getCodigo(6)} onDrop={handlePieceDrop(6)} /></td>
                        <td >7<Pieza key="7" code={getCodigo(7)} onDrop={handlePieceDrop(7)} /></td>
                        <td > </td>
                        <td >8<Pieza key="8" code={getCodigo(8)} onDrop={handlePieceDrop(8)} /></td>
                        <td >9<Pieza key="9" code={getCodigo(9)} onDrop={handlePieceDrop(9)} /></td>
                        <td >10<Pieza key="10" code={getCodigo(10)} onDrop={handlePieceDrop(10)} /></td>
                        <td >11<Pieza key="11" code={getCodigo(11)} onDrop={handlePieceDrop(11)} /></td>
                        <td >12<Pieza key="12" code={getCodigo(12)} onDrop={handlePieceDrop(12)} /></td>
                        <td >13<Pieza key="13" code={getCodigo(13)} onDrop={handlePieceDrop(13)} /></td>
                        <td >14<Pieza key="14" code={getCodigo(14)} onDrop={handlePieceDrop(14)} /></td>
                        <td >15<Pieza key="15" code={getCodigo(15)} onDrop={handlePieceDrop(15)} /></td>
                    </tr> 
                    <tr id="f2">
                        <td ></td>
                        <td ></td>
                        <td ></td>
                        <td >16<Pieza key="16" code={getCodigo(16)} onDrop={handlePieceDrop(16)} /></td>
                        <td >17<Pieza key="17" code={getCodigo(17)} onDrop={handlePieceDrop(17)} /></td>
                        <td >18<Pieza key="18" code={getCodigo(18)} onDrop={handlePieceDrop(18)} /></td>
                        <td >19<Pieza key="19" code={getCodigo(19)} onDrop={handlePieceDrop(19)} /></td>
                        <td >20<Pieza key="20" code={getCodigo(20)} onDrop={handlePieceDrop(20)} /></td>
                        <td > </td>
                        <td >21<Pieza key="21" code={getCodigo(21)} onDrop={handlePieceDrop(21)} /></td>
                        <td >22<Pieza key="22" code={getCodigo(22)} onDrop={handlePieceDrop(22)} /></td>
                        <td >23<Pieza key="23" code={getCodigo(23)} onDrop={handlePieceDrop(23)} /></td>
                        <td >24<Pieza key="24" code={getCodigo(24)} onDrop={handlePieceDrop(24)} /></td>
                        <td >25<Pieza key="25" code={getCodigo(25)} onDrop={handlePieceDrop(25)} /></td>
                        <td ></td>
                        <td ></td>
                        <td ></td>
                    </tr>
                    <tr id="f3">
                        <td ></td>
                        <td ></td>
                        <td ></td>
                        <td >26<Pieza key="26" code={getCodigo(26)} onDrop={handlePieceDrop(26)} /></td>
                        <td >27<Pieza key="27" code={getCodigo(27)} onDrop={handlePieceDrop(27)} /></td>
                        <td >28<Pieza key="28" code={getCodigo(28)} onDrop={handlePieceDrop(28)} /></td>
                        <td >29<Pieza key="29" code={getCodigo(29)} onDrop={handlePieceDrop(29)} /></td>
                        <td >30<Pieza key="30" code={getCodigo(30)} onDrop={handlePieceDrop(30)} /></td>
                        <td > </td>
                        <td >31<Pieza key="31" code={getCodigo(31)} onDrop={handlePieceDrop(31)} /></td>
                        <td >32<Pieza key="32" code={getCodigo(32)} onDrop={handlePieceDrop(32)} /></td>
                        <td >33<Pieza key="33" code={getCodigo(33)} onDrop={handlePieceDrop(33)} /></td>
                        <td >34<Pieza key="34" code={getCodigo(34)} onDrop={handlePieceDrop(34)} /></td>
                        <td >35<Pieza key="35" code={getCodigo(35)} onDrop={handlePieceDrop(35)} /></td>
                        <td ></td>
                        <td ></td>
                        <td ></td>
                    </tr>
                    <tr id="f4">
                        <td >36<Pieza key="36" code={getCodigo(36)} onDrop={handlePieceDrop(36)} /></td>
                        <td >37<Pieza key="37" code={getCodigo(37)} onDrop={handlePieceDrop(37)} /></td>
                        <td >38<Pieza key="38" code={getCodigo(38)} onDrop={handlePieceDrop(38)} /></td>
                        <td >39<Pieza key="39" code={getCodigo(39)} onDrop={handlePieceDrop(39)} /></td>
                        <td >40<Pieza key="40" code={getCodigo(40)} onDrop={handlePieceDrop(40)} /></td>
                        <td >41<Pieza key="41" code={getCodigo(41)} onDrop={handlePieceDrop(41)} /></td>
                        <td >42<Pieza key="42" code={getCodigo(42)} onDrop={handlePieceDrop(42)} /></td>
                        <td >43<Pieza key="43" code={getCodigo(43)} onDrop={handlePieceDrop(43)} /></td>
                        <td > </td>
                        <td >44<Pieza key="44" code={getCodigo(44)} onDrop={handlePieceDrop(44)} /></td>
                        <td >45<Pieza key="45" code={getCodigo(45)} onDrop={handlePieceDrop(45)} /></td>
                        <td >46<Pieza key="46" code={getCodigo(46)} onDrop={handlePieceDrop(46)} /></td>
                        <td >47<Pieza key="47" code={getCodigo(47)} onDrop={handlePieceDrop(47)} /></td>
                        <td >48<Pieza key="48" code={getCodigo(48)} onDrop={handlePieceDrop(48)} /></td>
                        <td >49<Pieza key="49" code={getCodigo(49)} onDrop={handlePieceDrop(49)} /></td>
                        <td>50<Pieza key="50" code={getCodigo(50)} onDrop={handlePieceDrop(50)} /></td>
                        <td>51<Pieza key="51" code={getCodigo(51)} onDrop={handlePieceDrop(51)} /></td>
                    </tr>
                </table>
            
                
            </div>
            <hr/>
            
            <Button label="Guardar" icon="pi pi-save" onClick={handleGuardar} />
        </div>
    );
};

export default Board;