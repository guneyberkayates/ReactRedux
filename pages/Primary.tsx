import { SafeAreaView,View, Text, Button } from 'react-native'
import React,{useState} from 'react'
import { TextInput } from 'react-native-gesture-handler'

import { useDispatch } from 'react-redux';

const Primary = () => {

  const [text,setText] = useState('');
  const dispatch = useDispatch();

  const handleAdd = () => {
      dispatch({type:'ADD_NAME',payload:{name:text}})
  }
  const handleClean = () => {
    dispatch({type:'CLEAN_LIST'})
}

  return (
    <SafeAreaView>
      <View style= {{borderWidth:1,margin:10,padding:5}}>
      <Text style={{fontSize:30}}>Primary</Text>
      <TextInput 
        value={text}
        onChangeText={setText}
        placeholder="İsim giriniz..."
      />
      <Button title='Ekle' onPress={handleAdd} />
      <Button title='Temizle' onPress={handleClean} />
      </View>
    </SafeAreaView>
  )
}

export default Primary