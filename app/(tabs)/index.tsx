import { StatusBar } from 'react-native';
import Home from '../../src/Screens/Home';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function App() {
  return (

    <GestureHandlerRootView >
      <StatusBar 
          backgroundColor={'transparent'}
          translucent
          barStyle={'light-content'}/>
      <Home />
    </GestureHandlerRootView>

  )
}

