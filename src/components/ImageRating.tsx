
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import  Icon  from 'react-native-vector-icons/EvilIcons';

interface Property {
  id: number;
  name: string;
  address: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  monthlyRent: number;
  rating: number;
  imageUrl: string;
}

interface PropertyCardProps {
  property: Property;
}

export const ImageRating: React.FC<PropertyCardProps> = ({ property }) => {

    const bedroomsIcon = <Icon name='heart' size={40} color={'white'} />

  return (
    <View style={styles.container}>
      <View>
      <View>
        <Image source={{uri: property.imageUrl}} style={styles.img} />
      </View>
        <Text style={styles.title}>{ property.name }</Text>
        <Text style={styles.text}>{ property.address }</Text>
        <Text style={styles.text}>{ bedroomsIcon } { property.bedrooms }</Text>
        <Text style={styles.text}>Bathrooms: { property.bathrooms }</Text>
        <Text style={styles.text}>Area: { property.area } sqft</Text>
        <Text style={styles.text}>Monthly Rent: ${ property.monthlyRent }</Text>
        <Text style={styles.text}>Rating: { property.rating }/5</Text>
      </View>
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
    margin: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  title:{
    fontSize:25,
    fontWeight: 'bold',
    color: 'black',
    textAlign:'center'
  },
  text: {
    fontSize: 16,
    marginBottom: 5,
    color: 'black'
  },
  img:{
    width:100,
    height:100,
    borderRadius: 5,
  }
});





