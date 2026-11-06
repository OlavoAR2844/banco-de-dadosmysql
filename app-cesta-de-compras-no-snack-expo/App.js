import React from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';


const cesta = {
  nome: "Cesta de Verduras",
  fazenda: "Fazenda Boa Terra",
  preco: "R$ 40,00",
  imagemFazenda: "https://nostracasa.com.br/wp-content/uploads/2026/07/fazenda-grande-extensao-area-rural.png", // imagem ilustrativa
  itens: [
    { id: "1", nome: "Alface", imagem: "https://www.proativaalimentos.com.br/image/cache/catalog/img_prod/1839128[1]-1000x1000.jpg"},
    { id: "2", nome: "Tomate", imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVt_P49_TaKNsUm2B4-kC81mM1zs_HjigSwQe2aXBQ0A&s=10" },
    { id: "3", nome: "Cenoura", imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjSg-y5YQ2GakEV5CyXp2JKaM_1gQo4RDf9HEbx3iZhg&s=10" },
    { id: "4", nome: "Batata", imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG6BTpuo8LrMWVOE53TcZ4a59dbLTdGbJQcu-2pcQfsg&s=10" },
  ],
};


export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>{cesta.nome}</Text>
      <Text style={styles.subtitulo}>{cesta.fazenda}</Text>
      <Image source={{ uri: cesta.imagemFazenda }} style={styles.imagemFazenda} />
      <Text style={styles.preco}>{cesta.preco}</Text>


      <Text style={styles.itensTitulo}>Itens da cesta:</Text>
      <FlatList
        data={cesta.itens}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Image source={{ uri: item.imagem }} style={styles.itemImagem} />
            <Text style={styles.item}>{item.nome}</Text>
          </View>
        )}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  titulo: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 5,
  },
  subtitulo: {
    fontSize: 18,
    color: "#555",
    marginBottom: 5,
  },
  preco: {
    fontSize: 18,
    color: "green",
    marginBottom: 15,
  },
  imagemFazenda: {
    width: "100%",
    height: 200,
    marginBottom: 15,
    borderRadius: 10,
  },
  itensTitulo: {
    fontSize: 20,
    marginBottom: 10,
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  itemImagem: {
    width: 50,
    height: 50,
    marginRight: 10,
    borderRadius: 5,
  },
  item: {
    fontSize: 16,
  },
});



