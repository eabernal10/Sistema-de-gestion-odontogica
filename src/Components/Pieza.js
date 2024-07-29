import React from 'react';
import D0 from './images/D0.png';
import DA from './images/DA.png';
import DB from './images/DB.png';
import DC from './images/DC.png';
import DD from './images/DD.png';
import DE from './images/DE.png';
import DF from './images/DF.png';
import DG from './images/DG.png';
import DH from './images/DH.png';
import DI from './images/DI.png';
import DJ from './images/DJ.png';
import DK from './images/DK.png';
import DL from './images/DL.png';
import DM from './images/DM.png';
import DN from './images/DN.png';
import DO from './images/DO.png';
import DP from './images/DP.png';

const Pieza = ({ code, onDrop }) => {
  const getImage = (code) => {
    switch (code) {
        case '0':return D0;
        case 'A':return DA;
        case 'B':return DB;
        case 'C':return DC;
        case 'D':return DD;
        case 'E':return DE;
        case 'F':return DF;
        case 'G':return DG;
        case 'H':return DH;
        case 'I':return DI;
        case 'J':return DJ;
        case 'K':return DK;
        case 'L':return DL;
        case 'M':return DM;
        case 'N':return DN;
        case 'O':return DO;
        case 'P':return DP;
        
        // Añadir más casos según sea necesario
        default:
          return null;
      }
  };

  const imgSrc = getImage(code);

  return (
    <div 
      className="pieza" 
      onDrop={onDrop} 
      onDragOver={(event) => event.preventDefault()}
    >
      <img src={imgSrc} alt={code} />
    </div>
  );
};

export default Pieza;