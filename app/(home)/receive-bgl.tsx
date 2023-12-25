import React, { useState } from 'react'
import { StyleSheet, View, Text, Pressable } from 'react-native'
import { COLORS } from '../COLORS'
import QRCode from 'react-native-qrcode-svg'
import { Feather } from '@expo/vector-icons'
import * as Clipboard from 'expo-clipboard'

const ReceiveBGL = () => {
  const [address, setAddress] = useState<string>('b13agdGAFDemeczdfefgr3SmkjUYR'.trim())
  const base64BGLlogo = 'data:image/png;base64,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'
  const [copied, setCopied] = useState<boolean>(false)
  const [copiedText, setCopiedText] = useState<string>('')

 
  const copyToClipboard = async () => {
    await Clipboard.setStringAsync(address);
  }

  const fetchCopiedText = async () => {
    const text = await Clipboard.getStringAsync();
    setCopiedText(text);
    // console.log(text)
  };

  return (
    <View style={styles.receiveContainer}>
      <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 50 }}>
        <QRCode
          value={address}
          logo={{ uri: base64BGLlogo }}
          logoSize={30}
        />
      </View>

      <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 35, borderRadius: 15 }}>
        <View style={{ backgroundColor: '#F5F5F5', minHeight: 96, minWidth: 235, padding: 18, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontSize: 13, color: '#AAAAAA', margin: 6 }}>
            Your BGL Address
          </Text>
          <View>
            <Text style={{ fontSize: 13, paddingLeft: 16, paddingRight: 16 }}>
              b13agdGAFDemeczdfef
              gr3SmkjUYR
            </Text>
            <Pressable style={{ margin: 16 }} 
            onPress={() => {
              copyToClipboard() 
              setCopied(true)
            }}>
              <Feather name={copied ? "check-square" : "copy"} size={24} color="black" />
            </Pressable>
          </View>
        </View>
      </View>
      <View style={{ justifyContent: 'center', alignItems: 'center', width: 330, height: 48, marginTop: 29, marginLeft: 25, marginRight: 25 }}>
        <Text style={{ color: '#AAAAAA', fontSize: 13 }}>
          Send only Bitgesell (BGL) to this address.
          Sending any other coins/Tokens may lead to their
          irretrievable loss.
        </Text>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 97 }}>
        <Pressable
          style={
            {
              height: 50,
              width: 160,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: COLORS.BLACK_ACCENT,
              borderRadius: 11
            }
          }>
          <Text style={{ color: COLORS.WHITE, fontWeight: '600', fontSize: 16 }}>Share</Text>
        </Pressable>
        <Pressable
          style={{
            height: 50,
            width: 160,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: COLORS.ACCENT,
            borderRadius: 11
          }}
          onPress={fetchCopiedText}
        >
          <Text style={{ color: COLORS.WHITE, fontWeight: '600', fontSize: 16 }}>
            Save
          </Text>
        </Pressable>
      </View>
    </View>
  )
}

export default ReceiveBGL

const styles = StyleSheet.create({
  receiveContainer: {
    flex: 1,
    backgroundColor: COLORS.WHITE
  }
})