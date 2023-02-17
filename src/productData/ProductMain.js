import { View, Text, Button, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import React from 'react'

export default function productMain({ navigation }) {
  return (
    <View style={styles.fullFlex}>
      <TouchableOpacity
        style={[styles.fullFlex, styles.card, styles.color1]}
        onPress={() => {
          navigation.navigate('ProductDetail', {
            itemId: 100,
            name: 'card-1',
          });
        }}
      >
        <View>
          <Text style={styles.black}>Card 1</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.fullFlex, styles.card, styles.color2]} onPress={() => {
        navigation.navigate('ProductDetail', {
          itemId: 101,
          name: 'card-2',
        });
      }}>
        <View>
          <Text style={styles.black}>Card 2</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.fullFlex, styles.card, styles.color3]} onPress={() => {
        navigation.navigate('ProductDetail', {
          itemId: 102,
          name: 'card-3',
        });
      }}>
        <View>
          <Text style={styles.black}>Card 3</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.fullFlex, styles.card, styles.color4]} onPress={() => {
        navigation.navigate('ProductDetail', {
          itemId: 103,
          name: 'card-4',
        });
      }}>
        <View>
          <Text style={styles.black}>Card 4</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.fullFlex, styles.card, styles.color5]} onPress={() => {
        navigation.navigate('ProductDetail', {
          itemId: 104,
          name: 'card-5',
        });
      }}>
        <View>
          <Text style={styles.black}>Card 5</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.fullFlex, styles.card, styles.color6]} onPress={() => {
        navigation.navigate('ProductDetail', {
          itemId: 105,
          name: 'card-6',
        });
      }}>
        <View>
          <Text style={styles.black}>Card 6</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
  fullFlex: {
    flex: 1,
    backgroundColor: '#fff'
  },
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 60,
    marginVertical: 10,
    borderColor: '#000',
    borderWidth: 1,
  },
  black: {
    color: 'black'
  },
  color1: {
    backgroundColor: '#AAE3E2',
  },
  color2: {
    backgroundColor: '#D9ACF5',
  },
  color3: {
    backgroundColor: '#FFCEFE',
  },
  color4: {
    backgroundColor: '#FDEBED',
  },
  color5: {
    backgroundColor: '#BDCDD6',
  },
  color6: {
    backgroundColor: '#93BFCF',
  }
})