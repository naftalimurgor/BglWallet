import { View, Text } from 'react-native'
import { SvgXml } from 'react-native-svg'

export default function SwitchNetworks() {
    const logoSvgMarkup = `
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_223_90)">
    <path d="M23.75 15C23.75 17.0711 22.0711 18.75 20 18.75C17.9289 18.75 16.25 17.0711 16.25 15C16.25 12.9289 17.9289 11.25 20 11.25C22.0711 11.25 23.75 12.9289 23.75 15Z" stroke="#5205FD" stroke-width="1.5"/>
    <path d="M22.5 7H12.5C8.35786 7 5 10.3579 5 14.5C5 18.6421 8.35786 22 12.5 22H22.5C26.6421 22 30 18.6421 30 14.5C30 10.3579 26.6421 7 22.5 7Z" stroke="#5205FD" stroke-width="1.5"/>
    </g>
    <defs>
    <clipPath id="clip0_223_90">
    <rect width="30" height="30" fill="white"/>
    </clipPath>
    </defs>
    </svg>       
    `

    const SVGLogo = () => <SvgXml xml={logoSvgMarkup} />
    return (
        <SVGLogo />
    )
}