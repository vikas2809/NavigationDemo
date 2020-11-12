import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    SectionList,
    TouchableOpacity
} from 'react-native';

const drawerData = [
    {
        'section': 0, 'data': [
            { 'title': 'HOME'},
            { 'title': 'INBOX' },
            { 'title': 'MY WISHLIST' },
            // { 'title': 'LOGOUT' },
        ]
    },
]

export default class SideMenu extends Component {

    constructor(props){
      super(props);
      this.props = props;
    }
 
    onItemPress(item){
        console.log('Item',item);
        switch(item.title){
          case 'HOME' : this.props.navigation.navigate('Home')
            break;
          case 'INBOX' : this.props.navigation.navigate('Drafts')
            break;
          case 'MY WISHLIST' : this.props.navigation.navigate('Wishlist')
            break;
        }
    }

    renderDrawerSection(data){
        return(
          <TouchableOpacity onPress={() => this.onItemPress(data.item)} style={styles.row}>
            <Text style={styles.title}>{data.item.title}</Text>
          </TouchableOpacity>
        )
      }
      
    
      renderItem = (data) => {
        return(
              this.renderDrawerSection(data)
        )
      }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <SectionList
                    showsVerticalScrollIndicator={false}
                    renderItem={this.renderItem}
                    sections={drawerData}
                    keyExtractor={(item, index) => index}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        width: '100%'
      },
      header: {
        flexDirection: 'column', 
        // alignItems: 'center', 
        // flex: 0.2,
        marginLeft: 10,
        // justifyContent: 'space-between',
        // height: Platform.OS === 'ios' ? 64 : 56
      },
      profileImage: {
        margin: 10,
        width: 50, 
        height: 50, 
        // marginRight: 17
      },
      row: {
        flexDirection: 'row', 
        alignItems: 'center',
        height: 50,
      },
      icon: {
        marginLeft: 15,
        height: 30,
        width: 30
      },
      title: {
        fontSize: 14,
        color: '#3f4967',
        marginLeft: 19,
      }
})