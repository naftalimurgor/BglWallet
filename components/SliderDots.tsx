import { View, Text } from 'react-native'
import { SvgXml } from 'react-native-svg'

interface Props {
    screenCount: number
}

export default function SliderDots({ screenCount }: Props) {
    enum ScreenCount {
        FIRST = 1,
        SECOND,
        THIRD
    }

    const firstDot = `<svg width="49" height="8" viewBox="0 0 49 8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="45" cy="4" r="4" fill="#EAEAEA"/>
    <rect x="0.5" y="1.5" width="14" height="6" rx="3" stroke="#824FF4"/>
    <circle cx="28" cy="4" r="4" fill="#EAEAEA"/>
    </svg>
    `
    const secondDot = `
    <svg width="49" height="8" viewBox="0 0 49 8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="45" cy="4" r="4" fill="#EAEAEA"/>
    <rect x="17.5" y="1.5" width="14" height="6" rx="3" stroke="#824FF4"/>
    <circle cx="4" cy="4" r="4" fill="#EAEAEA"/>
    </svg>
    `
    const thirdDot = `
    <svg width="49" height="8" viewBox="0 0 49 8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="21" cy="4" r="4" fill="#EAEAEA"/>
    <rect x="34.5" y="1.5" width="14" height="6" rx="3" stroke="#824FF4"/>
    <circle cx="4" cy="4" r="4" fill="#EAEAEA"/>
    </svg>
    `
    const getXML = () => {
        switch (screenCount) {
            case ScreenCount.FIRST:
                return firstDot
            case ScreenCount.SECOND:
                return secondDot
            case ScreenCount.THIRD:
                return thirdDot
            default:
                return firstDot;
        }
    }

    const svgXML = getXML()

    const SVGLogo = () => <SvgXml xml={svgXML} />
    return (
        <SVGLogo />
    )
}