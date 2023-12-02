import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../COLORS'
import { useFonts } from '@expo-google-fonts/poppins/useFonts'
import { Poppins_700Bold, Poppins_300Light, Poppins_400Regular, Poppins_500Medium } from '@expo-google-fonts/poppins'
import IsometricLogo from '@/components/IsometricOne'
import SliderDots from '@/components/SliderDots'
import IsometricThree from '@/components/IsometricThree'

const OnboardingStepOne = () => {
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
                    <IsometricThree />
                </View>
            </View>

            <View style={styles.onboardTextContainer}>
                <Text style={[styles.onboardHeading, { fontFamily: '' }]}>
                    Keep your wallet
                    app up to date
                </Text>
                <Text style={[styles.onboardingText, { fontFamily: '' }]}>
                    Regularly update your wallet software to ensure you have the latest security patches and bug fixes.
                </Text>
            </View>

            <View style={styles.footerContainer}>
                <View>
                    <SliderDots screenCount={3} />
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

export default OnboardingStepOne

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
        color: COLORS.BLACK,
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
        backgroundColor: COLORS.BLACK,
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