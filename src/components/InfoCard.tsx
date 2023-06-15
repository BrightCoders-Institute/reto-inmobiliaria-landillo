import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import bedIcon from '../icons/bedIcon.png';
import locationIcon from '../icons/locationIcon.png';
import bathIcon from '../icons/bathIcon.png';
import areaIcon from '../icons/areaIcon.png';
import starIcon from '../icons/starIcon.png';
import { FavoriteButton } from './FavoriteButton';

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

export const InfoCard: React.FC<PropertyCardProps> = ({ property }) => {

  const infoBlocks = [
    { icon: locationIcon, text: property.address },
    { icon: bedIcon, text: property.bedrooms },
    { icon: bathIcon, text: property.bathrooms },
    { icon: areaIcon, text: `${property.area} ft²` },
  ];
  return (
      <View style={styles.container}>
        <View>
          <View>
            <Image source={{ uri: property.imageUrl }} style={styles.img} />
          </View>
          <Text style={styles.title}>{property.name}</Text>
          {infoBlocks.map((block, index) => (
            <Text key={index} style={getTextStyle(block.icon)}>
              <Image source={block.icon} style={styles.icon} />
              { '  ' + block.text}
            </Text>
          ))}
          <Text style={styles.textRent}>${property.monthlyRent}/m</Text>
          <Text style={styles.textRating}>
            <Image source={starIcon} style={styles.iconStar} />
            {property.rating}
          </Text>
          <FavoriteButton />
        </View>
      </View>
  )
};
  
  const getTextStyle = (icon: string) => {
    switch (icon) {
      case bedIcon:
        return styles.textBed;
      case bathIcon:
        return styles.textBath;
      case areaIcon:
        return styles.textArea;
      default:
        return styles.textAdress;
    }
  };

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5FDFF',
    height: 175,
    padding: 20,
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
    fontSize:22,
    // backgroundColor: 'blue',
    fontWeight: 'bold',
    color: 'black',
    textAlign:'left',
    marginTop: -7,
    marginLeft: 130,
  },
  textAdress:{
    // backgroundColor: 'gray',
    color:'gray',
    fontSize: 15,
    top: 5,
    marginLeft: 130,
  },
  textBed:{
    color: 'black',
    // backgroundColor: 'blue',
    width: 55,
    fontSize: 18,
    fontWeight: 'bold',
    top: 12,
    marginLeft: 130,
  },
  textBath:{
    color: 'black',
    width: 55,
    // backgroundColor: 'green',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 190,
    top: -18
  },
  textArea:{
    color: 'black',
    width: 100,
    // backgroundColor: 'red',
    fontSize: 18,
    fontWeight: 'bold',
    top: -48,
    marginLeft: 250,
  },
  textRent:{
    color: 'black',
    // backgroundColor: 'red',
    width:100,
    fontSize: 22,
    fontWeight: 'bold',
    top: -40,
    marginLeft:130,
  },
  textRating:{
    color: 'black',
    position:'absolute',
    borderRadius:10,
    backgroundColor: '#FBEDB7',
    width:50,
    fontSize: 12,
    fontWeight: 'bold',
    textAlign:'center',
    padding: 5,
    top: 95,
    marginLeft:35,
    alignContent:'center'
  },
  img:{
    position:'absolute',
    width:120,
    height:130,
    borderRadius: 5,
  },
  icon: {
    padding: 5,
    width: 25,
    height: 25,
    marginRight: 5,
    alignContent: 'center',
  },
  iconStar: {
    padding: 5,
    width: 15,
    height: 15,
    marginBottom: 5,
    alignContent: 'center'
  },
});





