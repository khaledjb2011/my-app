import { useRouter } from 'expo-router'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const Card = (props: any) => {

const navigation=useRouter()

  const pressCard = () =>{
const dataStr=JSON.stringify(props)

navigation.push({
  pathname:"/hi",
  params:{data:dataStr},
}) 
  }
  return (
    <TouchableOpacity onPress={pressCard}>

      <View style={[styles.conversation, { backgroundColor: props.bgcolor }]}>

        <View style={styles.box2}>

          <View>
            <Text >{props.name}</Text>
            <Text >{props.msg}</Text>
          </View>

         </View>
      </View>
    </TouchableOpacity>
  )
}

export default Card

const styles = StyleSheet.create({
  conversation: {
   // borderWidth: 1,
    width: 400,
    height: 70,
    alignItems: "center",
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "center",
    margin: 5,

  },
  box2: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent:"flex-end",
    //borderWidth:1,
    width:"100%",
    padding:5
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