
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import LoginForm from './LoginForm';
import Register from './Register';
import RestSelect from './RestSelect';

    const screens = {
        Home: {
            screen: LoginForm
        },
        Register: {
            screen: Register
        },
        Restaurant: {
            screen: RestSelect
        }
}
    const Stack = createStackNavigator(screens);



  export default createAppContainer(Stack);