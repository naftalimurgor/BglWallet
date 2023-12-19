import { Drawer } from 'expo-router/drawer';

export default function Layout() {
  return (
    <Drawer>
      <Drawer.Screen
        name="index"
        options={{
          drawerLabel: 'Home',
          title: 'Overview',
        }}
      />
      <Drawer.Screen
        name="send"
        options={{
          drawerLabel: 'Send BGL',
          title: 'Send BGL',
        }}
      />
      <Drawer.Screen
        name="wallet"
        options={{
          drawerLabel: 'BGL Wallet',
          title: 'My Wallet',
        }}
      />

    </Drawer>

  );
}
