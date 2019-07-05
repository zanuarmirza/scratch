import React from 'react';
import { View, TextInput, TextInputProps } from 'react-native';

/**
 *
 * @param {TextInputProps} props
 */
const InputText = props => (
  <View>
    <TextInput {...props.InputText} />
  </View>
);

export default InputText;
