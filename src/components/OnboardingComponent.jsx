import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native'
import React from 'react'


export const OnboardingComponent = ({ title, subTitle, buttonTitle, bgImage, onPress, buttonStyle, buttonTextStyle }) => {
  return (
    <View style={styles.container}>

      <ImageBackground style={{ flex: 1, backgroundColor: "#52A19E" }} source={bgImage}>
        <View style={{ flex: 2 }}></View>
        <View style={{ flex: 1.4, backgroundColor: "white", borderTopStartRadius: 20, borderTopEndRadius: 20, alignItems: 'center', justifyContent: 'center', padding: 10 }}>

          <View style={styles.content}>
            {/* Title and Subtitle */}
            <Text style={{ fontSize: 32, fontWeight: 'bold', textTransform: 'capitalize', marginBottom: 10 }}>{title}</Text>
            <Text style={{ fontSize: 18, color: '#565656' }}>{subTitle}</Text>
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
    marginBottom: 40,
    alignItems: 'center',
  },
  buttons: {
    width: '70%',
  },
  
})

