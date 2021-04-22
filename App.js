/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { PersistGate } from 'redux-persist/integration/react';
import {Provider} from "react-redux";
import {
    View,
    StyleSheet
} from 'react-native'
import {store, persistor} from './src/store/storeCfg';
import WorkShop2 from './src/components/Lab3/WorkShop2';
import WorkShop3 from './src/components/Lab3/WorkShop3';
import WS3 from './src/components/Lab3/WS3';
import ListComponent from './src/components/Lab4/ListComponent';
import VersionPage from './src/components/Lab4/VersionPage';
import NotificationList from './src/components/Lab5/NotificationList';
import Form from './src/components/Lab5/Form';

const App: () => React$Node = () => {
  const Stack = createStackNavigator();

  return (
      <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
              <NavigationContainer
                  linking={{
                    enabled: true
                  }}
                  navigationOptions={{
                      cardStack: {
                          gesturesEnabled: false,
                      },
                  }}
              >
                  <Stack.Navigator
                      screenOptions={{
                          headerMode: 'none',
                          headerShown: false,
                          gesturesEnabled: false,
                          cardStyle: { backgroundColor: "transparent" },
                          cardOverlayEnabled: true,
                          headerLeft:  null,
                          cardStack: {
                              gesturesEnabled: false,
                          },
                      }}
                      mode="modal"
                      // initialRouteName="tasks"
                      initialRouteName="lab4"
                      headerMode="none"
                  >
                      <Stack.Screen
                          name={'ws2'}
                          component={() => (
                              <WorkShop2/>
                          )}
                      />
                      <Stack.Screen
                          name={'ws3'}
                          component={() => (
                              <WorkShop3/>
                          )}
                      />
                      <Stack.Screen
                          name={'ws'}
                          component={() => (
                              <WS3/>
                          )}
                      />
                      <Stack.Screen
                          name={'lab4'}
                          component={() => (
                              <ListComponent/>
                          )}
                      />
                      <Stack.Screen
                          name={'lab4item'}
                          component={() => (
                              <VersionPage/>
                          )}
                      />
                      <Stack.Screen
                          name={'tasks'}
                          component={() => (
                              <NotificationList/>
                          )}
                      />
                      <Stack.Screen
                          name={'form'}
                          component={() => (
                              <Form/>
                          )}
                      />
                  </Stack.Navigator>
              </NavigationContainer>
          </PersistGate>
      </Provider>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
