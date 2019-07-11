import { BackButtonArrow, Text } from "Components";
import I18n from "I18n";
import * as lang from "I18n/languages/Type";
import React, { Component } from "react";
import {
  FlatList,
  Image,
  View,
  ImageBackground,
  Dimensions,
  StatusBar
} from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import { Button } from "react-native-elements";
import { moderateScale } from "react-native-size-matters";
import { Colors, Metrics, Images } from "Themes";
import { Ingredients, HowToCook, Additional } from "./Components";
import dataDummy from "./DummyData.json";

class Cooking extends Component {
  /**
   * Header Configuration
   */
  static navigationOptions = ({ navigation }) => {
    const ButtonContent = () => (
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image
          source={Images.playIcon}
          style={{ width: moderateScale(7), height: moderateScale(3) }}
        />
        <Text>{I18n.t(lang.COOK_NOW)}</Text>
      </View>
    );
    return {
      headerLeft: (
        <BackButtonArrow
          onPress={() => navigation.goBack()}
          label={I18n.t(lang.BACK_TO_PROFILE)}
        />
      ),
      headerRight: (
        <View
          style={{
            flexDirection: "row"
          }}
        >
          <Button
            ViewComponent={ButtonContent}
            type="outline"
            containerStyle={{
              overflow: "hidden",
              alignItems: "center"
            }}
            buttonStyle={{
              backgroundColor: Colors.dark_1_opacity_5,
              borderColor: Colors.white,
              borderWidth: 1,
              height: moderateScale(30),
              width: moderateScale(70),
              borderRadius: Metrics.borderRadius.small
            }}
          />
        </View>
      )
    };
  };

  state = {
    /* eslint-disable react/no-unused-state */
    index: 0,
    routes: [
      { key: "first", title: "Ingredients" },
      { key: "second", title: "How To Cook" },
      { key: "third", title: "Additional" }
    ]
    /* eslint-disable react/no-unused-state */
  };

  _renderImagePreview = () => (
    <FlatList
      data={dataDummy}
      renderItem={this._renderItem}
      keyExtractor={item => item.id.toString()}
      showsVerticalScrollIndicator={false}
      removeClippedSubviews
    />
  );

  _renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: Colors.primary, height: 2 }}
      style={{ backgroundColor: Colors.white }}
      scrollEnabled
      tabStyle={{
        width: moderateScale(150)
      }}
      renderLabel={({ route, focused, color }) => (
        <Text style={{ color: focused ? Colors.dark_1 : Colors.dark_2 }}>
          {route.title}
        </Text>
      )}
    />
  );

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ImageBackground
          source={Images[dataDummy.image]}
          resizeMode="cover"
          style={{
            flex: 1
          }}
        >
          <View
            style={{
              flex: 1,
              marginHorizontal: Metrics.marginHorizontal,
              justifyContent: "flex-end",
              marginBottom: moderateScale(20)
            }}
          >
            <Text
              weight="bold"
              style={{
                color: Colors.white,
                ...Metrics.text.xlarge
              }}
            >
              {dataDummy.title}
            </Text>
          </View>
        </ImageBackground>
        <TabView
          renderTabBar={this._renderTabBar}
          navigationState={this.state}
          renderScene={SceneMap({
            first: Ingredients,
            second: HowToCook,
            third: Additional
          })}
          onIndexChange={index => this.setState({ index })}
          initialLayout={{ width: Dimensions.get("window").width }}
        />
      </View>
    );
  }
}

export default Cooking;
