import { router } from 'expo-router'
import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const Card = (props: any) => {
    return (
    <TouchableOpacity onPress={()=> router.push('/hi')}>
        <View style={styles.conversation}>
        <View style={styles.box2}>
             <Image style={styles.box} source={{ uri: "https://www.shutterstock.com/image-vector/default-avatar-profile-icon-transparent-260nw-2463868843.jpg" }} />
          <View>
            <Text >{props.name}</Text>
            <Text >{props.msg}</Text>
          </View>
        </View>

        <View style={styles.time}>
          <Text >{props.time}</Text>
        </View>

        </View>
</TouchableOpacity>
    )
}

export default Card

const styles = StyleSheet.create({
    conversation:{
        borderWidth:1,
        width:400,
        height:70,
        alignItems:"center",
        borderRadius:10,
        flexDirection:"row",
        justifyContent:"space-between",
        alignSelf:"center",
        margin:20
    },
    box2:{
    flexDirection: "row",
    alignItems: "center",
},
 box: {
    borderRadius: 50,
    width: 50,
    height: 50,
    marginLeft: 10,
  },
   time: {
    marginRight: 10,
  }


})