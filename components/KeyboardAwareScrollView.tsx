import { PropsWithChildren } from "react";
import {
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function KeyboardAwareScrollView({
  children,
}: PropsWithChildren) {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
      keyboardVerticalOffset={Dimensions.get("window").height * 0.05} // To avoid a bug with the `KeyboardAvoidingView`
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1, padding: 10, gap: 5 }}
        keyboardShouldPersistTaps="handled"
      >
        <SafeAreaView edges={["bottom"]} style={{ flex: 1 }}>
          {children}
        </SafeAreaView>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
