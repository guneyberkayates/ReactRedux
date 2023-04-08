import { SafeAreaView,View, Text ,FlatList} from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'

const Secondary = () => {
  const list = useSelector(s=>s.nameList)


 
  return (
    <SafeAreaView>
      <View>
      <Text>Secondary</Text>
      <FlatList 
      keyExtractor={(_,index)=>index.toString()}
      data={list} renderItem={({item})=><Text>{item}</Text>} />
      </View>
    </SafeAreaView>
  )

  }
export default Secondary