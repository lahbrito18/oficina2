// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract NotaFiscal {
    struct Nota {
        uint id;
        string descricao;
        uint valor;
        address emissor;
    }

    uint public totalNotas = 0;
    mapping(uint => Nota) public notas;

    event NotaEmitida(uint id, string descricao, uint valor, address emissor);
    event NotaRemovida(uint id, address removidoPor);

    function emitirNota(string memory _descricao, uint _valor) public {
        notas[totalNotas] = Nota(totalNotas, _descricao, _valor, msg.sender);
        emit NotaEmitida(totalNotas, _descricao, _valor, msg.sender);
        totalNotas++;
    }
}
