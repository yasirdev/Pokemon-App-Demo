import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PokemonList from '../views/PokemonList';
import Detail from '../views/Detail';

const {Navigator, Screen} = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Screen name="Pokemons" component={PokemonList} />
      <Screen name="Detail" component={Detail} />
    </Navigator>
  );
};

export default RootNavigator;
