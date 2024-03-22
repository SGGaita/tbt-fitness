import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native'
import React from 'react'


export const OnboardingComponent = ({ title, subTitle, buttonTitle, bgImage, onPress, buttonStyle, buttonTextStyle }) => {
  return (
    <View style={styles.container}>

      <ImageBackground style={{ flex: 1, backgroundColor: "#52A19E" }} source={bgImage}>
        <View style={{ flex: 1 }}></View>
        <View style={{ flex: 2,  borderTopStartRadius: 20, borderTopEndRadius: 20, alignItems: 'center', justifyContent: 'center', padding: 10 }}>

          <View style={styles.content}>
            {/* Title and Subtitle */}
            <Text style={{ fontSize: 45, fontWeight: '200', textTransform: 'capitalize' }}>{title}</Text>
            <Text style={{ fontSize: 40, fontWeight: 600 }}>{subTitle}</Text>
          </View>

          <View style={[styles.buttons]}>
            <TouchableOpacity style={buttonStyle}
            onPress={onPress}
            >
              <Text style={buttonTextStyle}>{buttonTitle}</Text>
            </TouchableOpacity>
          </View>

        </View>
      </ImageBackground>




    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  content: {
    marginBottom: 70,
    alignItems: 'center',
  },
  buttons: {
    width: '70%',
  },
  
})

