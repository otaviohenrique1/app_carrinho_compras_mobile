import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { formatadorMonetario } from "../utils/formatadores";

export interface ListaProdutosItemProps {
  id: number;
  nome: string;
  preco: number;
  imagem: string;
}

export function ListaProdutosItem(props: ListaProdutosItemProps) {
  const { id, nome, preco, imagem } = props;

  return (
    <View style={styles.container}>
      <Image
        style={styles.imagem}
        source={{ uri: imagem }}
      />
      <View style={styles.containerDados}>
        <Text
          style={styles.nome}
        >{nome}</Text>
        <Text
          style={styles.preco}
        >{formatadorMonetario(preco)}</Text>
      </View>
      <View>
        <TouchableOpacity
          onPress={() => {}}
        >
          <Text>sad</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    padding: 10,
    marginBottom: 10,
    borderColor: "black",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 5,
    backgroundColor: "coral",
  },
  containerDados: {
    flexDirection: "column",
  },
  imagem: {
    borderColor: "black",
    borderWidth: 1,
    borderStyle: "solid",
    width: 50,
    height: 50,
    borderRadius: 5,
    marginRight: 10,
  },
  nome: {
    marginBottom: 5,
    fontSize: 16
  },
  preco: {
    fontSize: 14
  },
});
