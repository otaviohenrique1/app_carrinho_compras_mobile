import { StyleSheet, Text, View, FlatList } from "react-native";
import { listaProdutos } from "../utils/listas";
import { ListaProdutosItem } from "../components/ListaProdutosItem";

export function Homepage() {
  return (
    <View>
      <Text>Lista</Text>
      <FlatList
        data={listaProdutos}
        renderItem={(item) => {
          const { id, nome, preco, imagem } = item.item;
          return (
            <ListaProdutosItem
              key={item.index}
              id={id}
              nome={nome}
              preco={preco}
              imagem={imagem[0]}
            />
          );
        }}
        keyExtractor={(item) => (item.id).toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
});
