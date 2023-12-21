import * as SecureStore from 'expo-secure-store'

export const saveItem = async (key: string, value: string) => {
  return await SecureStore.setItemAsync(key, value)
}
