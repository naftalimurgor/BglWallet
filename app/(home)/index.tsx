
import AvatarIcon from '@/components/Menu'
import React from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { COLORS } from '../COLORS'
import BitgesellLogoBlack from '@/components/BitgesellIconBlack'
import MobileIcon from '@/components/Mobile'
import ReceiveIcon from '@/components/ReceiveIcon'
import ReceiveBGL from '@/components/ReceiveBGL'
import SwitchNetworks from '@/components/SwitchNetworks'
import { router } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

const Home = () => {
  return (
    <ScrollView style={styles.walletContainer}>
      {/* <StatusBar backgroundColor='#824FF4' /> */}
      <View style={styles.balanceContainer}>
        <View style={styles.headerContainer}>
          <Text style={{ color: COLORS.WHITE }}>
            b13agdGAFDemeczdfefgr3S
          </Text>
          <Pressable style={{ maxHeight: 58, maxWidth: 58, margin: 21 }}
            onPress={() => { }}
          >
            <AvatarIcon />
          </Pressable>
        </View>
        <View style={{ marginLeft: 45, flexDirection: 'column' }}>
          <View style={{ flexDirection: 'row' }}>
            <View>
              <Text style={{ color: COLORS.WHITE, }}>BGL</Text>
              <Text style={{ color: COLORS.WHITE, fontWeight: '600', fontSize: 15 }}>6.0288</Text>
            </View>
            <View style={{ marginLeft: 67 }}>
              <Text style={{ color: COLORS.WHITE, fontWeight: '500', fontSize: 11 }}>
                +2.32%
              </Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 25 }}>
            <Pressable
              style={{
                height: 70,
                width: 70,
                backgroundColor: COLORS.WHITE,
                borderRadius: 35,
                justifyContent: 'center',
                alignItems: 'center'
              }}
              onPress={() => { }}
            >
              <BitgesellLogoBlack />
            </Pressable>
            <Text style={{ color: COLORS.WHITE, marginLeft: 15 }}>BITGESELL</Text>
          </View>
        </View>
      </View>
      <View style={{paddingEnd: 20, paddingStart: 20}}>
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
      </View>
      <View style={{ margin: 40 }}>
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

export default Home

const styles = StyleSheet.create({
  walletContainer: {
    flex: 1,
    backgroundColor: COLORS.WHITE
  },
  balanceContainer: {
    backgroundColor: '#A179FC',
    flexDirection: 'column',
    minHeight: 390,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50
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
    minHeight: 232,
    minWidth: 335,
    marginTop: -130,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 4,

    elevation: 3,
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