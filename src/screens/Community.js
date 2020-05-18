import React from "react";
import { Image, View, ScrollView } from "react-native";
import ShareExample from "../components/Share";
import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";
import {
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right,
} from "native-base";
import Fab from "../components/Fab";

const Community = (props) => {
  return (
    <View>
      <ScrollView>
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
            <CardItem>
              <Body>
                <Text note uppercase={false}>
                  Translate
                </Text>
              </Body>
              <Left>
                <Text note uppercase={false}>
                  22 Views
                </Text>
              </Left>
              <Left>
                <Text note uppercase={false}>
                  1 Answers
                </Text>
              </Left>
            </CardItem>
            <CardItem style={{ margin: 10 }}>
              <Left>
                <Button transparent>
                  <FontAwesome5 name="thumbs-up" style={{ color: "grey" }} />
                  <Text uppercase={false} style={{ color: "grey" }}>
                    Like
                  </Text>
                </Button>
              </Left>
              <Body>
                <Button
                  style={{ marginRight: 35 }}
                  transparent
                  onPress={() => {
                    props.navigation.navigate("ReplyScreen");
                  }}
                >
                  <FontAwesome5 name="reply" style={{ color: "grey" }} />
                  <Text uppercase={false} style={{ color: "grey" }}>
                    Reply
                  </Text>
                </Button>
              </Body>
              <Right>
                <ShareExample />
              </Right>
            </CardItem>
            <View>
              <CardItem cardBody>
                <Image
                  source={{
                    uri:
                      "https://www.gardeningknowhow.com/wp-content/uploads/2015/12/cauliflower-disease-400x263.jpg",
                  }}
                  style={{ height: 300, width: null, flex: 1 }}
                />
              </CardItem>
              <CardItem>
                <Left>
                  <Thumbnail
                    source={{
                      uri:
                        "https://thumbs.dreamstime.com/b/worry-indian-farmer-standing-hand-folded-his-healthy-wheat-field-174017946.jpg",
                    }}
                  />
                  <Body>
                    <Text>
                      Arjun Kumar {"\u2027"} <Text note>India</Text>
                    </Text>
                    <Text note>
                      5 h <Text note>{"\u2027"}</Text>
                      <MaterialCommunityIcons name="food-apple" color="red" />
                      <Text note>Apple</Text>
                    </Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem>
                <Body>
                  <Text>Beetroot disease crop destrection</Text>
                  <Text note>borm fire</Text>
                </Body>
              </CardItem>
              <CardItem>
                <Body>
                  <Text note uppercase={false}>
                    Translate
                  </Text>
                </Body>
                <Text note uppercase={false}>
                  18 Views
                </Text>
                <Right>
                  <Text note uppercase={false}>
                    15 answers
                  </Text>
                </Right>
              </CardItem>
              <CardItem>
                <Left>
                  <Button transparent>
                    <FontAwesome5 name="thumbs-up" style={{ color: "grey" }} />
                    <Text uppercase={false} style={{ color: "grey" }}>
                      Like
                    </Text>
                  </Button>
                </Left>
                <Body>
                  <Button
                    style={{ marginRight: 35 }}
                    transparent
                    onPress={() => {
                      props.navigation.navigate("ReplyScreen");
                    }}
                  >
                    <FontAwesome5 name="reply" style={{ color: "grey" }} />
                    <Text uppercase={false} style={{ color: "grey" }}>
                      Reply
                    </Text>
                  </Button>
                </Body>
                <Right>
                  <ShareExample />
                </Right>
              </CardItem>
            </View>
          </Card>
        </>
      </ScrollView>
      <Fab
        iconName="square-edit-outline"
        labelName="Ask Kisanvedika"
        onSelect={() => {
          props.navigation.navigate("Kisanvedika");
        }}
      />
    </View>
  );
};

export default Community;
