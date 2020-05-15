
import React, { useState } from 'react';
import { Container, Header, View, Button, Icon, Fab } from 'native-base';
const FabButton = (props) => {
    const [active, setActive] = useState(false)

    return (
        <View>
            <Fab
                active={active}
                direction="up"
                containerStyle={{}}
                style={{ backgroundColor: 'grey' }}
                position="bottomRight"
                onPress={() => setActive(!active)}>

                <Icon name="share" />
                <Button style={{ backgroundColor: '#34A34F' }}>
                    <Icon name="logo-whatsapp" />
                </Button>
                <Button style={{ backgroundColor: '#3B5998' }}>
                    <Icon name="logo-facebook" />
                </Button>
                <Button disabled style={{ backgroundColor: '#DD5144' }}>
                    <Icon name="mail" />
                </Button>

            </Fab>
        </View>
    );
}
export default FabButton;