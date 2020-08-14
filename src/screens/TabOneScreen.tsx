import React, { useLayoutEffect } from 'react';
import { StyleSheet, I18nManager } from 'react-native';

import EditScreenInfo from '../../src/components/EditScreenInfo';
import { Text, View } from '../../src/components/Themed';
import { useTranslation } from 'react-i18next';
import * as Updates from 'expo-updates'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

export default function TabOneScreen() {
  const { t, i18n } = useTranslation();
  const navigation = useNavigation()
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: t('Home'),
    });
  });
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t('Home')}</Text>
      <Text style={[styles.title, {marginTop: 30, fontSize: 13}]}>{t('des')}</Text>
      {/* <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/TabOneScreen.tsx" /> */}

      <TouchableOpacity
      style={styles.button}
        onPress={() => {
          i18n
            .changeLanguage(i18n.language === 'ar' ? 'en' : 'ar')
            .then(() => {
              I18nManager.forceRTL(i18n.language === 'ar');
              Updates.reloadAsync()
            })

        }}
        >
        <Text
          
        >
          change Lang
      </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'left'
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  button:{
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFCE47',
    marginHorizontal: 30,
    borderRadius: 10,
    marginTop: 30
  }
});
