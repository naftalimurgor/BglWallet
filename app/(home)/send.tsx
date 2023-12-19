import React, { useState } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { COLORS } from '../COLORS'
import { MaterialIcons } from '@expo/vector-icons'

const Send = () => {
  const [addressFocus, setAddressfocus] = useState<boolean>(false)
  const [amountFocus, setAmountFocus] = useState<boolean>(false)

  return (
    <View style={styles.sendcontainer}>

      <View style={{ marginLeft: 20, marginTop: 132 }}>
        <View style={styles.toContainer}>
          <Text style={styles.labelText}>To</Text>
          <View style={{ flexDirection: 'row', alignSelf: 'baseline' }}>
            <TextInput style={[styles.textInput, { borderColor: addressFocus ? COLORS.BLACK : COLORS.WHITE003, }]} onFocus={() => {
              setAddressfocus((focus) => !focus)
            }}
            placeholder='Recepient BGL Address'
            />
            <MaterialIcons name="qr-code-scanner" size={24} color="black" style={{ marginLeft: -30, marginTop: 12.5, marginRight: 12.5 }} />
          </View>
        </View>
        <View style={styles.toContainer}>
          <Text style={styles.labelText}>Amount</Text>
          <View style={{ flexDirection: 'row', alignSelf: 'baseline' }}>
            <TextInput
              style={[styles.textInput, { borderColor: amountFocus ? COLORS.BLACK : COLORS.WHITE003 }]}
              placeholder='Amount in BGL'
              onFocus={() => {
                setAmountFocus((focus) => !focus)
              }}
            />
            <MaterialIcons name="cancel" size={24} color="black" style={{ marginLeft: -30, marginTop: 12.5, marginRight: 12.5 }} />

          </View>
        </View>
        <View>
          <Pressable style={styles.sendButton}>
            <Text style={styles.buttonText}>Send</Text>
          </Pressable>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'flex-end', marginRight: 35, marginTop: 10}}>
          <Text>
            Balance: 0.02 BGL
          </Text>
        </View>
      </View>
    </View>
  )
}

export default Send

const styles = StyleSheet.create({
  sendcontainer: {
    flex: 1,
    backgroundColor: COLORS.WHITE
  },
  toContainer: {

  },
  labelText: {
    color: COLORS.BLACK,
    fontWeight: '700',
    paddingBottom: 15,
  },
  textInput: {
    width: 335,
    height: 50,
    paddingLeft: 15,
    borderColor: COLORS.WHITE003,
    borderWidth: .8,
    borderRadius: 11,
    marginBottom: 50
  },
  sendButton: {
    width: 335,
    height: 50,
    backgroundColor: COLORS.BLACK_ACCENT,
    borderRadius: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color: COLORS.WHITE,
    fontSize: 16,
    fontWeight: '600'
  }
})