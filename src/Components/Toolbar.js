import React from 'react';
import Tool from './Tool';
import { useDrag, useDrop } from 'react-dnd';

const tools = ['0','A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P'];

const getCodigo=(index)=>{
    return tools[index];
}

const Toolbar = ({ onDragStart }) => {
  return (
    <div className="toolbar">
        <table>
            <tr>
                <td>Pieza<br/>normal</td>
                <td>Sellante<br/>necesario</td>
                <td>Extraccion</td>
                <td>Perdida</td>
                <td>Protesis<br/>fija</td>
                <td>Protesis<br/>fija</td>
                <td>Protesis<br/>fija</td>
                <td>Obturado</td>
                <td>Endodoncia</td>
                <td>Sellante<br/>realizado</td>
                <td>Perdida<br/>por caries</td>
                <td>Ausente</td>
                <td>Protesis<br/>removible</td>
                <td>Protesis<br/>removible</td>
                <td>Protesis<br/>removible</td>
                <td>Caries</td>
                <td>Corona</td>
                
            </tr>
            <tr>
                <td><Tool key="0" code={getCodigo(0)} onDragStart={onDragStart} /></td>
                <td><Tool key="1" code={getCodigo(1)} onDragStart={onDragStart} /></td>
                <td><Tool key="2" code={getCodigo(2)} onDragStart={onDragStart} /></td>
                <td><Tool key="3" code={getCodigo(3)} onDragStart={onDragStart} /></td>
                <td><Tool key="4" code={getCodigo(4)} onDragStart={onDragStart} /></td>
                <td><Tool key="5" code={getCodigo(5)} onDragStart={onDragStart} /></td>
                <td><Tool key="6" code={getCodigo(6)} onDragStart={onDragStart} /></td>
                <td><Tool key="7" code={getCodigo(7)} onDragStart={onDragStart} /></td>
                <td><Tool key="8" code={getCodigo(8)} onDragStart={onDragStart} /></td>
                <td><Tool key="9" code={getCodigo(9)} onDragStart={onDragStart} /></td>
                <td><Tool key="10" code={getCodigo(10)} onDragStart={onDragStart} /></td>
                <td><Tool key="11" code={getCodigo(11)} onDragStart={onDragStart} /></td>
                <td><Tool key="12" code={getCodigo(12)} onDragStart={onDragStart} /></td>
                <td><Tool key="13" code={getCodigo(13)} onDragStart={onDragStart} /></td>
                <td><Tool key="14" code={getCodigo(14)} onDragStart={onDragStart} /></td>
                <td><Tool key="15" code={getCodigo(15)} onDragStart={onDragStart} /></td>
                <td><Tool key="16" code={getCodigo(16)} onDragStart={onDragStart} /></td>
            </tr>
        </table>
      
    </div>
  );
};

export default Toolbar;