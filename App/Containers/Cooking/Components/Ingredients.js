import React from "react";
import { FlatList, View } from "react-native";
import ListItem from "./ListItem";

const Ingredients = props => {
  const _renderItem = ({ item }) => (
    <ListItem image={item.image} content={item.content} />
  );
  return (
    <View>
      <FlatList
        data={props.data}
        renderItem={_renderItem}
        keyExtractor={item => item.id.toString()}
        showsVerticalScrollIndicator={false}
        removeClippedSubviews
      />
    </View>
  );
};

export default Ingredients;
