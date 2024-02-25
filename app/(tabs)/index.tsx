
import { Platform, RefreshControl, ScrollView, StyleSheet } from 'react-native';
import React, { useRef } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Lottie from 'lottie-react-native';
import { Image } from 'react-native';
import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import Colors from '@/constants/Colors';
import { createRandomUser } from '@/utils/generate-dommy-data';
import { ThreadsContext } from '@/context/thread-context';
import ThreadsItem from '@/components/Threadsitem';

// const user = createRandomUser();
// console.log(JSON.stringify(user, null, 2));

export default function TabOneScreen() {
  const animationRef = React.useRef<Lottie>(null)
  const thread = React.useContext(ThreadsContext)
  function restartApp() {
    throw new Error('Function not implemented.');
  }

  return (
    <SafeAreaView>
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={false}
            tintColor={'transparent'}
            onRefresh={() => { animationRef.current?.play(); }}
          />
        }
      >
        <Image style={{ height: 50, width: 50, marginTop: 30, borderRadius: 50, alignSelf: 'center' }} source={require('../../assets/images/logo.png')} />

        <Lottie
          ref={animationRef}
          source={require("../../lottie-animations/twitter.json")}
          loop={false}
          autoPlay
          style={{ width: 100, height: 100, alignSelf: 'center', }}
          onAnimationFinish={() => {

          }}
        />

        {
          thread.map((thread) => (
            <ThreadsItem key={thread.id} {...thread} />
          ))
        }
      </ScrollView>
    </SafeAreaView>
  );
}

