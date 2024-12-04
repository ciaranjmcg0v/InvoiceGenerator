import { Text, TextInputProps, TextInput, View } from "react-native";

type CustomTextInputProps = TextInputProps & {
  label: string;
};

export default function CustomTextInput({
  label,
  ...props
}: CustomTextInputProps) {
  return (
    <View className="mb-4">
      <Text className="mb-2 text-lg">{label}</Text>
      <TextInput
        {...props}
        className={`rounded border border-gray-300 p-4 ${props.className}`}
      />
    </View>
  );
}
