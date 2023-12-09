import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { COLORS } from 'app/COLORS'
import { useFonts } from '@expo-google-fonts/poppins/useFonts'
import { Poppins_600SemiBold, Poppins_700Bold } from '@expo-google-fonts/poppins'

const CreateNewWallet = () => {
    const [fontsLoaded] = useFonts({
        Poppins_600SemiBold,
        Poppins_700Bold
    })

    return (
        <View style={styles.createWalletContainer}>
            <View style={styles.walletTextContainer}>
                <Text style={styles.walletContainerHeading}>
                    Create New Wallet
                </Text>
                <Text style={styles.walletText}>
                    Create a new  Bitgesell Wallet to  manage all your
                    BGL and other assets
                </Text>
            </View>
            <View style={styles.createWalletForm}>
                <Text style={styles.inputLabel}>
                    Enter Password
                </Text>
                <TextInput style={styles.passwordInput} textContentType='password' />
                <Text style={styles.walletText}>
                    🔒 Keep this password safe as it will be used to keep your wallet safe on this device.
                </Text>
                <View style={styles.submitButtonContainer}>
                    <Pressable style={styles.submitButton} onPress={() => alert('Im in!')}>
                        <Text style={styles.submitButtonText}>Create a A New Wallet</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}

export default CreateNewWallet

const styles = StyleSheet.create({
    createWalletContainer: {
        flex: 1,
        backgroundColor: COLORS.WHITE,
        padding: 20
    },
    walletTextContainer: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginTop: 144
    },
    walletContainerHeading: {
        color: COLORS.BLACK_ACCENT,
        fontSize: 30,
        fontWeight: '700', // Semibold in figma is kinda "bold" in code 
        fontFamily: 'Poppins_600SemiBold', // @todo: load async
        marginBottom: 22
    },
    walletText: {
        color: COLORS.WHITE003,
        fontSize: 16,
        marginBottom: 24
    },

    createWalletForm: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start'

    },
    inputLabel: {
        color: COLORS.BLACK,
        fontSize: 14,
        fontWeight: '700',
        fontFamily: 'Poppins_700Bold'

    },
    passwordInput: {
        width: 335,
        height: 81,
        marginLeft: 12,
        marginRight: 28,
        borderBottomColor: COLORS.WHITE004,
        borderStyle: 'solid',
        borderWidth: 2,
        borderTopColor: COLORS.WHITE,
        borderEndColor: COLORS.WHITE,
        borderLeftColor: COLORS.WHITE,
        borderRightColor: COLORS.WHITE,
        marginBottom: 40


    },

    submitButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: 335,
        height: 50,
        borderRadius: 11,
        backgroundColor: COLORS.BLACK_ACCENT,
    },
    submitButtonText: {
        color: COLORS.WHITE,
        fontSize: 16
    },
    submitButtonContainer: {
        marginTop: 158
    }
})