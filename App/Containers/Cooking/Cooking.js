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
  static navigationOptions = ({ navigation }) => ({
    header: null
  });

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
