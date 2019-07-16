import React, { Component } from "react";
import { View, Image, FlatList, StatusBar } from "react-native";
import { moderateScale } from "react-native-size-matters";
import { Metrics, Images } from "Themes";
import { MessagesIcon, NotificationIcon, Card } from "./Components";

import dataDummy from "./DummyData.json";

class Home extends Component {
  /**
   * Header Configuration
   */
  static navigationOptions = ({ navigation }) => ({
    headerStyle: {
      marginTop: StatusBar.currentHeight,
      elevation: 0
    },
    headerLeft: (
      <Image
        resizeMode="contain"
        source={Images.logo}
        style={{
          width: moderateScale(149),
          height: moderateScale(27)
        }}
      />
    ),
    headerRight: (
      <View
        style={{
          flexDirection: "row"
        }}
      >
        <View style={{ marginRight: moderateScale(Metrics.marginHorizontal) }}>
          <NotificationIcon onPress={() => console.log("notification")} />
        </View>
        <View style={{ marginRight: moderateScale(Metrics.marginHorizontal) }}>
          <MessagesIcon onPress={() => console.log("notification")} />
        </View>
      </View>
    )
  });

  constructor(props) {
    super(props);
    this.state = { notification: 0, messages: 0 };
  }

  _renderItem = ({ item }) => (
    <Card
      navigateDetailHandler={() => this.props.navigation.navigate("Cooking")}
      imageBg={Images[item.content_image]}
      profileImage={Images[item.profile_image]}
      name={item.name}
      time={item.updated_at}
      title={item.title}
      content={item.content}
      like={item.like}
      comment={item.comment}
    />
  );

  render() {
    return (
      <View
        style={{ marginHorizontal: moderateScale(Metrics.marginHorizontal) }}
      >
        <FlatList
          data={dataDummy}
          renderItem={this._renderItem}
          keyExtractor={item => item.id.toString()}
          showsVerticalScrollIndicator={false}
          removeClippedSubviews
        />
      </View>
    );
  }
}

export default Home;
