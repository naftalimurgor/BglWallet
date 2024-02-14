import SkipButton from '@/components/SkipButton'
import SplashLogo from '@/components/SplashLogo'
import { Poppins_500Medium } from '@expo-google-fonts/poppins'
import { COLORS } from 'app/COLORS'
import { useFonts } from 'expo-font'
import { router } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import React, { useEffect } from 'react'
import { LayoutChangeEvent, StyleSheet, Text, View } from 'react-native'

interface Props {
  onLayout: ((event: LayoutChangeEvent) => void)
}

export default function WelcomeSplash({ onLayout }: Props) {
  const [fontsLoaded] = useFonts({
    Poppins_500Medium
  })

  useEffect(() => {
    const timerId = setTimeout(() => {
      // only display splash on initial application launch else go straight to:
      // 1. open wallet: for an expired session
      // 2. or go home(valid sessions only)
      // hence add a check(store/persistence for token validity and app data?)
      router.push('/onboard-slider')
      
    }, 5000);

    return () => {
      clearTimeout(timerId)
    }
  }, [])


  return (
    <View style={styles.welcomeContainer} onLayout={onLayout}>
      <StatusBar backgroundColor={COLORS.ACCENT} />
      <View style={styles.viewLogoContainer}>
        <SplashLogo />
      </View>
    </View>
  )
}

// @TODO: use an animated carousel for the walk through pages as opposed to routing
// Autoslide and physically slide

const styles = StyleSheet.create({
  welcomeContainer: {
    backgroundColor: COLORS.ACCENT,
    flex: 1
  },
  viewLogoContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textContainer: {
    flex: 0.3,
    marginBottom: 231,
    justifyContent: 'center',
    alignItems: 'center'
  },
  welcomeText: {
    color: COLORS.WHITE,
    fontSize: 14,
    fontFamily: 'Poppins_500Medium'
  },

})