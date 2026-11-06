import React, { useState } from 'react';
import { 
  Text, 
  View, 
  Button, 
  StyleSheet, 
  Modal, 
  TouchableOpacity, 
  TextInput, 
  ScrollView, 
  Alert 
} from 'react-native';

export default function App() {
  // Lista inicial com receitas cadastradas
  const [listaReceitas, setListaReceitas] = useState([
    {
      id: '1',
      nome: 'Bolo de Cenoura',
      ingredientes: '• 3 cenouras médias\n• 4 ovos e 1 xícara de óleo\n• 2 xícaras de açúcar\n• 2 e 1/2 xícaras de farinha de trigo\n• 1 colher (sopa) de fermento',
      modoPreparo: 'Bata no liquidificador as cenouras, os ovos e o óleo. Em uma tigela, misture com o açúcar e a farinha. Adicione o fermento por último e asse por 40 minutos.'
    }
  ]);

  // Estados para controlar o Modal de Visualização (Requisito 2)
  const [verReceitaVisivel, setVerReceitaVisivel] = useState(false);
  const [receitaSelecionada, setReceitaSelecionada] = useState(null);

  // Estados para controlar o Modal de Cadastro e seus campos (Requisito 4)
  const [cadastroVisivel, setCadastroVisivel] = useState(false);
  const [nomeReceita, setNomeReceita] = useState('');
  const [ingredientes, setIngredientes] = useState('');
  const [modoPreparo, setModoPreparo] = useState('');

  // Função para abrir a visualização de uma receita específica
  const abrirReceita = (receita) => {
    setReceitaSelecionada(receita);
    setVerReceitaVisivel(true);
  };

  // Função para validar e salvar a nova receita na lista
  const handleSalvar = () => {
    if (!nomeReceita.trim() || !ingredientes.trim() || !modoPreparo.trim()) {
      Alert.alert('Atenção', 'Por favor, preencha todos os campos!');
      return;
    }

    const novaReceita = {
      id: Math.random().toString(),
      nome: nomeReceita,
      ingredientes: ingredientes,
      modoPreparo: modoPreparo,
    };

    setListaReceitas([...listaReceitas, novaReceita]);
    Alert.alert('Sucesso', 'Receita cadastrada com sucesso!');
    limparCamposEFechar();
  };

  // Função para limpar os textos e fechar o modal
  const limparCamposEFechar = () => {
    setNomeReceita('');
    setIngredientes('');
    setModoPreparo('');
    setCadastroVisivel(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>App de Receitas</Text>
      <Text style={styles.subtitle}>Organizando o layout com StyleSheet</Text>
      
      {/* ScrollView para renderizar cada receita cadastrada em cartão individual */}
      <ScrollView style={styles.scrollContainer} contentContainerStyle={styles.scrollContent}>
        {listaReceitas.map((receita) => (
          <View key={receita.id} style={styles.card}>
            <Text style={styles.cardTitle}>{receita.nome}</Text>
            <Button 
              title="Ver Receita" 
              onPress={() => abrirReceita(receita)} 
              color="#D35400" 
            />
          </View>
        ))}
      </ScrollView>
      
      {/* 1º MODAL: Detalhes da Receita Selecionada */}
      <Modal
        visible={verReceitaVisivel}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setVerReceitaVisivel(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            {receitaSelecionada && (
              <>
                <Text style={styles.recipeTitle}>{receitaSelecionada.nome}</Text>
                
                <Text style={styles.sectionTitle}>Ingredientes:</Text>
                <Text style={styles.recipeText}>{receitaSelecionada.ingredientes}</Text>
                
                <Text style={styles.sectionTitle}>Modo de Preparo:</Text>
                <Text style={styles.recipeText}>{receitaSelecionada.modoPreparo}</Text>
              </>
            )}
            
            <View style={{ width: '100%', marginTop: 10 }}>
              <Button 
                title="Fechar" 
                onPress={() => setVerReceitaVisivel(false)} 
                color="#D35400" 
              />
            </View>
          </View>
        </View>
      </Modal>

      {/* 2º MODAL: Tela de Cadastro (Requisito 4) */}
      <Modal
        visible={cadastroVisivel}
        animationType="slide"
        transparent={true}
        onRequestClose={limparCamposEFechar}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Cadastrar Receita</Text>

            <Text style={styles.label}>Nome da Receita:</Text>
            <TextInput 
              style={styles.input}
              placeholder="Ex: Torta de Frango"
              value={nomeReceita}
              onChangeText={setNomeReceita}
            />

            <Text style={styles.label}>Ingredientes:</Text>
            <TextInput 
              style={[styles.input, styles.textArea]}
              placeholder="Ex: • 2 ovos..."
              multiline={true}
              numberOfLines={4}
              value={ingredientes}
              onChangeText={setIngredientes}
            />

            <Text style={styles.label}>Modo de Preparo:</Text>
            <TextInput 
              style={[styles.input, styles.textArea]}
              placeholder="Ex: Misture tudo..."
              multiline={true}
              numberOfLines={4}
              value={modoPreparo}
              onChangeText={setModoPreparo}
            />

            <View style={styles.buttonContainer}>
              <View style={styles.fixToText}>
                <Button title="Salvar" onPress={handleSalvar} color="#27AE60" />
              </View>
              <View style={styles.fixToText}>
                <Button title="Cancelar" onPress={limparCamposEFechar} color="#C0392B" />
              </View>
            </View>
          </View>
        </View>
      </Modal>

      {/* Botão Flutuante (FAB) configurado para abrir a Tela de Cadastro */}
      <TouchableOpacity 
        style={styles.fab} 
        onPress={() => setCadastroVisivel(true)}
        activeOpacity={0.7}
      >
        <Text style={styles.fabIcon}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF8F0",
    paddingTop: 50,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 5,
    color: "#D35400",
  },
  subtitle: {
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 20,
    color: "#2C3E50",
  },
  scrollContainer: {
    flex: 1,
    width: "100%",
  },
  scrollContent: {
    alignItems: "center",
    paddingBottom: 100,
  },
  card: {
    width: "85%",
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    padding: 16,
    marginBottom: 15,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#D35400",
    marginBottom: 10,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: "85%",
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 24,
    alignItems: "flex-start",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    maxHeight: "80%",
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#D35400",
    marginBottom: 15,
    alignSelf: "center",
  },
  recipeTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#D35400",
    marginBottom: 15,
    alignSelf: "center",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#2C3E50",
    marginTop: 10,
    marginBottom: 5,
  },
  recipeText: {
    fontSize: 14,
    color: "#34495E",
    lineHeight: 22,
    marginBottom: 10,
  },
  label: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#2C3E50",
    marginTop: 10,
    marginBottom: 5,
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#BDC3C7",
    borderRadius: 6,
    padding: 10,
    backgroundColor: "#FAFAFA",
    fontSize: 14,
  },
  textArea: {
    height: 80,
    textAlignVertical: "top",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 20,
  },
  fixToText: {
    width: "48%",
  },
  fab: {
    position: 'absolute',
    bottom: 24,
    right: 24,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#D35400',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  fabIcon: {
    fontSize: 28,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});
