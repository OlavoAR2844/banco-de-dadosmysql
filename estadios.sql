CREATE TABLE Estadio (
    Codigo INT PRIMARY KEY,
    Nome VARCHAR(255),
    Rua VARCHAR(255),
    Cidade VARCHAR(255),
    CEP VARCHAR(10),
    Estado VARCHAR(50),
    Pais VARCHAR(50),
    Capacidade INT
);
SELECT * FROM Estadio
