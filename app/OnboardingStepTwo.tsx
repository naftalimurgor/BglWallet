import IsometricTwo from '@/components/IsometricTwo'
import SliderDots from '@/components/SliderDots'
import { Poppins_300Light, Poppins_400Regular, Poppins_500Medium, Poppins_700Bold } from '@expo-google-fonts/poppins'
import { useFonts } from '@expo-google-fonts/poppins/useFonts'
import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { COLORS } from './COLORS'

const OnboardingStepTwo = () => {
    // Loads non-system font asynchronously, set as fontFamily: 'Poppins_500Medium'
    const [fontsLoaded] = useFonts({
        Poppins_700Bold,
        Poppins_300Light,
        Poppins_400Regular,
        Poppins_500Medium
    })

    return (
        <View style={styles.onboardingContainer}>
            <View style={styles.skipContainer}>
                <Pressable onPress={() => alert('skip!')}>
                    <Text style={[styles.skippButtonText, { fontFamily: '' }]}>Skip</Text>
                </Pressable>
            </View>

            <View style={styles.isometricContainer}>
                <View>
                    <IsometricTwo />
                </View>
            </View>

            <View style={styles.onboardTextContainer}>
                <Text style={[styles.onboardHeading, { fontFamily: '' }]}>
                    Manage all your
                    assets in one place
                </Text>
                <Text style={[styles.onboardingText, { fontFamily: '' }]}>
                    Unlock the power of our crypto wallet app! Seamlessly manage all your assets in one secure place.                </Text>
            </View>

            <View style={styles.footerContainer}>
                <View>
                    <SliderDots screenCount={2} />
                </View>
                <View>
                    <Pressable style={styles.onboardButton}>
                        <Text style={[styles.onboardButtonText, { fontFamily: '' }]}>Continue</Text>
                    </Pressable>
                </View>
            </View>

        </View>
    )
}

export default OnboardingStepTwo

const styles = StyleSheet.create({
    onboardingContainer: {
        flex: 1,
        backgroundColor: COLORS.WHITE
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

    isometricContainer: {
        marginTop: 80,
        marginRight: 8,
        marginLeft: 8,
        justifyContent: 'center',
        alignItems: 'center'
    },
    onboardTextContainer: {
        marginTop: 70,
        marginLeft: 20,
        marginRight: 70,
        flexDirection: 'column',
        alignItems: 'flex-start'
    },
    onboardHeading: {
        color: COLORS.BLACK_ACCENT,
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
    footerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        marginTop: 67,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 34
    },
    pressableContainer: {

    },
    onboardButton: {
        backgroundColor: COLORS.BLACK_ACCENT,
        width: 140,
        height: 50,
        borderRadius: 11,
        justifyContent: 'center',
        alignItems: 'center'
    },
    onboardButtonText: {
        color: COLORS.WHITE,
        fontSize: 16,
        fontFamily: 'Poppins_500Medium'
    }
})