import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import PlaceItem from './PlaceItem';
import {Colors} from '../../constants/color';

export default function PlacesList({places}) {
  if (!places || places.length === 0) {
    return (
      <View style={styles.fallbackContainer}>
        <Text style={styles.fallbackText}>
          No place is added - try adding some !
        </Text>
      </View>
    );
  }
  return (
    <FlatList
      data={places}
      keyExtractor={item => item.id}
      renderItem={({item}) => <PlaceItem place={item} />}
    />
  );
}

const styles = StyleSheet.create({
  fallbackContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fallbackText: {
    color: Colors.primary200,
  },
});
