import React from 'react';
import { View, ActivityIndicator } from 'react-native';

class BackScreen extends React.Component {
  componentDidMount = () => {
    setTimeout(() => {
      const { navigation } = this.props;
      navigation.navigate('Main');
    }, 3000);
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ActivityIndicator size='large' />
      </View>
    );
  }
}
export default BackScreen;
