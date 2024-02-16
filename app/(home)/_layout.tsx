import { Drawer } from 'expo-router/drawer';
import { StyleSheet, Text } from 'react-native';
import { COLORS } from '../COLORS';
import { Redirect } from 'expo-router';
import { Provider } from 'react-redux';
import { store } from '@/features/store';

export default function Layout() {

  return (
    <Provider store={store}>

    <Drawer>
      <Drawer.Screen
        name="index"
        options={{
          headerTitleAlign: 'center',
          drawerLabel: 'Home',
          title: '',
          headerStyle: {
            backgroundColor: COLORS.ACCENT,
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
    </Provider>
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