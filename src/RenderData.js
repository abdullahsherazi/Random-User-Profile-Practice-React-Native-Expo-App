import React, { Component } from "react";
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import {
  MaterialCommunityIcons,
  Ionicons,
  FontAwesome
} from "@expo/vector-icons";

export default class RenderData extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ProfilePhoto: "",
      FirstName: "",
      LastName: "",
      Email: "",
      Country: "",
      Birthday: "",
      PhoneNo: "",
      CreditCardNo: "",
      Pin: "",
      k: 0
    };
  }

  componentDidMount() {
    // var url=`https://api.github.com/users/${this.state.entered}`;
    var url = this.props.navigation.getParam("url");

    fetch(url)
      .then(res => {
        return res.json();
      })
      .then(user => {
        this.setState({
          ProfilePhoto: user.photo,
          FirstName: user.name,
          LastName: user.surname,
          Email: user.email,
          Country: user.region,
          PhoneNO: user.phone,
          Birthday: user.birthday.dmy,
          CreditCardNo: user.credit_card.number,
          Pin: user.credit_card.pin,
          k: 1
        });
        console.log(user);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    //  const {navigation}=this.props;
    //  const data1 =this.props.navigation.getParam('data')
    //  navigation.getParam('data');
    return (
      <View style={styles.container}>
        {/* HEADER */}

        <View
          style={{
            width: "100%",
            height: 60,
            flexDirection: "row",
            marginTop: 24
          }}
        >
          <Ionicons
            name="md-arrow-back"
            size={30}
            color="#404040"
            style={{ paddingTop: 12, paddingLeft: "5%" }}
            onPress={() => this.props.navigation.navigate("Home")}
          />
          <View
            style={{ height: 33, padding: 0, marginTop: 12, marginLeft: "15%" }}
          >
            <Text
              style={{ fontSize: 20, color: "#4db6ac", fontWeight: "bold" }}
            >
              Credit Card Profile
            </Text>
          </View>
        </View>

        {/* Profile :photo and Name */}
        <View
          style={{
            backgroundColor: "#03a9f4",
            height: 150,
            marginLeft: "3%",
            marginRight: "3%",
            borderRadius: 6
          }}
        >
          <View style={{ flexDirection: "row", marginTop: 20 }}>
            {/* ProfilePhoto */}
            {this.state.k === 0 ? (
              <Text></Text>
            ) : (
              <Image
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: 50,
                  marginLeft: "8%"
                }}
                source={{ uri: this.state.ProfilePhoto }}
              />
            )}

            {/* Names  */}
            <View style={{ marginLeft: "10%" }}>
              <Text style={{ fontSize: 25, color: "white" }}>
                {this.state.FirstName}
              </Text>
              <Text
                style={{ fontSize: 30, color: "white", fontWeight: "bold" }}
              >
                {this.state.LastName}
              </Text>
              <TouchableOpacity
                style={{
                  width: 90,
                  borderColor: "white",
                  borderWidth: 0.6,
                  borderRadius: 10,
                  marginTop: 20
                }}
              >
                <Text
                  style={{ color: "white", textAlign: "center", fontSize: 15 }}
                >
                  Edit Profile
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* personal Details */}
        <View style={{ marginLeft: "5%", marginTop: 20, marginRight: "5%" }}>
          <Text style={{ color: "#757575", fontSize: 20, fontWeight: "bold" }}>
            PERSONAL DETAILS
          </Text>
          {/* Email Area       */}
          <View
            style={{ flexDirection: "row", paddingTop: 15, paddingBottom: 10 }}
          >
            <MaterialCommunityIcons name="email" size={20} color="black" />
            <Text style={{ paddingLeft: 10 }}>{this.state.Email}</Text>
          </View>
          <View style={styles.hr} />
          {/* Country Area      */}
          <View
            style={{ flexDirection: "row", paddingTop: 15, paddingBottom: 10 }}
          >
            <Ionicons name="ios-home" size={20} color="black" />
            <Text style={{ paddingLeft: 10 }}>{this.state.Country}</Text>
          </View>
          <View style={styles.hr} />
          {/* Birthday      */}
          <View
            style={{ flexDirection: "row", paddingTop: 15, paddingBottom: 10 }}
          >
            <FontAwesome name="birthday-cake" size={20} color="black" />
            <Text style={{ paddingLeft: 10 }}>{this.state.Birthday}</Text>
          </View>
          <View style={styles.hr} />
          {/* PhoneNO Area */}
          <View
            style={{ flexDirection: "row", paddingTop: 15, paddingBottom: 10 }}
          >
            <MaterialCommunityIcons
              name="phone-classic"
              size={20}
              color="black"
            />
            <Text style={{ paddingLeft: 10 }}>{this.state.PhoneNO}</Text>
          </View>
          <View style={styles.hr} />
        </View>

        {/* CreditCard Details */}
        <View style={{ marginLeft: "5%", marginTop: 20, marginRight: "5%" }}>
          <Text style={{ color: "#757575", fontSize: 20, fontWeight: "bold" }}>
            CREDIT CARD DETAILS
          </Text>

          <View
            style={{ flexDirection: "row", paddingTop: 15, paddingBottom: 10 }}
          >
            <FontAwesome name="cc-mastercard" size={20} color="black" />
            <Text style={{ paddingLeft: 10 }}>{this.state.CreditCardNo}</Text>
          </View>
          <View style={styles.hr} />
          <View
            style={{ flexDirection: "row", paddingTop: 15, paddingBottom: 10 }}
          >
            <MaterialCommunityIcons name="pin" size={20} color="black" />

            <Text style={{ paddingLeft: 10 }}>{this.state.Pin}</Text>
          </View>
          <View style={styles.hr} />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    backgroundColor: "white"
  },
  hr: {
    borderBottomColor: "black",
    borderBottomWidth: 0.5
  }
});
