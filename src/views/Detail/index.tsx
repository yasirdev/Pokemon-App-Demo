import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  ActivityIndicator,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import {Header} from 'components';
import {PokemonItemModel} from 'reduxStore/models/pokemons';
import {useGetPokemonsByIdQuery} from 'reduxStore/api/pokemons';
import {GlobalStyles, wp} from 'shared';
interface DetailProps {
  route: {
    params: {
      item: PokemonItemModel;
    };
  };
}

const DetailItem = ({title, value}: {title: string; value: String}) => {
  return (
    <View
      style={[
        GlobalStyles.alignRow,
        GlobalStyles.pvTwo,
        styles.detailItemContainer,
      ]}>
      <Text>{title}</Text>
      <Text>{value}</Text>
    </View>
  );
};

const Detail = (props: DetailProps) => {
  const {item} = props.route.params;
  const {data, isLoading} = useGetPokemonsByIdQuery(item.id);
  return (
    <SafeAreaView style={styles.container}>
      <Header showBack title={item.name.toUpperCase()} />
      <ScrollView style={[GlobalStyles.phTwo, GlobalStyles.pvTwo]}>
        <Image
          style={[GlobalStyles.justifySelfCenter, styles.image]}
          source={{uri: item.imageUrl}}
        />
        {isLoading && (
          <ActivityIndicator style={GlobalStyles.justifySelfCenter} />
        )}
        {!isLoading && (
          <>
            <DetailItem title={'Name'} value={item.name.toUpperCase()} />
            <DetailItem title={'Height'} value={`${data.height} cm`} />
            <DetailItem title={'Weight'} value={`${data.weight} kg`} />
            <DetailItem title={'Types'} value={item.name} />
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Detail;

const styles = StyleSheet.create({
  image: {
    width: wp(50),
    height: wp(50),
    resizeMode: 'contain',
  },
  detailItemContainer: {
    justifyContent: 'space-between',
  },
  container: {
    flex: 1,
  },
});
