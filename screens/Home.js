import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Feather from 'react-native-vector-icons/Feather'
import Ionicons from 'react-native-vector-icons/Ionicons'


import CoffeeHome from './coffeeApp/CoffeeHome'
import FoodHome from './foodApp/FoodHome'
import TravelHome from './TravelApp/TravelHome'

const Tab = createBottomTabNavigator()

const Home = () => {
	return (
		<Tab.Navigator
			screenOptions={{
				tabBarStyle: { height: 70 },
			}}
		>
			<Tab.Screen
				name='CoffeeHome'
				component={CoffeeHome}
				options={{
					tabBarLabel: ({ focused, color, size }) => (
						<Text style={{ color: focused ? "#433362" : color, marginBottom: 5 }}>CoffeeApp</Text>
					),
					tabBarIcon: ({ focused, color, size }) => (
						<Feather
							name={"coffee"}
							size={size}
							color={focused ? "#433362" : color}
						/>
					)
				}}
			/>
			<Tab.Screen
				name='FoodHome'
				component={FoodHome}
				options={{
					tabBarLabel: ({ focused, color, size }) => (
						<Text style={{ color: focused ? "#433362" : color, marginBottom: 5 }}>FoodApp</Text>
					),
					tabBarIcon: ({ focused, color, size }) => (
						<Ionicons
							name={"fast-food-outline"}
							size={size}
							color={focused ? "#433362" : color}
						/>
					)
				}}
			/>
			<Tab.Screen
				name='TravelHome'
				component={TravelHome}
				options={{
					tabBarLabel: ({ focused, color, size }) => (
						<Text style={{ color: focused ? "#433362" : color, marginBottom: 5 }}>TravelApp</Text>
					),
					tabBarIcon: ({ focused, color, size }) => (
						<Ionicons
							name={"airplane-outline"}
							size={size}
							color={focused ? "#433362" : color}
						/>
					),
				}}
			/>
		</Tab.Navigator>
	)
}

export default Home