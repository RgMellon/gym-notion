import React, { useEffect } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { AddSheet } from '../../../domain/usecases';
import { LoadSheet } from '../../../domain/usecases/load-sheet';

type Props = {
  loadSheet: LoadSheet
  addSheet: AddSheet
};

export function AddSheetPage({addSheet, loadSheet}: Props) {

    useEffect(() => {
      async function getSheets() {
        const response  = await loadSheet.load()
        console.log(response)
      }

      getSheets()
    }, [])
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