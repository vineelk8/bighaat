import React from "react";
import { Image, View, ScrollView } from "react-native";
import { Ionicons, FontAwesome5, MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
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

const Community = (props) => {
  return (
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
            <Text note uppercase={false}>
              22 Views
            </Text>
            <Right>
              <Text note uppercase={false}>
                1 answers
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
              <Button transparent onPress={() => {
                props.navigation.navigate("ReplyScreen");
              }}>
                <FontAwesome5 name="reply" style={{ color: "grey" }} />
                <Text uppercase={false} style={{ color: "grey" }}>
                  Reply
              </Text>
              </Button>
            </Body>
            <Right>
              {/* <Ionicons name="md-share" size={24} color="grey" /> */}
              <Button transparent>
                <Icon name="md-share" style={{ color: "grey" }} />
                <Text uppercase={false} style={{ color: "grey" }}>
                  Share
              </Text>
              </Button>
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
                <Button transparent onPress={() => {
                  props.navigation.navigate("ReplyScreen");
                }}>
                  <FontAwesome5 name="reply" style={{ color: "grey" }} />
                  <Text uppercase={false} style={{ color: "grey" }}>
                    Reply
              </Text>
                </Button>
              </Body>
              <Right>
                {/* <Ionicons name="md-share" size={24} color="grey" /> */}
                <Button transparent>
                  <Icon name="md-share" style={{ color: "grey" }} />
                  <Text uppercase={false} style={{ color: "grey" }}>
                    Share
              </Text>
                </Button>
              </Right>
            </CardItem>
          </View>
        </Card>
      </>
    </ScrollView>
  );
};

export default Community;
