import React, { useContext } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Text, Button } from "@ui-kitten/components";
import { Textarea } from 'native-base';
import { Item, HeaderButtons } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import { LanguageContext } from "../context/languageContext";
import { getLanguage } from "../services/languageSelection";
const Kisanvedika = () => {
    const contextData = useContext(LanguageContext);
    let language = getLanguage(contextData);
    return (
        <ScrollView>
            <View>
                <View style={styles.text}>
                    <Text style={{ marginRight: 80, margin: 10, fontWeight: "bold" }} category='label'>{language.answer}</Text>
                    <Button style={{ marginRight: 260 }} appearance='outline'>{language.addcrop}</Button>
                </View>
                <View style={{ paddingVertical: 10, backgroundColor: 'white' }}>
                    <Text style={{ marginLeft: 15, margin: 5, fontWeight: "bold" }}>{language.question}</Text>
                    <Textarea style={{ marginLeft: 5 }} placeholder={language.questionplaceholder}></Textarea>
                </View>
                <View style={{ margin: 10, backgroundColor: 'white' }}>
                    <Text style={{ marginLeft: 15, margin: 5, fontWeight: "bold" }}>{language.description}</Text>
                    <Textarea style={{ marginLeft: 5 }} placeholder={language.descriptionplaceholder}></Textarea>
                </View>
            </View>
        </ScrollView>
    )
}
export const KisanvedikaOptions = () => {
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

export default Kisanvedika;