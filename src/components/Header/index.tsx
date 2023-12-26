import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import {Colors, hp, wp} from 'shared';

interface HeaderProps {
  showBack?: boolean;
  title: string;
}

const Header = (props: HeaderProps) => {
  const {goBack} = useNavigation();
  const {showBack, title} = props;
  return (
    <View style={styles.container}>
      {showBack && (
        <TouchableOpacity style={styles.backButton} onPress={goBack}>
          <Text style={{color: Colors.white}}>{'BACK'}</Text>
        </TouchableOpacity>
      )}
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export {Header};

const styles = StyleSheet.create({
  title: {
    color: Colors.white,
    fontSize: wp(4),
    textAlign: 'center',
  },
  backButton: {
    position: 'absolute',
    left: 0,
    top: 0,
    zIndex: 999,
    paddingHorizontal: wp(3),
    height: hp(6),
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    height: hp(6),
    backgroundColor: Colors.primary,
    justifyContent: 'center',
  },
});
