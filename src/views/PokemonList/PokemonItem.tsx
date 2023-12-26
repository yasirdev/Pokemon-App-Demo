import React from 'react';
import {Text,  StyleSheet, Image, Pressable} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {PokemonItemModel} from 'reduxStore/models/pokemons';
import {Colors, Utils, hp, wp} from 'shared';

interface PokemonItemProps {
  item: PokemonItemModel;
  index: number;
}

const PokemonItem = (props: PokemonItemProps) => {
  const {navigate} = useNavigation();
  const {url, name} = props.item;
  const id = Utils.getIdFromUrl(url);
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
  return (
    <Pressable
      onPress={() => navigate('Detail' as never,{item:{
        ...props.item,
        id,
        imageUrl
      }} as never)}
      style={[
        styles.container,
        props.index % 2 === 0 && {backgroundColor: Colors.borderColor},
      ]}>
      <Image style={styles.image} source={{uri: imageUrl}} />
      <Text style={styles.title}>{name || 'N/A'}</Text>
    </Pressable>
  );
};

export {PokemonItem};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: hp(10),
    alignItems: 'center',
    paddingHorizontal: wp(6),
  },
  image: {
    width: wp(15),
    height: wp(15),
    resizeMode: 'contain',
  },
  title: {
    paddingHorizontal: wp(3),
    fontSize: wp(5),
  },
});
