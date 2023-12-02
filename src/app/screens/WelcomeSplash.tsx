import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '@/app/COLORS'
import SplashLogo from '@/components/SplashLogo'
import { useFonts } from 'expo-font'
import { Poppins_500Medium } from '@expo-google-fonts/poppins'

export default function WelcomeSplash() {
    // Loads non-system font asynchronously, set as fontFamily: 'Poppins_500Medium'
    const [fontsLoaded] = useFonts({
        Poppins_500Medium
    })

    return (
        <View style={styles.welcomeContainer}>
            <View style={styles.viewLogoContainer}>
                <SplashLogo />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.welcomeText}>
                    Welcome to our new crypto wallet mobile app
                </Text>
            </View>
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
        justifyContent: 'center',
        alignItems: 'center'
    },
    welcomeText: {
        color: COLORS.WHITE,
        fontSize: 14,
        fontFamily: 'Poppins_500Medium'
    }
})