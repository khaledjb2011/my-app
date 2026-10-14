import { useLocalSearchParams } from 'expo-router'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const index = () => {
const params=useLocalSearchParams()
const prodData= JSON.parse(params.data)

  return (
    <View style={styles.contaner}>
      <View style={styles.search}>
        <Text>search</Text>
      </View>


    <Text>{prodData.name}</Text>
              

    </View>
  )
}

export default index

const styles = StyleSheet.create({
  contaner: {
    flex: 1,
    backgroundColor: ""
  },
  search: {
    borderWidth: 1,
    width: 400,
    height: 40,
    margin: 20,
    alignItems: "center",
    borderRadius: 10

  },
  information: {
    borderWidth: 1,
    width: 400,
    height: 70,
    alignItems: "center",
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "center",
    margin: 20

  },
  box: {
    borderRadius: 50,
    width: 50,
    height: 50,
    marginLeft: 10,
  },
  box2: {

    flexDirection: "row",
    alignItems: "center",
  },
  time: {
    marginRight: 10,
  }
})
