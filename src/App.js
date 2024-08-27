import React from 'react';
import './App.css';
import { FaChessPawn,FaChessRook,FaChessKnight,FaChessBishop,FaChessKing,FaChessQueen } from "react-icons/fa6";

function Chessboard() {
  return (
    <div className="App">

    <table>
        <tr>
            <td class="white">
            <p><FaChessRook size={35}/></p> </td>
            <td class="black"><p><FaChessKnight size={35} /></p></td>
            <td class="white"><p><FaChessBishop size={35}/></p></td>
            <td class="black"><p><FaChessKing size={35}/></p></td>
            <td class="white"><p><FaChessQueen size={35}/></p></td>
            <td class="black"><p><FaChessBishop size={35}/></p></td>
            <td class="white"><p><FaChessKnight size={35}/></p></td>
            <td class="black"><p><FaChessRook size={35}/></p></td>
        </tr>
        <tr>
            <td class="black">
            <p><FaChessPawn size={35} /></p></td>
            <td class="white"> <p><FaChessPawn size={35} /></p></td>
            <td class="black"><p><FaChessPawn size={35}/></p></td>
            <td class="white"><p><FaChessPawn size={35}/></p></td>
            <td class="black"><p><FaChessPawn size={35}/></p></td>
            <td class="white"><p><FaChessPawn size={35}/></p></td>
            <td class="black"><p><FaChessPawn size={35}/></p></td>
            <td class="white"><p><FaChessPawn size={35}/></p></td>
        </tr>
        <tr>
            <td class="white"></td>
            <td class="black"></td>
            <td class="white"></td>
            <td class="black"></td>
            <td class="white"></td>
            <td class="black"></td>
            <td class="white"></td>
            <td class="black"></td>
        </tr>
        <tr>
            <td class="black"></td>
            <td class="white"></td>
            <td class="black"></td>
            <td class="white"></td>
            <td class="black"></td>
            <td class="white"></td>
            <td class="black"></td>
            <td class="white"></td>
        </tr>
        <tr>
            <td class="white"></td>
            <td class="black"></td>
            <td class="white"></td>
            <td class="black"></td>
            <td class="white"></td>
            <td class="black"></td>
            <td class="white"></td>
            <td class="black"></td>
        </tr>
        <tr>
            <td class="black"></td>
            <td class="white"></td>
            <td class="black"></td>
            <td class="white"></td>
            <td class="black"></td>
            <td class="white"></td>
            <td class="black"></td>
            <td class="white"></td>
        </tr>
        <tr>
            <td class="black">
            <p style={{color:'wheat'}}><FaChessPawn size={35} /></p></td>
            <td class="white"> <p style={{color:'wheat'}}><FaChessPawn size={35} /></p></td>
            <td class="black"><p style={{color:'wheat'}}><FaChessPawn size={35}/></p></td>
            <td class="white"><p style={{color:'wheat'}}><FaChessPawn size={35}/></p></td>
            <td class="black"><p style={{color:'wheat'}}><FaChessPawn size={35}/></p></td>
            <td class="white"><p style={{color:'wheat'}}><FaChessPawn size={35}/></p></td>
            <td class="black"><p style={{color:'wheat'}}><FaChessPawn size={35}/></p></td>
            <td class="white"><p style={{color:'wheat'}}><FaChessPawn size={35}/></p></td>
        </tr>
        <tr>
        <td class="white">
            <p style={{color:'wheat'}}><FaChessRook size={35}/></p> </td>
            <td class="black"><p style={{color:'wheat'}}><FaChessKnight size={35} /></p></td>
            <td class="white"><p style={{color:'wheat'}}><FaChessBishop size={35}/></p></td>
            <td class="black"><p style={{color:'wheat'}}><FaChessQueen size={35}/></p></td>
            <td class="white"><p style={{color:'wheat'}}><FaChessKing size={35}/></p></td>
            <td class="black"><p style={{color:'wheat'}}><FaChessBishop size={35}/></p></td>
            <td class="white"><p style={{color:'wheat'}}><FaChessKnight size={35}/></p></td>
            <td class="black"><p style={{color:'wheat'}}><FaChessRook size={35}/></p></td>
        </tr>
    </table>
    </div>
  );
}

export default Chessboard;

