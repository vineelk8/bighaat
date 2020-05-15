import * as React from 'react';
import { StyleSheet } from 'react-native';
import { FAB } from 'react-native-paper';


const Fab = (props) => (
    <FAB
        style={styles.fab}
        large
        label={props.labelName}
        icon={props.iconName}
        onPress={props.onSelect}
    />
);

const styles = StyleSheet.create({
    fab: {
        position: 'absolute',
        margin: 10,
        right: 0,
        bottom: 0
    }
})

export default Fab;