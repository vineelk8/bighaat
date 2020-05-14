import * as React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Text, Button } from "@ui-kitten/components";
import { Textarea } from 'native-base';
import { Item, HeaderButtons } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';

const ReplyScreen = () => (
    <ScrollView>
        <View>
            <View style={styles.text}>
                <Text style={{ marginRight: 80, margin: 10, fontWeight: "bold" }} category='label'>Improve the Probability of receiving the right answer.</Text>
                <Button style={{ marginRight: 260 }} appearance='outline'>Add Crop</Button>
            </View>
            <View style={{ paddingVertical: 10, backgroundColor: 'white' }}>
                <Text style={{ marginLeft: 15, margin: 5, fontWeight: "bold" }}>Your question to the community</Text>
                <Textarea style={{ marginLeft: 5 }} placeholder="Add a question indicating what's wrong with your crop"></Textarea>
            </View>
            <View style={{ margin: 10, backgroundColor: 'white' }}>
                <Text style={{ marginLeft: 15, margin: 5, fontWeight: "bold" }}>Description of your problem</Text>
                <Textarea style={{ marginLeft: 5 }} placeholder="Describe specialities such as change of leaves,roots,color,bugs,tears..."></Textarea>
            </View>
        </View>
    </ScrollView>
);
export const replyScreenOptions = () => {
    return {
        headerShown: true,
        headerTitle: "Ask Kisanvedika",
        headerRight: () => <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item iconName='md-attach' size={24} onPress={() => {
                console.log('pressed')
            }} />
            <Item title="Send" size={24} onPress={() => {
                console.log('pressed')
            }} />
        </HeaderButtons>
    };
};
const styles = StyleSheet.create({
    text: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 20
    }
})

export default ReplyScreen;