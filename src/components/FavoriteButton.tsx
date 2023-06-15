import React, { useState } from 'react';
import { TouchableOpacity, Image, StyleSheet, View } from 'react-native';
import heartIcon from '../icons/heartIcon.png';

export const FavoriteButton = () => {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <TouchableOpacity style={ styles.position } onPress={toggleFavorite}>
      <View style={
        [
            styles.button,
            isFavorite && styles.buttonActive
        ]}>
        <Image source={heartIcon} style={styles.icon} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    position:{
        position:'absolute',
        marginLeft: 300,
        marginTop: 105,
    },
    button: {
    width: 30,
    height: 30,
    borderRadius: 20,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',

  },
  buttonActive: {
    backgroundColor: 'red',
  },
  icon: {
    width: 15,
    height: 15,
  },
});


