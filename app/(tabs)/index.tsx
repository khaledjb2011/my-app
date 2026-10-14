import Card from '@/components/Card'
import { data } from '@/constants/data'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const index = () => {
  const renderdata = () => {
    const render  = data.map ((card)=>{
      return <Card name={card.name} msg={card.about} bgcolor={card.color} />
    })

    return render 
  }

  return (
    <View style={styles.contaner}>
      <View style={styles.search}>
        <Text style={styles.titele}>[عالمي الخاص]  </Text>
        <text style={styles.subtitle}>رحله مع التوحد والاحتواء</text>
      </View>


    
      {/* <Card name={"khaled"} msg={"hello"}time={"12:33"}/>
            <Card name={"mohamad"} msg={"how are you"}time={"23:40"}/>
           <Card name={"everst"} msg={"where are you"}time={"20:37"}/> 
            <Card name={"k-2"} msg={"i am waiting you"}time={"19:56"}/> 
           */}

           {renderdata()}
              

    </View>
  )
}

export default index

const styles = StyleSheet.create({
  contaner: {
    flex: 1,
    backgroundColor: "#e6ddcc"
  },
  search: {
    borderWidth: 1,
    width: 420,
    height: 80,
    margin: 20,
    alignItems: "center", 
    borderRadius: 10,
    backgroundColor:"#9c3d54"

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
  },
  titele: {
    fontSize:27,
    fontWeight:"bold",
  },
  subtitle:{
    fontSize:25,
    marginTop:5,
  }
})
