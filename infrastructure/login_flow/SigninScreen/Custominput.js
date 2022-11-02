import React from "react";
import { Controller } from "react-hook-form";
import { Text, TextInput, StyleSheet, SafeAreaView } from "react-native";

const CustomInput = ({
  control,
  name,
  rules = {},
  placeholder,
  secureTextEntry,
}) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({
        field: { value, onChange, onBlur },
        fieldState: { error },
      }) => (
        <>
          <SafeAreaView
            style={[
              styles.container,
              { borderColor: error ? "red" : "#f9fbfc" },
            ]}
          >
            <TextInput
              style={styles.input}
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              placeholder={placeholder}
              secureTextEntry={secureTextEntry}
              enablesReturnKeyAutomatically={true}
              autoCapitalize={"none"}
            />
          </SafeAreaView>
          {error && (
            <Text style={{ color: "red", alignSelf: "stretch" }}>
              {error.message || "ERROR"}
            </Text>
          )}
        </>
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: "90%",
    height: 35,
    borderWidth: 2,
    borderRadius: 5,
    marginVertical: 5,
  },
  input: {
    flex: 1,
    textAlign: "center",
    fontSize: 18,
  },
});
export default CustomInput;
