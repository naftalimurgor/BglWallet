import { ImageBackground, Pressable, StyleSheet, Text, View, Image } from 'react-native'
import React, { useState } from 'react'
import { COLORS } from '@/app/COLORS'
import { Poppins_700Bold } from '@expo-google-fonts/poppins'
import { useFonts } from 'expo-font'
import { Dropdown } from 'react-native-element-dropdown'
import SendIcon from '@/components/SendIcon'
import ReceiveIcon from '@/components/ReceiveIcon'
import SwitchNetworks from '@/components/SwitchNetworks'

const menuIcon = require('@/assets/menu.png')
const userIcon = require('@/assets/user.png')
const copyIcon = require('@/assets/copy.png')
const bitgesellIcon = require('@/assets/bitgesell.png')

export default function Home() {
  const [fontsLoaded] = useFonts({
    Poppins_700Bold
  })
  const accounts = [
    { label: 'Account 1', value: 'b13agdGAFDemeczdfefgr3SmkjU333' },
    { label: 'Account 2', value: 'bglwab13agdGAFDemeczdfefgr3SmkjUYR' }
  ] // ideally, this would be wallet objects

  const [account, setAccount] = useState<string>(accounts[0].value)
  const [accountLabel, setAccounLabel] = useState('Account 1')

  return (
    <View style={styles.homeContainer}>
      <View style={styles.walletBalanceContainer}>
        <Text style={styles.balanceTextDescription}>Total Balance</Text>
        <Text style={styles.balanceText}>$2,000</Text>
        <Text style={styles.balanceTextDescription}>19,400 BGL</Text>
      </View>
      <View style={styles.copyAddressContainer}>
        <Pressable style={styles.copyButton}>
          <Text style={styles.accountText}>{account}</Text>
          <Image style={styles.copyIcon} source={copyIcon} />
        </Pressable>
      </View>

      <View style={styles.dropdownContainer}>
        <Text style={styles.balanceTextDescription}>{accountLabel}</Text>
        <Dropdown
          style={styles.dropdown}
          data={accounts}
          maxHeight={300}
          value={account}
          placeholder={account}
          placeholderStyle={{ color: '#666666', }}
          onChange={item => {
            alert(item.value)
            setAccount(item.value)
            setAccounLabel(item.label)
          }}
        />
      </View>

      <View style={styles.navContainer}>
        <View style={styles.navButtonContainer}>
          <Pressable style={styles.navButton}>
            <SendIcon />
          </Pressable>
          <View style={styles.navTextContainer}>
            <Text style={styles.navText}>Send</Text>
          </View>
        </View>
        <View style={styles.navButtonContainer}>
          <Pressable style={styles.navButton}>
            <ReceiveIcon />
          </Pressable>
          <View style={styles.navTextContainer}>
            <Text style={styles.navText}>Receive</Text>
          </View>
        </View>
        <View style={styles.navButtonContainer}>
          <Pressable style={styles.navButton}>
            <SwitchNetworks />
          </Pressable>
          <View style={styles.navTextContainer}>
            <Text style={styles.navText}>Switch Networks</Text>
          </View>
        </View>
      </View>

      <View style={styles.assetsContainer}>
        <View style={styles.assetTextContainer}>
          <Text style={styles.assetsHeading}>Assets</Text>
        </View>
        <View style={styles.bglContainer}>
          <View style={styles.assetSymbol}>
            <Image source={bitgesellIcon} height={80} width={80} />
            <View>
              <Text style={styles.assetText}>
                BITGESELL
              </Text>
              <Text style={[styles.assetSymbol, { marginLeft: 10 }]}>
                BGL
              </Text>
            </View>

          </View>
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontWeight: '600', fontSize: 13, color: COLORS.BLACK }}>
              $7,367.78
            </Text>
            <Text style={{ fontWeight: '300', fontSize: 12, color: '#888888' }}>
              +2.32%
            </Text>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
    padding: 15
  },
  headerContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'space-between',
    marginTop: 50,
    marginLeft: 20,
    paddingRight: 20
  },
  menuButton: {
    width: 40,
    height: 40,
  },
  userIcon: {
    height: 50,
    width: 50,
    marginRight: 20
  },

  walletBalanceContainer: {
    marginLeft: 20,
    marginTop: 26,
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginBottom: 18
  },
  balanceTextDescription: {
    color: COLORS.WHITE002
  },
  balanceText: {
    fontSize: 25,
    color: COLORS.BLACK_ACCENT,
    fontWeight: '500',
    fontFamily: 'Poppins_700Bold',
  },
  dropdown: {
    backgroundColor: '#F5F5F5',
    borderRadius: 42,
    minWidth: 335,
    fontSize: 14,
    // paddingHorizontal: 8,
    color: '#666666'
  },
  dropdownContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    // marginRight: 52,
    // marginLeft: 52,
    borderRadius: 42,
    padding: 13
  },
  valueField: {
    color: '#666666'
  },
  copyAddressContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    minWidth: 335,
    // marginRight: 42,
    // marginLeft: 42,
    borderRadius: 42,
    padding: 13

  },
  accountText: {
    color: COLORS.WHITE003
  },
  copyButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  copyIcon: {
    margin: 8
  },

  navContainer: {
    marginTop: 45,
    marginLeft: 16,
    marginRight: 16,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  navButton: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 70,
    width: 70,
    backgroundColor: '#F5F5F5',
    borderRadius: 15
  },
  navButtonContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  navTextContainer: {
    marginTop: 18
  },
  navText: {
    color: COLORS.BLACK,
    fontWeight: '500'
  },

  assetsContainer: {
    marginTop: 25,
  },
  assetsHeading: {
    marginLeft: 10,
    fontWeight: '700',
    color: COLORS.BLACK,
    fontSize: 18
  },
  bglContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#F5F5F5',
    height: 80,
    borderRadius: 15,
    marginTop: 39
  },
  assetTextContainer: {
  },
  assetText: {
    alignItems: 'baseline',
    fontWeight: '600',
    fontSize: 16,
    paddingTop: 21,
    paddingLeft: 8
  },
  assetSymbol: {
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    // paddingLeft: 15
  },
})