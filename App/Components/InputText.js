import React from "react";
import { View, TextInput, TextInputProps } from "react-native";
import { Text } from "Components";
import { Colors, Metrics } from "Themes/";
/**
 *
 * @param {TextInputProps} props
 */
const InputText = props => (
  <View>
    <View>
      <Text style={{ color: Colors.dark_2, marginBottom: 10 }}>
        {props.label}
      </Text>
    </View>
    <TextInput style={{ ...Metrics.text.small }} {...props} />
    <View style={{ height: 1, backgroundColor: Colors.dark_2 }} />
  </View>
);

export default InputText;
