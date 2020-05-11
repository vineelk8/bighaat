import React from "react";
import { Image } from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
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
          <Right>
            <Text note uppercase={false}>
              1 answers
            </Text>
          </Right>
        </CardItem>
        <CardItem>
          <Left>
            <Button transparent>
              <Icon name="thumbs-up" style={{ color: "grey" }} />
              <Text uppercase={false} style={{ color: "grey" }}>
                Upvote
              </Text>
            </Button>
          </Left>
          <Body>
            <Button transparent>
              <Icon name="thumbs-down" style={{ color: "grey" }} />
              <Text uppercase={false} style={{ color: "grey" }}>
                Downvote
              </Text>
            </Button>
          </Body>
          <Right>
            <Ionicons name="logo-whatsapp" size={24} color="green" />
          </Right>
        </CardItem>
      </Card>
    </>
  );
};

export default Community;
