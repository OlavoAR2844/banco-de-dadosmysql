-- Consulta detalhes dos pedidos
SELECT * FROM OrderDetails;

-- Consulta empregados por data de nascimento
SELECT
    EmployeeID,
    FirstName,
    LastName,
    BirthDate,
    Photo,
    Notes
FROM
    Employees
ORDER BY
    BirthDate ASC; -- ASC é opcional, pois ascendente é a ordem padrão

-- Seleciona funcionarios com mais de 60 anos na data atual
SELECT
    FirstName,
    LastName,
    BirthDate,
    (CAST(strftime('%Y', '2025-06-17') AS INTEGER) - CAST(strftime('%Y', BirthDate) AS INTEGER)) -
    CASE
        WHEN CAST(strftime('%m%d', '2025-06-17') AS INTEGER) < CAST(strftime('%m%d', BirthDate) AS INTEGER) THEN 1
        ELSE 0
    END AS IdadeAtual
FROM Employees
WHERE
    (CAST(strftime('%Y', '2025-06-17') AS INTEGER) - CAST(strftime('%Y', BirthDate) AS INTEGER)) -
    CASE
        WHEN CAST(strftime('%m%d', '2025-06-17') AS INTEGER) < CAST(strftime('%m%d', BirthDate) AS INTEGER) THEN 1
        ELSE 0
    END > 60;

-- Remove pedidos feitos em jan./1997
DELETE FROM Orders
WHERE strftime('%Y-%m', OrderDate) = '1997-01';

-- Mostra a tabela atualizada
SELECT *
FROM Orders
WHERE strftime('%Y-%m', OrderDate) = '1997-01';
