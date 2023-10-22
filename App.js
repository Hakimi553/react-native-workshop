import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, FlatList} from 'react-native';
import Post from './components/Post';
import { useEffect,useState } from 'react';

const Stack = createStackNavigator();


export default function App() {

  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Notifications" component={Notifications} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // justifyContent: 'center', //align x - axis
    // alignItems: 'center', //align y - axis
    // },
  },
  
});
