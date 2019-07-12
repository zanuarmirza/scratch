import React from "react";
import { View, Image, ImageBackground } from "react-native";
import { Images, Colors } from "Themes";
import { TouchableOpacity, Text } from "Components";
import { moderateScale } from "react-native-size-matters";

const SquareListItem = props => {
  let item = null;
  if (props.moreItem) {
    item = (
      <ImageBackground
        source={props.image}
        resizeMode="cover"
        style={{
          width: moderateScale(100),
          height: moderateScale(90)
        }}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: "rgba(255,255,255,0.5)",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Text
            style={{ textAlign: "center", color: Colors.dark_1 }}
            size="large"
          >
            + {props.moreItem}
          </Text>
        </View>
      </ImageBackground>
    );
  } else {
    item = (
      <Image
        source={props.image}
        resizeMode="cover"
        style={{
          width: moderateScale(100),
          height: moderateScale(90)
        }}
      />
    );
  }
  return (
    <TouchableOpacity onPress={() => console.log("click")}>
      {item}
    </TouchableOpacity>
  );
};
/**
 *
 * @param {Array} items
 */
const _renderListItem = items => {
  let moreItem = false;
  const listItem = [];
  items.some((item, index) => {
    if (index > 2) {
      return true;
    }
    if (index == 2) {
      moreItem = items.length - 3;
    }
    listItem.push(
      <SquareListItem
        image={Images[item.image]}
        content={item.content}
        moreItem={moreItem}
      />
    );
    return false;
  });
  return listItem;
};

const ImagesPreview = props => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between"
      }}
    >
      {_renderListItem(props.images)}
    </View>
  );
};

export default ImagesPreview;
