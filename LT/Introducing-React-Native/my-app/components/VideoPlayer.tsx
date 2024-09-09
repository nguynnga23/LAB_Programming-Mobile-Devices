import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Text } from 'react-native';

const VideoPlayer = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://example.com/video-thumbnail.jpg' }}
        style={styles.video}
      />
      <TouchableOpacity style={styles.playButton}>
        <Text style={styles.playText}>Play</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: '100%',
    height: 200,
  },
  video: {
    width: '100%',
    height: '100%',
  },
  playButton: {
    position: 'absolute',
    top: '45%',
    left: '45%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 10,
    borderRadius: 25,
  },
  playText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default VideoPlayer;
