import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import AppIntroSlider from 'react-native-app-intro-slider'
import { COLORS } from '@/app/COLORS'
import { router } from 'expo-router'
import { useFonts } from 'expo-font'

import {
  Poppins_500Medium,
  Poppins_400Regular,
  Poppins_300Light,
  Poppins_700Bold
} from '@expo-google-fonts/poppins'

type SlideItem = {
  item: {
    key: string
    title: string
    text: string
    image: any
    backgroundColor: string
  }
}

const slides = [
  {
    key: 'one',
    title: 'Research and select a wallet',
    text: 'Start by researching different cryptocurrency wallets available in the market. Consider factors such as security.',
    image: require('@/assets/step1.png'),
    backgroundColor: '#fff',
  },
  {
    key: 'two',
    title: 'Manage all your assets in one place',
    text: 'Seamlessly manage all your assets in one secure place',
    image: require('@/assets/step2.png'),
    backgroundColor: '#fff',
  },
  {
    key: 'three',
    title: 'Keep your wallet app up to date',
    image: require('@/assets/step3.png'),
    text: 'Regularly update your wallet software to ensure you have the latest security patches and bug fixes.',
    backgroundColor: '#fff',
  }
]

const OnboardSlider = () => {

  const [fontsLoaded] = useFonts({
    Poppins_500Medium,
    Poppins_400Regular,
    Poppins_300Light,
    Poppins_700Bold,
  })

  const renderNextButton = () => {
    return (
      <View style={styles.onboardButtonContainer}>
        <View style={styles.onboardButton}>
          <Text style={[styles.onboardButtonText, { fontFamily: 'Poppins_500Medium' }]}>Continue</Text>
        </View>
      </View>
    )
  }

  const renderDoneButton = () => {
    return (
      <View style={styles.onboardButtonContainer}>
        <View style={styles.onboardButton}>
          <Text style={[styles.onboardButtonText, { fontFamily: 'Poppins_500Medium' }]}>Get Started</Text>
        </View>
      </View>
    )
  }

  const onSkipSlider = () => {
    router.replace('/(app)/create-new-wallet')
  }

  // @todo: render as pagination in order to customize the slider dots position to 'absolute'
  const renderSlides = ({ item }: SlideItem) => {
    return (
      <View>
        <View style={styles.skipContainer}>
          <Pressable onPress={onSkipSlider}>
            <Text style={[styles.skippButtonText, { fontFamily: fontsLoaded ? 'Poppins_300Light' : '' }]}>Skip</Text>
          </Pressable>
        </View>

        <Image source={item.image} style={styles.image} />
        <View style={styles.onboardTextContainer}>
          <Text style={[styles.onboardHeading, { fontFamily: fontsLoaded ? 'Poppins_700Bold' : '' }]}>
            {item.title}
          </Text>
          <Text style={[styles.onboardingText, { fontFamily: fontsLoaded ? 'Poppins_400Regular' : '' }]}>
            {item.text}
          </Text>
        </View>
      </View>
    )
  }

  const onDone = () => {
    router.replace('/(app)/create-new-wallet')
  }

  return (
    <AppIntroSlider
      renderItem={renderSlides}
      data={slides}
      onDone={onDone}
      activeDotStyle={styles.activeDotStyle}
      dotStyle={styles.dotStyle}
      renderNextButton={renderNextButton}
      renderDoneButton={renderDoneButton}   
    />
  )
}

export default OnboardSlider

const styles = StyleSheet.create({
  onboardTextContainer: {
    marginTop: 10,
    marginLeft: 20,
    marginRight: 70,
    flexDirection: 'column',
    alignItems: 'flex-start'
  },
  image: {
    marginTop: 78,
    width: 342,
    marginLeft: 22,
    marginRight: 11,
    height: 292.34
  },
  onboardHeading: {
    color: COLORS.BLACK_ACCENT,
    marginTop: 10,
    fontWeight: 'bold',
    fontSize: 28,
    fontFamily: 'Poppins_700Bold'
  },
  onboardingText: {
    color: COLORS.WHITE003,
    marginTop: 10,
    fontSize: 14,
    fontFamily: 'Poppins_400Regular'
  },
  skipContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 40,
    marginRight: 20,
  },
  skippButtonText: {
    color: COLORS.WHITE002,
    fontFamily: 'Poppins_300Light'
  },
  onboardButton: {
    backgroundColor: COLORS.BLACK_ACCENT,
    width: 140,
    height: 50,
    borderRadius: 11,
    justifyContent: 'center',
    alignItems: 'center',
  },
  onboardButtonContainer: {
    marginTop: -45,
  },
  onboardButtonText: {
    color: COLORS.WHITE,
    fontSize: 16,
    fontFamily: 'Poppins_500Medium'
  },
  // ref: https://github.com/Jacse/react-native-app-intro-slider
  activeDotStyle: {
    width: 15,
    height: 7,
    borderColor: '#824FF4',
    borderWidth: 2,
    borderRadius: 15
  },
  dotStyle: {
    height: 8,
    width: 8,
    backgroundColor: '#EAEAEA'
  }
})