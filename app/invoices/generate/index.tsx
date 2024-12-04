import { ScrollView, Text } from "react-native";

import { Button } from "~/components/Button";
import CustomTextInput from "~/components/CustomTextInput";
import KeyboardAwareScrollView from "~/components/KeyboardAwareScrollView";

function GenerateInvoice() {
  return (
    <KeyboardAwareScrollView>
      <Text className="mb-5 text-2xl font-bold">Sender Info</Text>

      <ScrollView>
        <CustomTextInput label="Name" />
        <CustomTextInput label="Address" multiline />
        <CustomTextInput label="Tax ID" />
      </ScrollView>

      <Button title="Next" className="mt-auto" />
    </KeyboardAwareScrollView>
  );
}
export default GenerateInvoice;
