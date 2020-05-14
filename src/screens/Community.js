import React from "react";
import { Image, StyleSheet, } from "react-native";
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
  View,
} from "native-base";

const Community = (props) => {
  return (
    <View style={styles.container}>
      <Card style={styles.mainCard}>
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
                1h <Text note>{"\u2027"}</Text>
                <MaterialCommunityIcons name="food-apple" color="red" />
                <Text note> Apple</Text>
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
              1 Answers
            </Text>
          </Right>
        </CardItem>
        <CardItem>
          <Left>
            <Button transparent>
              <FontAwesome5 name="thumbs-up" style={styles.thumsupIconColor} />
              <Text uppercase={false} style={styles.likeTxtColor}>Like
              </Text>
            </Button>
          </Left>
          <View>
            <Button transparent>
              <FontAwesome5 name="reply" style={styles.replyIconColor} />
              <Text uppercase={false} style={styles.replyTxtColor}>Reply
              </Text>
            </Button>
          </View>
          <Right>
            {/* <Ionicons name="md-share" size={24} color="grey" /> */}
            <Button transparent>
              <Icon name="share" style={styles.shareIconColor} />
              <Text uppercase={false} style={styles.shareTxtColor}>
                Share
              </Text>
            </Button>
          </Right>
        </CardItem>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //backgroundColor: "#49a38f",
    padding: 0,
    margin: 0,
  },
  mainCard: {
    backgroundColor: "#f00",
    margin: 0,
    padding: 0,
    borderWidth: 0,
    //borderColor: "transparent",
    borderRadius: 0,
  },
  thumsupIconColor: {
    color: "#329052",
    fontSize: 16,
    margin: 0,
    padding: 0,
  },
  likeTxtColor: {
    color: "#737777",
    fontSize: 14,
    margin: 0,
    padding: 0,
    textAlign: "left",
  },
  replyIconColor: {
    color: "#9aa4a4",
    fontSize: 16,
    margin: 0,
    padding: 0,
  },
  replyTxtColor: {
    color: "#737777",
    fontSize: 14,
    margin: 0,
    padding: 0,
    textAlign: "left",
  },
  shareIconColor: {
    color: "#037fdf",
    fontSize: 16,
    margin: 0,
    padding: 0,
  },
  shareTxtColor: {
    color: "#737777",
    fontSize: 14,
    margin: 0,
    padding: 0,
    textAlign: "left",
  },
});
export default Community;
