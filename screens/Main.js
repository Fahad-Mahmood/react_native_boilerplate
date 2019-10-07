import React from 'react';
import { View, Text, Button } from 'react-native';

class MainScreen extends React.Component {
  switchNavigate = () => {
    const { navigation } = this.props;
    navigation.navigate('Home');
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Main Screen</Text>
        <Button title="Press me" onPress={() => this.switchNavigate()} />
      </View>
    );
  }
}
export default MainScreen;
