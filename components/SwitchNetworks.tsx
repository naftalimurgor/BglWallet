import { View, Text } from 'react-native'
import { SvgXml } from 'react-native-svg'

export default function SwitchNetworks() {
    const logoSvgMarkup = `
    <svg width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14.1063 16.1663L14.0274 3.65974" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M17.8276 12.3808L14.1063 16.1668L10.3375 12.4281" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M4.89352 1.22505L4.97243 13.7316" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M1.1723 5.01067L4.89359 1.22466L8.66235 4.96341" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>    
    `

    const SVGLogo = () => <SvgXml xml={logoSvgMarkup} />
    return (
        <SVGLogo />
    )
}