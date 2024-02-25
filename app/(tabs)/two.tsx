
import { View, Text, Image, ScrollView, StyleSheet, useColorScheme } from 'react-native';
import React, { useRef } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Lottie from 'lottie-react-native';
import EditScreenInfo from '@/components/EditScreenInfo';
import Colors from '@/constants/Colors';
import { createRandomUser } from '@/utils/generate-dommy-data';
import { ThreadProvider, ThreadsContext } from '@/context/thread-context';
import ThreadsItem from '@/components/Threadsitem';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';

export default function TabTwoScreen() {
  return (
    <ScrollView style={{ backgroundColor: useColorScheme() === 'dark' ? 'black' : 'white' }} contentContainerStyle={styles.content} >
      <View style={styles.author}>
        <Image
          style={{ height: 90, width: 90, marginTop: 30,marginLeft:10, borderRadius: 50 }}
          source={require('../../assets/images/dp1.jpg')}
        />
        <View style={styles.meta}>
          <Text style={{ color: useColorScheme() === 'dark' ? 'white' : 'black', fontWeight: 'bold', fontSize: 16, lineHeight: 24, }}>Knowledge Bot</Text>
          <Text style={{
            color: useColorScheme() === 'dark' ? 'white' : 'black',
            fontSize: 14,
            lineHeight: 21,
          }}>1st Jan 2025</Text>
        </View>
      </View>
      <Text style={{
        color: useColorScheme() === 'dark' ? 'white' : 'black',
        fontWeight: 'bold',
        fontSize: 36,
        marginTop: 10,
        marginBottom: 5,
        alignContent: 'center',
        marginHorizontal: 16,
      }}>Lorem Ipsum</Text>
      <View>
        <Text style={styles.paragraph}>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making it
          over 2000 years old.
        </Text>
      </View>
      <Image style={styles.image} source={require('../../assets/images/avatar-2.png')} />
      <Text style={{
        color: useColorScheme() === 'dark' ? 'white' : 'black',
        fontSize: 16,
        lineHeight: 24,
        marginVertical: 8,
        marginHorizontal: 16,
      }}>
        Richard McClintock, a Latin professor at Hampden-Sydney College in
        Virginia, looked up one of the more obscure Latin words, consectetur,
        from a Lorem Ipsum passage, and going through the cites of the word in
        classical literature, discovered the undoubtable source.
      </Text>
      <Text style={{
        color: useColorScheme() === 'dark' ? 'white' : 'black',
        fontSize: 16,
        lineHeight: 24,
        marginVertical: 8,
        marginHorizontal: 16,
      }}>
        Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of &quot;de Finibus
        Bonorum et Malorum&quot; (The Extremes of Good and Evil) by Cicero,
        written in 45 BC. This book is a treatise on the theory of ethics, very
        popular during the Renaissance. The first line of Lorem Ipsum,
        &quot;Lorem ipsum dolor sit amet..&quot;, comes from a line in section
        1.10.32.
      </Text>
    </ScrollView>
  );
  function RootLayoutNav() {
    const colorScheme = useColorScheme();

    return (
      <>

        <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
          <ThreadProvider>
            <Stack>
              <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
              <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
            </Stack>
          </ThreadProvider>
        </ThemeProvider>
      </>
    );
  }
};

const styles = StyleSheet.create({
  container: {

  },
  content: {
    paddingVertical: 16,
  },
  author: {
    flexDirection: 'row',
    marginVertical: 8,
    marginHorizontal: 16,
  },
  meta: {
    marginTop: 30,
    marginHorizontal: 8,
    justifyContent: 'center',
  },
  name: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: 24,
  },
  timestamp: {

    fontSize: 14,
    lineHeight: 21,
  },
  avatar: {
    height: 48,
    width: 48,
    borderRadius: 24,
  },
  title: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 36,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  paragraph: {
    color: '#000',
    fontSize: 16,
    lineHeight: 24,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    marginVertical: 8,
    marginTop: 1
  },
});