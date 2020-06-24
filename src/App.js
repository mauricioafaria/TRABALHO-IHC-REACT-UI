import React, { Component } from "react";
import {
  Alert,
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity
} from "react-native";

const instructions = Platform.select({
  ios: `Press Cmd+R to reload,\nCmd+D or shake for dev menu`,
  android: `Double tap R on your keyboard to reload,\nShake or press menu button for dev menu`
});

export default class App extends Component {
  clicou = () => {
    Alert.alert(
      "Seja Bem-Vindo Viadões",
      "Essa porra é dificil pra caralho, tomara que de tempo de fazer esse BA-GU-LHO "
    );
  };
  render() {
    return (
      <View style={styles.container}>
        <Image source={require("./Imagens/logo.jpeg")} style={styles.logo} />

        <TextInput placeholder="Digite seu email" style={styles.input} />

        <TextInput
          placeholder="Digite sua senha"
          style={styles.input}
          secureTextEntry={true}
        />

        <TouchableOpacity
          style={styles.botao}
          onPress={() => {
            this.clicou();
          }}
        >
          <Text style={styles.botaoText}>Login</Text>
        </TouchableOpacity>

        <Text style={styles.welcome}>Trabalho de IHC</Text>
        <Text style={styles.instructions}>React Native</Text>
        <Text style={styles.instructions}>Força Galera, tá acabando!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f7f7f7" // cor do logotipo fundo
  },

  botaoText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff"
  },

  botao: {
    width: 300,
    height: 42,
    backgroundColor: "#000", // cor Preto
    marginTop: 10,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center"
  },

  input: {
    marginTop: 10,
    padding: 10,
    width: 300,
    backgroundColor: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    borderRadius: 3
  },

  logo: {
    width: 250,
    height: 100,
    borderRadius: 35
  },

  welcome: {
    color: "#000",
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },

  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
