import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import AppIntroSlider from 'react-native-app-intro-slider'
import { COLORS } from '@/app/COLORS'

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
    title: 'Research and selecta wallet',
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
  const renderSlides = ({ item }: SlideItem) => {
    return (
      <View>
        <View style={styles.skipContainer}>
          <Pressable onPress={() => {
            router.replace('/(app)/create-new-wallet')
            alert('hello')
          }}>
            <Text style={[styles.skippButtonText, { fontFamily: 'Poppins_300Light' }]}>Skip</Text>
          </Pressable>
        </View>

        <Image source={item.image} style={styles.image} />
        <View style={styles.onboardTextContainer}>

          <Text style={[styles.onboardHeading, { fontFamily: 'Poppins_700Bold' }]}>
            {item.title}
          </Text>
          <Text style={[styles.onboardingText, { fontFamily: 'Poppins_400Regular' }]}>
            {item.text}
          </Text>
        </View>

      </View>
    )
  }

  const onDone = () => {

  }

  return (
    <AppIntroSlider renderItem={renderSlides} data={slides} onDone={onDone} />
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
    marginTop: 140,
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
    marginTop: 15,
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

})