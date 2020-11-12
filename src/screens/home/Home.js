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

export default class Home extends Component {

  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state;
    return {
      title: params ? params.otherParam : 'A Nested Details Screen',
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

  constructor(props) {
    super(props);
    this.props = props;
  }


  render() {
    return (
      <View style={styles.container}>
        <Button
          title="Go to Tabs navigation"
          onPress={() => this.props.navigation.navigate('Tabs')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});
