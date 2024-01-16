import { Drawer } from 'expo-router/drawer';
import { StyleSheet, Text } from 'react-native';
import { COLORS } from '../COLORS';


import { Redirect } from 'expo-router';

import { useSession } from '../Context';


export default function Layout() {
  const { session, isLoading } = useSession();

  // You can keep the splash screen open, or render a loading screen like we do here.
  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  // Only require authentication within the (app) group's layout as users
  // need to be able to access the (auth) group and sign in again.
  if (!session) {
    // On web, static rendering will stop here as the user is not authenticated
    // in the headless Node process that the pages are rendered in.
    return <Redirect href="/(app)/open-wallet" />;
  }


  return (
    <Drawer>
      <Drawer.Screen
        name="index"
        options={{
          headerTitleAlign: 'center',
          drawerLabel: 'Home',
          title: '',
          headerStyle: {
            backgroundColor: '#A179FC',
          },
          headerTintColor: COLORS.WHITE
          // header: (props) => <CustomDrawerHeader props={props}/>
        }}
      />
      <Drawer.Screen
        name="send"
        options={{
          headerTitleAlign: 'center',
          drawerLabel: 'Send BGL',
          title: 'Send BGL',
        }}
      />
      <Drawer.Screen
        name="wallet"
        options={{
          headerTitleAlign: 'center',
          drawerLabel: 'My Wallet',
          title: 'My Wallet',
          // header: (props) => <CustomDrawerHeader props={props}/>
        }}
      />
      <Drawer.Screen
        name="receive-bgl"
        options={{
          headerTitleAlign: 'center',
          drawerLabel: 'Receive BGL',
          title: 'Receive BGL',
        }}
      />
      <Drawer.Screen
        name="backup-wallet"
        options={{
          headerTitleAlign: 'center',
          drawerLabel: 'Backup Wallet',
          title: 'Backup Wallet',
        }}
      />
      <Drawer.Screen
        name="settings"
        options={{
          headerTitleAlign: 'center',
          drawerLabel: 'Settings',
          title: 'Settings',
        }}
      />
    </Drawer>

  );
}

const styles = StyleSheet.create({
  customHeader: {
    backgroundColor: '#9A6DFF',
    minHeight: 55,
    minWidth: 355
  },
  menuButton: {
    marginTop: 16,
    marginLeft: 27,
    marginBottom: 7
  }
})