import { Text } from "Components";
import React, { Component } from "react";
import { Dimensions, ScrollView, View } from "react-native";
import { moderateScale } from "react-native-size-matters";
import { SceneMap, TabBar, TabView } from "react-native-tab-view";
import { Colors, Metrics } from "Themes";
import { Following, Header, Recipes, Saved } from "./Components";
import dataDummy from "./DummyData.json";

class Profile extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerStyle: {
      elevation: 0
    }
  });

  state = {
    /* eslint-disable react/no-unused-state */
    index: 0,
    routes: [
      { key: "first", title: "Recipes" },
      { key: "second", title: "Saved" },
      { key: "third", title: "Following" }
    ]
    /* eslint-disable react/no-unused-state */
  };

  _renderTabBar = props => {
    console.log(props);
    return (
      <TabBar
        {...props}
        indicatorStyle={{ backgroundColor: Colors.primary, height: 2 }}
        style={{ backgroundColor: "tranparent" }}
        renderLabel={({ route, focused }) => (
          <View style={{ height: moderateScale(50) }} />
        )}
      />
    );
  };

  _renderLabel = ({ index, value, label }) => {
    let viewStyle;
    switch (index) {
      case 1:
        viewStyle = { alignItems: "center" };
        break;
      case 2:
        viewStyle = { alignItems: "flex-end" };
        break;
      default:
        break;
    }
    const style = this.state.index == index && { color: Colors.dark_1 };
    return (
      <View style={viewStyle}>
        <Text size="large" style={style}>
          {value}
        </Text>
        <Text size="medium" style={style}>
          {label}
        </Text>
      </View>
    );
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          marginHorizontal: moderateScale(Metrics.marginHorizontal)
        }}
      >
        <ScrollView>
          <Header profile={dataDummy.profile} />
          <View
            style={{
              position: "relative",
              top: moderateScale(60),
              marginTop: moderateScale(-50),
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between"
            }}
          >
            {this._renderLabel({ index: 0, value: 20, label: "Recipe" })}
            {this._renderLabel({ index: 1, value: 20, label: "Saved" })}
            {this._renderLabel({ index: 2, value: 20, label: "Following" })}
          </View>
          <TabView
            renderTabBar={this._renderTabBar}
            navigationState={this.state}
            renderScene={SceneMap({
              first: Recipes,
              second: Saved,
              third: Following
            })}
            onIndexChange={index => this.setState({ index })}
            initialLayout={{ width: Dimensions.get("window").width }}
          />
        </ScrollView>
      </View>
    );
  }
}

export default Profile;
