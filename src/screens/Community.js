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
                "https://miro.medium.com/max/3000/1*MI686k5sDQrISBM6L8pf5A.jpeg",
            }}
            style={{ height: 200, width: null, flex: 1 }}
          />
        </CardItem>
        <CardItem>
          <Left>
            <Thumbnail
              source={{
                uri:
                  "https://miro.medium.com/max/3000/1*MI686k5sDQrISBM6L8pf5A.jpeg",
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
            <Text>how to control in insecticide</Text>
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
