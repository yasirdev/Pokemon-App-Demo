import React from 'react';
import {View, StyleSheet, FlatList, SafeAreaView} from 'react-native';
import {Header} from 'components';
import {PokemonItem} from './PokemonItem';
import {useGetAllPokemonsQuery} from 'reduxStore/api/pokemons';
import {GlobalStyles} from 'shared';

interface PokemonListProps {}

const PokemonList = (props: PokemonListProps) => {
  const {data, refetch, isLoading} = useGetAllPokemonsQuery();
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Pokemon" />
      <View style={GlobalStyles.flex}>
        <FlatList
          refreshing={isLoading}
          onRefresh={refetch}
          data={data?.results}
          renderItem={props => <PokemonItem {...props} />}
        />
      </View>
    </SafeAreaView>
  );
};

export default PokemonList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
