import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'

import Home from './screens/Home';
import Signin from './screens/Signin';

const Stack = createNativeStackNavigator()

export default function AppRoutes() {

	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName='Signin'>
				<Stack.Screen
					name='Signin'
					component={Signin}
					options={{
						headerShown: false
					}}
				/>
				<Stack.Screen
					name='Home'
					component={Home}
					options={{
						headerShown: false
					}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}

