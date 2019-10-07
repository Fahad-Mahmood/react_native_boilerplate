
import React from 'react';
import { View, Text, Button } from 'react-native';

class HomeScreen extends React.Component {
  switchNavigate = () => {
    const { navigation } = this.props;
    navigation.navigate('Main');
  }
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
      </View>
    );
  }
}
export default HomeScreen;
