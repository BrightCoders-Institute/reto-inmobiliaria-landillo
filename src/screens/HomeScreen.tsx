import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import apartments from '../data/apartments.json';
import  { InfoCard }  from '../components/InfoCard';


export const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {apartments.map((property: any) => (
        <InfoCard key={property.id} property={property} />
      ))}
    </ScrollView>
  );
};


const styles = StyleSheet.create({
    container:{
      backgroundColor: 'white',
    }
});