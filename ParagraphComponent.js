

import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const ParagraphComponent = ({ paragraphTextData }) => {
  const { newText, paragraphText1, paragraphText2, paragraphText3 } = paragraphTextData;

  return (
    <View>
      <Text style={styles.newText}>{newText}</Text>
      <Text style={styles.p}>{paragraphText1}</Text>
      <Text style={styles.p}>{paragraphText2}</Text>
      <Text style={styles.p}>{paragraphText3}</Text>
    </View>
  );
};

export default ParagraphComponent;

