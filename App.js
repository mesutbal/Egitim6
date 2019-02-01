import { Dimensions } from 'react-native';
import { createDrawerNavigator, createAppContainer } from 'react-navigation';
import ScrollScreen from './src/screens/scroll/ScrollScreen';


const Drawer = createDrawerNavigator({
    Scroll: {
      screen: ScrollScreen,
      navigationOptions: {
        title: 'Scroll View'
      }
    }
  },
  {
    drawerWidth: Dimensions.get('window').width * 0.8
  }
);

const App = createAppContainer(Drawer);
  
export default App;
