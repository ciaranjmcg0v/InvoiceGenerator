import { Stack, Link } from "expo-router";

import { Button } from "~/components/Button";
import { Container } from "~/components/Container";
import { ScreenContent } from "~/components/ScreenContent";

export default function Home() {
  return (
    <>
      <Stack.Screen options={{ title: "Home" }} />
      <Container>
        <ScreenContent path="app/index.tsx" title="Home" />
        <Link href="/invoices/generate" asChild>
          <Button title="New Invoice" />
        </Link>
      </Container>
    </>
  );
}
