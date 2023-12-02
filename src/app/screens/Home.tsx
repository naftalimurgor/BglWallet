import { ImageBackground, Pressable, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { COLORS } from '../COLORS'
import { Poppins_700Bold } from '@expo-google-fonts/poppins'
import { useFonts } from 'expo-font'

const MenuIcon = require('@/assets/menu.png')
const UserIcon = require('@/assets/user.png')


export default function Home() {
    const [fontsLoaded] = useFonts({
        Poppins_700Bold
    })
    return (
        <View style={styles.homeContainer}>
            <View style={styles.headerContainer}>
                <ImageBackground source={MenuIcon} height={40} width={40}>
                    <Pressable style={styles.menuButton} />
                </ImageBackground>
                <Image source={UserIcon} style={styles.userIcon} />
            </View>
            <View style={styles.walletBalanceContainer}>
                <Text style={styles.balanceTextDescription}>Total Balance</Text>
                <Text style={styles.balanceText}>$2,000</Text>
                <Text style={styles.balanceTextDescription}>19,400 BGL</Text>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    homeContainer: {
        flex: 1,
        backgroundColor: COLORS.WHITE
    },
    headerContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'baseline',
        justifyContent: 'space-between',
        marginTop: 50,
        marginLeft: 20,
        paddingRight: 20
    },
    menuButton: {
        width: 40,
        height: 40,
    },
    userIcon: {
        height: 50,
        width: 50,
        marginRight: 20
    },

    walletBalanceContainer: {
        marginLeft: 20,
        marginTop: 26,
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginBottom: 8
    },
    balanceTextDescription: {
        color: COLORS.WHITE002
    },
    balanceText: {
        fontSize: 25,
        color: COLORS.BLACK_ACCENT,
        fontWeight: '500',
        fontFamily: 'Poppins_700Bold',
    }
})