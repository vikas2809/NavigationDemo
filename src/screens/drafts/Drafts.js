import React, { Component } from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet,
    TouchableOpacity,
    Image,
} from 'react-native';
import { DrawerActions } from 'react-navigation-drawer';
import { NAVIGATION_DEMO_IMAGE } from 'App/src/utility/constant/Constant';

export default class Drafts extends Component {

    static navigationOptions = ({ navigation }) => {
        return {
          title: 'Drafts',
          headerLeft:  () => 
            <TouchableOpacity
              onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
              <Image
                style={{ height: 25, width: 25, marginLeft: 10 }}
                source={NAVIGATION_DEMO_IMAGE.MENU_ICON}
              />
            </TouchableOpacity>
        };
    };

    render(){
        return(
            <View style={styles.container}>
                <Text>Drafts</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        // justifyContent: 'center',
        alignContent: 'center'
    }
})