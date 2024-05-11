import axios from 'axios';
import React, {useState} from 'react';
import {TextInput, Text, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import Button from '../../components/button/Button';
import styles from './styles';

const FetchScreen: React.FC = () => {
  const [url, setUrl] = useState('');
  const [responseText, setResponseText] = useState('');
  const [loading, setLoading] = useState(false);

  const handleHttpRequest = async () => {
    if (url) {
      setLoading(true);
      try {
        const response = await axios.get(url);
        setResponseText(response.data);
      } catch (error) {
        setResponseText('Failed to fetch data. Error: ' + error);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={setUrl}
        value={url}
        placeholder="Enter URL"
        autoCapitalize="none"
      />
      <Button
        title={loading ? 'Loading...' : 'Fetch Data'}
        onPress={handleHttpRequest}
        disabled={loading}
      />
      <ScrollView style={styles.responseContainer}>
        <Text>{responseText}</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default FetchScreen;
