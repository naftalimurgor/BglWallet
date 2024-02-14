export const emailRegex = (emailAddress: string) => {
  return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(emailAddress)
}

export const API_URL = 'https://us-central1-exglos-api.cloudfunctions.net/app'
