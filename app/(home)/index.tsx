// @ts-nocheck
import AvatarIcon from '@/components/Menu'
import React, {useState, useEffect} from 'react'
import { View, Text, StyleSheet, Pressable, ScrollView } from 'react-native'
import { COLORS } from '../COLORS'
import BitgesellLogoBlack from '@/components/BitgesellIconBlack'
import MobileIcon from '@/components/Mobile'
import ReceiveIcon from '@/components/ReceiveIcon'
import ReceiveBGL from '@/components/ReceiveBGL'
import SwitchNetworks from '@/components/SwitchNetworks'
import { Redirect, router } from 'expo-router'
import { useDispatch, useSelector } from 'react-redux'
import { loadDashboard } from '@/features/wallet/walletSlice'

const Loader = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>loading...</Text>
    </View>
  )
}

const Home = () => {
  const dispatch = useDispatch()
  const [isLoading, setisLoading] = useState(true)
  // @ts-ignore
  const wallet = useSelector(state => state.wallet.wallet)
  const currentAddress = wallet.address
  const [dashboard, setdashboard] = React.useState(null)
  React.useEffect(() => {
    setisLoading(true)
    const getDashBoardInfo = async () => {
      const body = {
        address: currentAddress,
        addresses: [currentAddress],
        token: 'dummy_token' // @todo: should go insider Bearer <token> authorization header
      }

      const res = await fetch(`https://us-central1-exglos-api.cloudfunctions.net/app/dashboard`, {
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(body)
      })
      const dashboardInfo = await res.json()
      const { balance, bglInfo } = dashboardInfo
      setdashboard(dashboardInfo)
      console.log(dashboardInfo);

      dispatch(loadDashboard({balance, bglInfo }))
      setisLoading(false)

    }
    getDashBoardInfo()
    // @ts-ignore
  }, [])
  const dashboardInfo = useSelector(state => state.wallet.dashboard)
  console.log('info: ',dashboardInfo);
  
  if (isLoading) {
    return (
      <Loader />
    )
  } else {
    
    return(<ScrollView style={styles.walletContainer}>
      {/* <StatusBar backgroundColor=COLORS.ACCENT /> */}
      <View style={styles.balanceContainer}>
        <View style={styles.headerContainer}>
          <Text style={{ color: COLORS.WHITE, fontSize: 10 }}>
            {currentAddress}
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
              <Text style={{ color: COLORS.WHITE, fontWeight: '600', fontSize: 15 }}>{dashboardInfo.bglInfo?.bitgesell?.usd ? dashboardInfo.bglInfo?.bitgesell?.usd : 0.0124561} USD</Text>
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
      <View style={{ paddingEnd: 20, paddingStart: 20 }}>
        <View style={styles.homeNavContainer}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', paddingTop: 37 }}>
            <View style={{ justifyContent: 'center', alignItems: 'center', }}>
              <Pressable style={styles.navButtonOne}
                onPress={() => {
                  router.push('/send')
                }}
              >
                <MobileIcon />
              </Pressable>
              <Text style={{ color: COLORS.BLACK_ACCENT, fontSize: 12, marginTop: 0 }}>
                SEND BGL
              </Text>
            </View>

            <View style={{ justifyContent: 'center', alignItems: 'center', }}>
              <Pressable
                style={styles.navButtonTwo}
                onPress={() => {
                  router.push('/receive-bgl')
                }}
              >
                <ReceiveBGL />
              </Pressable>
              <Text style={{ color: COLORS.BLACK_ACCENT, fontSize: 12, marginTop: 0 }}>
                RECEIVE BGL
              </Text>
            </View>

            <View style={{ justifyContent: 'center', alignItems: 'center', }}>
              <Pressable style={styles.navButtonThree}>
                <SwitchNetworks />
              </Pressable>
              <Text style={{ color: COLORS.BLACK_ACCENT, fontSize: 12, marginTop: 0 }}>
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
          }}
          >
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
                {dashboardInfo.balance.data[currentAddress].confirmed}
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
    </ScrollView>)
  }
}

export default Home

const styles = StyleSheet.create({
  walletContainer: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
    width: '100%'
  },
  balanceContainer: {
    backgroundColor: COLORS.ACCENT,
    opacity: 0.9,
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
    minWidth: '100%',
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
  navButtonOne: {
    // backgroundColor: '#FFBA0A',
    height: 65,
    width: 65,
    borderRadius: 32.5,
    justifyContent: 'center',
    alignItems: 'center',
    // opacity: 0.2
  },
  navButtonTwo: {
    // backgroundColor: '#FFBA0A',
    height: 65,
    width: 65,
    borderRadius: 32.5,
    justifyContent: 'center',
    alignItems: 'center',
    // opacity: 0.5
  },
  navButtonThree: {
    // backgroundColor: '#FFBA0A',
    height: 65,
    width: 65,
    borderRadius: 32.5,
    justifyContent: 'center',
    alignItems: 'center',
    // opacity: 0.5
  },
  assetContainer: {
    backgroundColor: COLORS.WHITE,
    minHeight: 80,
    minWidth: '100%',
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