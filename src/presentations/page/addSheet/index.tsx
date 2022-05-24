import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { AddSheet } from '../../../domain/usecases';

type Props = {
    addSheet: AddSheet
};

export function AddSheetPage({addSheet}: Props) {
    
    async function handleSubmit() {
      try {
         const t = await addSheet.add({
            image: 'http://localhost',
            title: 'acorda pedrinho'
        })
      }catch(err) {
        alert('error')
      }
    }

    return <View >
      <TouchableOpacity onPress={handleSubmit} style={{backgroundColor: 'red'}}>
        <Text> oi </Text>

      </TouchableOpacity>


    </View>
}