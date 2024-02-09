import React, { useState } from 'react'
import { StyleSheet, View, Text, Pressable, ScrollView, TextInput } from 'react-native'
import { COLORS } from '../COLORS'

interface Account {
  seed: string,
  accountIndex: number
  wallet: {
    address: string,
    privateKey: string
  }
}
const BackupWallet = () => {
  const [selectedAccount, setselectedAccount] = useState<Account>({
    seed: 'seed from the api',
    accountIndex: 1,
    wallet: {
      address: '',
      privateKey: 'private_key_from_api'
    }
  })

  return (
    <ScrollView style={styles.backupWalletContainer}>
      <View style={{ padding: 25 }}>
        <Text style={styles.headingText}>Backup Private Key</Text>
        <View style={{ minHeight: 259, minWidth: 315, backgroundColor: '#F5F5F5', marginTop: 22, borderRadius: 15 }}>
          <View>
            <Text style={{ color: '#AAAAAA', paddingLeft: 50, paddingRight: 23, marginTop: 13 }}>
              Reveal Private Key for
              Account {selectedAccount.accountIndex}
            </Text>
            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 65 }}>
              <TextInput
                value={selectedAccount.wallet.privateKey}
                secureTextEntry={true} />
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <TextInput placeholder='Enter password' style={{ borderWidth: 1, borderColor: COLORS.BLACK_ACCENT, minHeight: 35, width: 250, borderRadius: 15, padding: 5 }} />
            </View>
          </View>
        </View>
        <View>
          <Text style={{ color: '#AAAAAA', paddingLeft: 40, paddingRight: 48, marginTop: 16 }}>
            Never share your wallet private key.
            It's your key to access funds,
            and sharing it puts your assets at risk
          </Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 16 }}>
            <Pressable style={{ backgroundColor: COLORS.BLACK_ACCENT, minHeight: 50, width: 160, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', borderRadius: 11 }}>
              <Text style={{ color: COLORS.WHITE, fontSize: 16, fontWeight: '600' }}>
                Reveal Private Key
              </Text>
            </Pressable>
            <Pressable style={{ backgroundColor: COLORS.ACCENT, minHeight: 50, width: 160, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', borderRadius: 11, marginLeft: 11 }}>
              <Text style={{ color: COLORS.WHITE, fontSize: 16, fontWeight: '600' }}>
                Copy Private Key
              </Text>
            </Pressable>
          </View>
        </View>

      </View>
      <View style={{ padding: 25 }}>
        <Text style={styles.headingText }>Backup Seedphrase</Text>
        <View style={{ minHeight: 259, minWidth: 315, backgroundColor: '#F5F5F5', marginTop: 22, borderRadius: 15 }}>
          <View>
            <Text style={{ color: '#AAAAAA', paddingLeft: 50, paddingRight: 23, marginTop: 13 }}>
              Reveal Seedphrase for
              Account {selectedAccount.accountIndex}
            </Text>
            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 65 }}>
              <TextInput
                value={selectedAccount.seed}
                secureTextEntry={true} />
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <TextInput placeholder='Enter password' style={{ borderWidth: 1, borderColor: COLORS.BLACK_ACCENT, minHeight: 35, width: 250, borderRadius: 15, padding: 5 }} />
            </View>
          </View>
        </View>
        <View>
          <Text style={{ color: '#AAAAAA', paddingLeft: 40, paddingRight: 48, marginTop: 16 }}>
            Never share your wallet seed phrase.
            It's your key to access funds,
            and sharing it puts your assets at risk
          </Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 16 }}>
            <Pressable style={{ backgroundColor: COLORS.BLACK_ACCENT, minHeight: 50, width: 160, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', borderRadius: 11 }}>
              <Text style={{ color: COLORS.WHITE, fontSize: 16, fontWeight: '600' }}>
                Reveal Seed Phrase
              </Text>
            </Pressable>
            <Pressable style={{ backgroundColor: COLORS.ACCENT, minHeight: 50, width: 160, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', borderRadius: 11, marginLeft: 11 }}>
              <Text style={{ color: COLORS.WHITE, fontSize: 16, fontWeight: '600' }}>
                Copy Seed Phrase
              </Text>
            </Pressable>
          </View>
        </View>

      </View>
    </ScrollView>
  )
}

export default BackupWallet

const styles = StyleSheet.create({
  backupWalletContainer: {
    flex: 1,
    backgroundColor: COLORS.WHITE
  },
  headingText: {
    color: COLORS.BLACK,
    fontWeight: '600',
    fontSize: 16,
    marginBottom: 15
  },
})