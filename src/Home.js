import React, { Component } from "react";
import { ImageBackground, View, Text, TouchableOpacity } from "react-native";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: "https://uinames.com/api/?ext"
    };
  }

  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <ImageBackground
        source={require("./BackgroundImage.jpg")}
        style={{ width: "100%", height: "100%" }}
      >
        <View
          style={{
            paddingTop: 7,
            marginTop: "60%",
            backgroundColor: "#263238",
            height: 40,
            borderRadius: 5,
            width: "90%",
            marginLeft: 20
          }}
        >
          <Text style={{ color: "white", textAlign: "center" }}>
            Click the button to see a random person's profile{" "}
          </Text>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: "#263238",
            paddingTop: 1,
            width: 150,
            marginLeft: "30%",
            borderRadius: 5,
            height: 30,
            marginTop: 10
          }}
          onPress={() =>
            this.props.navigation.navigate("RenderData", {
              url: this.state.url
            })
          }
        >
          <Text
            style={{
              color: "white",
              textAlign: "center",
              fontWeight: "bold",
              fontSize: 20
            }}
          >
            CLICK ME!
          </Text>
        </TouchableOpacity>
      </ImageBackground>
    );
  }
}
