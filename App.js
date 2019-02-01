import React from 'react';
import { Dimensions } from 'react-native';
import { createDrawerNavigator, createAppContainer } from 'react-navigation';
import { Provider as PaperProvider } from 'react-native-paper';
import ScrollScreen from './src/screens/scroll/ScrollScreen';
import TextInputScreen from './src/screens/textinput/TextInputScreen';


const Drawer = createDrawerNavigator({
    Scroll: {
      screen: ScrollScreen,
      navigationOptions: {
        title: 'Scroll View'
      }
    },
    TextInput: {
      screen: TextInputScreen,
      navigationOptions: {
        title: 'Text Input'
      }
    }
  },
  {
    initialRouteName: 'TextInput',
    drawerWidth: Dimensions.get('window').width * 0.8
  }
);

const AppContainer = createAppContainer(Drawer);


export default class App extends React.Component {
  render() {
    return (
      <PaperProvider>
        <AppContainer />
      </PaperProvider>
    );
  }
}
