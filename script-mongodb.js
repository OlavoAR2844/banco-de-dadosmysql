// 1a parte do código para MongoDB no OneCompiler

// Criar a coleção (adaptado para uso do OneCompiler)
db.createCollection("mensagens");

// Inserir um documento
db.mensagens.insertOne({
  usuario: "lucas",
  mensagem: "Olá, mundo!",
  data: ISODate("2024-12-06T14:08:02Z"),
  anexo: null
});

// Consultar documentos
db.mensagens.find({ usuario: "lucas" });


// Copie abaixo 2a parte do código

// 2a parte do código para MongoDB

// Atualiza o documento
db.mensagens.updateOne(
  { usuario: "lucas" },
  { $set: { anexo: "imagem.jpg" } }
);

// Deleta documento
db.mensagens.deleteOne({ usuario: "lucas" });

