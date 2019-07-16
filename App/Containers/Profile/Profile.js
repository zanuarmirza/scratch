import { Text } from "Components";
import React, { Component } from "react";
import { ScrollView, View } from "react-native";
import { moderateScale } from "react-native-size-matters";
import { TabBar } from "react-native-tab-view";
import { Metrics, Colors } from "Themes";
import { Header } from "./Components";
// import { Recipes, Saved, Following } from "./Components";
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

  _renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: Colors.primary, height: 2 }}
      style={{ backgroundColor: Colors.white }}
      scrollEnabled
      tabStyle={{
        width: moderateScale(150)
      }}
      renderLabel={({ route, focused }) => (
        <Text style={{ color: focused ? Colors.dark_1 : Colors.dark_2 }}>
          {route.title}
        </Text>
      )}
    />
  );

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
          {/* <TabView
            renderTabBar={this._renderTabBar}
            navigationState={this.state}
            renderScene={SceneMap({
              first: Recipes,
              second: Saved,
              third: Following
            })}
            onIndexChange={index => this.setState({ index })}
            initialLayout={{ width: Dimensions.get("window").width }}
          /> */}
        </ScrollView>
      </View>
    );
  }
}

export default Profile;
