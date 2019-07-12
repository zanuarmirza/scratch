import React from "react";
import { FlatList, View } from "react-native";
import { Images, Metrics } from "Themes";
import { moderateScale } from "react-native-size-matters";
import ListItem from "../ListItem";

const Ingredients = props => {
  console.log("dataDummy", props);
  const _renderItem = ({ item }) => (
    <ListItem image={Images[item.image]} content={item.content} />
  );
  return (
    <View style={{ marginHorizontal: moderateScale(Metrics.marginHorizontal) }}>
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
