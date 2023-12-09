import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from 'app/COLORS'
import SplashLogo from '@/components/SplashLogo'
import { useFonts } from 'expo-font'
import { Poppins_500Medium, Poppins_700Bold } from '@expo-google-fonts/poppins'

export default function WelcomeWalkThrough() {
    // Loads non-system font asynchronously, set as fontFamily: 'Poppins_500Medium'
    const [fontsLoaded] = useFonts({
        Poppins_500Medium, 
        Poppins_700Bold
    })

    return (
        <View style={styles.welcomeContainer}>
            <View style={styles.viewLogoContainer}>
                <SplashLogo />
            </View>
            <View style={styles.textContainer}>
                <Text style={[styles.ctaHeadingText,{fontFamily: ''}]}>
                    Welcome to Our Bitgesell Mobile Wallet
                </Text>
                <Text style={[styles.welcomeText, {fontFamily: ''}]}>
                    Welcome to Bitgesell Wallet
                    –Start managing your digital assets with ease and confidence.
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
        alignItems: 'center',
        marginTop: '40%'
    },
    textContainer: {
        flex: 0.6,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '50%'
    },
    ctaHeadingText: {
        fontSize: 24,
        marginBottom: 20,
        fontWeight: 'bold',
        fontFamily: 'Poppins_600SemiBold',
        color: COLORS.WHITE
    },
    welcomeText: {
        color: COLORS.WHITE,
        fontWeight: 'normal',
        fontSize: 14,
        fontFamily: 'Poppins_500Medium'
    }
})