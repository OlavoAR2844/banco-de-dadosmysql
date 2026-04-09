-- Remove a tabela demo (exemplo) do SQLite

DROP TABLE demo;

-- Ativa a verificação da FK

PRAGMA foreign_keys = ON;

-- Cria a tabela Clientes
CREATE TABLE Clientes (
    ClienteID INTEGER PRIMARY KEY,
    Nome TEXT NOT NULL
);

-- Cria a tabela Pedidos
CREATE TABLE Pedidos (
    PedidoID INTEGER PRIMARY KEY,
    ClienteID INTEGER NOT NULL,
    DataPedido TEXT,
    FOREIGN KEY (ClienteID) REFERENCES Clientes (ClienteID)
);

-- Insere dados nas duas tabelas
INSERT INTO Clientes (Nome) VALUES ('Ana');
INSERT INTO Clientes (Nome) VALUES ('Bruno');

-- Teste da FK ou chave estrangeira
INSERT INTO Pedidos (ClienteID, DataPedido) VALUES (99, '2026-04-08');



-- Verificação da FK (teste 2) - executar separado
-- PRAGMA foreign_key_list(Pedidos);
