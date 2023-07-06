import React from 'react';
import { Text, } from 'react-native';
import styles from './styles';

const ContentComponent = ({ title, newText, paragraphText1, paragraphText2, paragraphText3 }) => {
  return (
    <>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.newText}>{newText}</Text>
      <Text style={styles.p}>{paragraphText1}</Text>
      <Text style={styles.p}>{paragraphText2}</Text>
      <Text style={styles.p}>{paragraphText3}</Text>
    </>
  );
};

export default ContentComponent;
