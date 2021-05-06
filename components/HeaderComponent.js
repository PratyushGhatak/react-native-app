import React from 'react'
import  {View, Text } from 'react-native'
import Svg,{Path} from 'react-native-svg'
export default function HeaderComponent(props) {
    const {
        customHeight,
        customTop,
        customBgColor,
        customWavePattern,}=props
    return (
        <View>
            <View style={{backgroundColor: customBgColor, height: customHeight }}>

                <Svg
                    height="80%"
                    width="100%"
                    viewBox="0 0 1440 320"
                    style={{ position: 'absolute', top: customTop }}
                    >
                    <Path fill={customBgColor} d={customWavePattern} />
                </Svg>
            </View>
      </View>
    )
}
