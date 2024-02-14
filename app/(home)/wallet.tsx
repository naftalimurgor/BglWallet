
import AvatarIcon from '@/components/Menu'
import React from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { COLORS } from '../COLORS'
import BitgesellLogoBlack from '@/components/BitgesellIconBlack'
import MobileIcon from '@/components/Mobile'
import ReceiveBGL from '@/components/ReceiveBGL'
import SwitchNetworks from '@/components/SwitchNetworks'
import { router } from 'expo-router'

const Wallet = () => {
  return (
    <ScrollView style={styles.walletContainer}>
      <View style={styles.balanceContainer}>
        <Text style={{ fontSize: 12, fontWeight: '500', color: COLORS.WHITE, marginBottom: 13 }}>Your balance</Text>
        <Text style={{ fontSize: 20, color: COLORS.WHITE, fontWeight: '600' }}>20,000.34 BGL</Text>
        <Text style={{ color: COLORS.WHITE, fontSize: 12, marginTop: 16, fontWeight: '500' }}>↑ 28,320 (+4.57%)</Text>
      </View>
      <View style={styles.homeNavContainer}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', paddingTop: 37 }}>
          <View style={{ justifyContent: 'center', alignItems: 'center', }}>
            <Pressable style={styles.navButton}
              onPress={() => {
                router.push('/send')
              }}
            >
              <MobileIcon />
            </Pressable>
            <Text style={{ color: COLORS.BLACK_ACCENT, fontSize: 12, marginTop: 14 }}>
              SEND BGL
            </Text>
          </View>

          <View style={{ justifyContent: 'center', alignItems: 'center', }}>
            <Pressable
              style={styles.navButton}
              onPress={() => {
                router.push('/receive-bgl')
              }}
            >
              <ReceiveBGL />
            </Pressable>
            <Text style={{ color: COLORS.BLACK_ACCENT, fontSize: 12, marginTop: 14 }}>
              RECEIVE BGL
            </Text>
          </View>

          <View style={{ justifyContent: 'center', alignItems: 'center', }}>
            <Pressable style={styles.navButton}>
              <SwitchNetworks />
            </Pressable>
            <Text style={{ color: COLORS.BLACK_ACCENT, fontSize: 12, marginTop: 14 }}>
              SWITCH ACCOUNTS
            </Text>
          </View>
        </View>
      </View>

      <View style={{paddingEnd: 40, paddingStart: 40, marginTop: 40}}>
        <View style={{ marginBottom: 20 }}>
          <Text style={{ fontWeight: '600', fontSize: 18 }}>
            ASSETS
          </Text>
        </View>
        <View style={styles.assetContainer}>
          <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            <Pressable
              style={{
                backgroundColor: '#F5F5F5',
                height: 65,
                width: 65,
                borderRadius: 32.5,
                marginRight: 18,
                justifyContent: 'center',
                alignItems: 'center'
              }}
              onPress={() => { }}
            >
              <BitgesellLogoBlack />
            </Pressable>
            <Text style={{ fontWeight: '600' }}>BITGESELL</Text>
            <View style={{ margin: 15 }}>
              <Text style={{ fontWeight: '600' }}>
                $7,367.78
              </Text>
              <Text style={{ fontWeight: '500', color: '#888888' }}>
                +2.32%
              </Text>
            </View>
            <View>

            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

export default Wallet

const styles = StyleSheet.create({
  balanceContainer: {
    backgroundColor: COLORS.ACCENT,
    minHeight: 170,
    minWidth: 335,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 30,
    borderRadius: 25,
    marginBottom: 27,
    paddingTop: 42,
    paddingLeft: 20
  },
  walletContainer: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
  },
  headerContainer: {
    marginLeft: 45,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  homeNavContainer: {
    backgroundColor: COLORS.WHITE,
    borderRadius: 24,
    marginBottom: 22,
  },
  navButton: {
    backgroundColor: '#C6B3F0',
    height: 65,
    width: 65,
    borderRadius: 32.5,
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.6
  },
  assetContainer: {
    backgroundColor: COLORS.WHITE,
    minHeight: 80,
    minWidth: 335,
    borderRadius: 15,
    padding: 18,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.00,
    elevation: 1,
  }
})