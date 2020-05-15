import * as React from "react";
import { StyleSheet, View, Image, ScrollView } from "react-native";
import { Text, Button } from "@ui-kitten/components";
import { Item, HeaderButtons } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import {
  Card,
  CardItem,
  Thumbnail,
  Icon,
  Left,
  Body,
  Right,
  Textarea,
} from "native-base";
import {
  Ionicons,
  FontAwesome5,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";

const ReplyScreen = () => (
  <ScrollView>
    <View>
      <>
        <Card>
          <CardItem cardBody>
            <Image
              source={{
                uri:
                  "https://growerssupply.files.wordpress.com/2014/06/early-blight.jpg",
              }}
              style={{ height: 300, width: null, flex: 1 }}
            />
          </CardItem>
          <CardItem>
            <Left>
              <Thumbnail
                source={{
                  uri:
                    "https://image.freepik.com/free-photo/indian-farmer-field_75648-127.jpg",
                }}
              />
              <Body>
                <Text>
                  Vineel {"\u2027"} <Text note>India</Text>
                </Text>
                <Text note>
                  1 h <Text note>{"\u2027"}</Text>
                  <MaterialCommunityIcons name="food-apple" color="red" />
                  <Text note>Apple</Text>
                </Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem>
            <Body>
              <Text>Tomato disease crop destrection</Text>
              <Text note>borm fire</Text>
            </Body>
          </CardItem>
        </Card>
      </>
      <View style={{ margin: 10, backgroundColor: "white" }}>
        <Textarea
          style={{ marginLeft: 5, height: 100 }}
          placeholder="Add comment here"
        ></Textarea>
      </View>
      <View style={{ flexDirection: "row" }}>
        <Button style={{ marginLeft: 75 }}>Attach</Button>
        <Button style={{ marginLeft: 75 }}>Post</Button>
      </View>
    </View>
  </ScrollView>
);
export const replyScreenOptions = () => {
  return {
    headerShown: true,
    headerTitle: "Kisanvedika"
  };
};
const styles = StyleSheet.create({
  text: {
    paddingVertical: 20,
  },
});

export default ReplyScreen;
