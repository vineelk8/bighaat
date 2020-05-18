import React from "react";
import { Share, View } from "react-native";
import { Text, Button, Icon } from "native-base";

export default ShareExample = () => {
  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          "React Native | A framework for building native apps using React",
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <View>
      {/* <Button onPress={onShare} title="Share" /> */}
      <Button transparent onPress={onShare}>
        <Icon name="md-share" style={{ color: "grey" }} />
        <Text uppercase={false} style={{ color: "grey" }}>
          Share
        </Text>
      </Button>
    </View>
  );
};
