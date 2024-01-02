import SkipButton from '@/components/SkipButton'
import SplashLogo from '@/components/SplashLogo'
import { Poppins_500Medium } from '@expo-google-fonts/poppins'
import { COLORS } from 'app/COLORS'
import { useFonts } from 'expo-font'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { LayoutChangeEvent, StyleSheet, Text, View } from 'react-native'

interface Props {
  onLayout: ((event: LayoutChangeEvent) => void)
}

export default function WelcomeSplash({ onLayout }: Props) {
  const [fontsLoaded] = useFonts({
    Poppins_500Medium
  })

  return (
    <View style={styles.welcomeContainer} onLayout={onLayout}>
      <StatusBar backgroundColor='#824FF4' />

      <View style={styles.viewLogoContainer}>
        <SplashLogo />
      </View>
      <View style={[styles.textContainer,]}>
        <Text style={[styles.welcomeText, { fontFamily: fontsLoaded ? 'Poppins_500Medium' : '' }]}>
          Welcome to our new crypto wallet mobile app
        </Text>
      </View>
      <SkipButton route='/onboarding-step-one' />
    </View>
  )
}

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