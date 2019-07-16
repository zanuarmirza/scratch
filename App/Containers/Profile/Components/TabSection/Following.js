import React from "react";
import { FlatList, View } from "react-native";
import { Text } from "Components";

const Following = props => {
  const _renderItem = ({ item, index }) => (
    <Text>
      {index}. {item}
    </Text>
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

export default Following;
