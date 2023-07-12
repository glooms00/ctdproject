

import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles';

const ParagraphComponent = ({ paragraphTextData }) => {
  const { newText, paragraphs } = paragraphTextData;

  return (
    <View>
      <Text style={styles.newText}>{newText}</Text>
      <Text style={styles.p}>{paragraphs.join('\n\n')}</Text>
    </View>
  );
};

export default ParagraphComponent;

