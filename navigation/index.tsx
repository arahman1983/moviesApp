/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable } from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import {Home, Favorites, AddMovie, NotFoundScreen} from '../screens'
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
      // theme = {DarkTheme}
      >
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      {/* <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group> */}
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}>
      <BottomTab.Screen
        name="Favorites"
        component={Favorites}
        options={{
          title: 'Favorites Movies',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          tabBarIcon: ({ color }) => <TabBarIcon size={20} name="heart" color={color} />,
          headerLeft: () => (
            <FontAwesome
              name="heart"
              size={25}
              color={colorScheme === 'dark' ? 'white' : 'black'}
              style={{ marginStart: 15, marginEnd: 5 }}
            />
          )
        }}
      />
      <BottomTab.Screen
        name="Home"
        component={Home}
        options={({ navigation }: RootTabScreenProps<'Home'>) => ({
          title: 'Movies',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          tabBarIcon: ({ color }) => <TabBarIcon size={30} name="home" color={color} />,
          headerLeft: () => (
            <FontAwesome
              name="home"
              size={25}
              color={colorScheme === 'dark' ? 'white' : 'black'}
              style={{ marginStart: 15 }}
            />
          )
        })}
      />
      <BottomTab.Screen
        name="AddMovie"
        component={AddMovie}
        options={{
          title: 'Add Movie',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          tabBarIcon: ({ color }) => <TabBarIcon size={20} name="plus-circle" color={color} />,
          headerLeft: () => (
            <FontAwesome
              name="plus-circle"
              size={25}
              color={colorScheme === 'dark' ? 'white' : 'black'}
              style={{ marginStart: 15 }}
            />
          )
        }}
      />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  size: number
  color: string;
}) {
  return <FontAwesome style={{ marginBottom: -3 }} {...props} />;
}
