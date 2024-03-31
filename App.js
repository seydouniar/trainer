/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React ,{Component} from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SigninPage from './src/screens/signinPage';
import SignupPage from './src/screens/signupPage';
import HomePage from './src/screens/home';
import store from './src/store'
import { Provider } from 'react-redux';
import LoadingPage from './src/screens/loadingPage';
import ProgDetailsScreen from './src/screens/progDetailScreen';
import Exercices from './src/screens/exercicesPage';
import HistoriquePage from './src/screens/historiquePage';
import ProfilePage from './src/screens/profilPage';
import SettingPage from './src/screens/settingPage';
import { Icon, Text } from '@rneui/themed';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const tabOptions = ({route})=>({
  tabBarIcon: ({focused,color,size})=>{
    let iconName;let title;
      switch(route.name){
        case 'entrainement':
          iconName=focused? 'document-text': 'document-text-outline';
          break;
        case 'exercices':
          iconName=focused ? 'barbell' : 'barbell-outline';break;
        case 'historiques':
          iconName=focused ? 'time' : 'time-outline';break;
        case 'setting':
          iconName=focused ? 'settings' : 'settings-outline';break;
        case 'profile':
          iconName=focused ? 'person-circle' : 'person-circle-outline';break;
        default:
          iconName=undefined;
      }   
      return <Icon type="ionicon" name={iconName} size={size} color={color} />;
  },
  tabBarLabel:
    ({focused,color})=>{
      let label;
      
        switch(route.name){
          case 'entrainement':
            label='Entrainement';break;
          case 'exercices':
            label='Exercices';break;
          case 'historiques':
            label='Historiques';break;
          case 'setting':
            label='Paramètre';break;
          case 'profile':
              label='Profile';break;
          default:
            label=undefined;
        }
     
      
      return focused&&<Text style={{color:color,fontSize:13}}>{label}</Text>
    },
  
  tabBarActiveTintColor: 'black',
  tabBarInactiveTintColor: 'gray',
})
const StartScreen = () => {
  return <Stack.Navigator>
            <Stack.Screen name="loading" component={LoadingPage} />
            <Stack.Screen name="signin" component={SigninPage} />
            <Stack.Screen name="signup" component={SignupPage} />
        </Stack.Navigator>;
}

const HomeScreen = () => {
  return <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="home" component={HomePage} />
            <Stack.Screen name="details" component={ProgDetailsScreen} />
        </Stack.Navigator>;
}

const TabScreen  = ()=>{
  return <Tab.Navigator screenOptions={({route})=>tabOptions({route})} >
    <Tab.Screen name="entrainement" component={HomeScreen} options={{title:'Entrainement'}}/>
    <Tab.Screen name='exercices' component={Exercices} options={{title:'Exercices'}}/>
    <Tab.Screen name='historiques' component={HistoriquePage} options={{title:'Historiques'}}/>
    <Tab.Screen name='profile' component={ProfilePage} options={{title:'Profile'}}/>
    <Tab.Screen name='setting' component={SettingPage} options={{title:'Paramètres'}}/>
  </Tab.Navigator>;
}
class App extends Component{

  render(){
    

    return(
      <Provider store={store}>
        <NavigationContainer>  
          <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="start" component={StartScreen}/>
            <Stack.Screen name="main" component={TabScreen} />
          </Stack.Navigator>
      </NavigationContainer>
      </Provider>
      
    )
  }
}

export default App;
