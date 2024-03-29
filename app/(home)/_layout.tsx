import { Drawer } from 'expo-router/drawer';
import { StyleSheet, Text } from 'react-native';
import { COLORS } from '../COLORS';
import { Redirect } from 'expo-router';

export default function Layout() {

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