// Criar a coleção
db.funcionarios.insertMany([
  {
    Cpf: "12345678966",
    Sexo: "M",
    Salario: 30000,
    Endereco: "Rua das Flores 751 São Paulo SP",
    Nome_Meio: "B",
    Dependentes: [
      { Sexo: "F", Parentesco: "Filha", Data_Nascimento: ISODate("1988-01-30T00:00:00Z"), Nome_Dependente: "Alicia" },
      { Sexo: "F", Parentesco: "Esposa", Data_Nascimento: ISODate("1967-01-05T00:00:00Z"), Nome_Dependente: "Elizabeth" },
      { Sexo: "M", Parentesco: "Filho", Data_Nascimento: ISODate("1988-01-01T00:00:00Z"), Nome_Dependente: "Michael" }
    ],
    Ultimo_Nome: "Silva",
    Primeiro_Nome: "João",
    Cpf_Supervisor: "33344555587",
    Data_Nascimento: ISODate("1965-01-01T00:00:00Z"),
    Numero_Departamento: "5"
  },
  {
    Cpf: "33344555587",
    Sexo: "M",
    Salario: 40000,
    Endereco: "Rua da Lapa 34 São Paulo SP",
    Nome_Meio: "T",
    Dependentes: [
      { Sexo: "F", Parentesco: "Filha", Data_Nascimento: ISODate("1986-01-05T00:00:00Z"), Nome_Dependente: "Alicia" },
      { Sexo: "F", Parentesco: "Esposa", Data_Nascimento: ISODate("1958-01-03T00:00:00Z"), Nome_Dependente: "Janaína" },
      { Sexo: "M", Parentesco: "Filho", Data_Nascimento: ISODate("1983-01-25T00:00:00Z"), Nome_Dependente: "Tiago" }
    ],
    Ultimo_Nome: "Wong",
    Primeiro_Nome: "Fernando",
    Cpf_Supervisor: "88866555576",
    Data_Nascimento: ISODate("1955-01-12T00:00:00Z"),
    Numero_Departamento: "5"
  },
  {
    Cpf: "44111555587",
    Sexo: "M",
    Salario: 31000,
    Endereco: "Rua Rodrigues Alves 771 Rio de Janeiro RJ",
    Nome_Meio: "V",
    Dependentes: [
      { Sexo: "F", Parentesco: "Esposa", Data_Nascimento: ISODate("1986-01-07T00:00:00Z"), Nome_Dependente: "Joaquina" }
    ],
    Ultimo_Nome: "Teixiera",
    Primeiro_Nome: "Ubiratan",
    Cpf_Supervisor: "88866555576",
    Data_Nascimento: ISODate("1984-01-15T00:00:00Z"),
    Numero_Departamento: "5"
  }
]);

// 🔍 Consulta 5: Filtrar funcionários que têm dependente chamado "Alicia"
db.funcionarios.find({ "Dependentes.Nome_Dependente": "Alicia" });



