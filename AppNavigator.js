import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

import Home from './components/LoginForm';
import Register from './components/Register';
import RestSelect from './components/RestSelect';


    const screens = {
        Home: {screen: Home},
        Register: {screen: Register},
        RestSelect: {screen: RestSelect}       
    }
    
const Stack = createStackNavigator(screens);

  export default createAppContainer(Stack);