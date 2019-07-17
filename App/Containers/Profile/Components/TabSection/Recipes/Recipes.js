import React from "react";
import { FlatList, View } from "react-native";
import { Images } from "Themes";
import { moderateScale } from "react-native-size-matters";
import ListItem from "./ListItem";

const Recipes = props => {
  const _renderItem = ({ item, index }) => (
    <ListItem image={Images[item.image]} name={item.name} />
  );
  return (
    <View>
      <FlatList
        data={props.data}
        numColumns={2}
        columnWrapperStyle={{
          justifyContent: "space-between",
          marginBottom: moderateScale(20),
          marginHorizontal: moderateScale(20)
        }}
        renderItem={_renderItem}
        keyExtractor={item => item.id.toString()}
        showsVerticalScrollIndicator={false}
        removeClippedSubviews
      />
    </View>
  );
};

export default Recipes;
