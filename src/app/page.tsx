import { Button, Column, Heading, Icon, Text } from "@once-ui-system/core";

import { api, HydrateClient } from "~/trpc/server";

export default async function Home() {
  const hello = await api.post.hello({ text: "from Once UI" });

  return (
    <HydrateClient>
      <Column
        fillWidth
        padding="64"
        gap="24"
        horizontal="center"
        vertical="center"
        style={{ minHeight: "100vh" }}
      >
        <Icon name="rocket" size="xl" onBackground="brand-strong" />
        <Heading variant="display-strong-l">Nuum</Heading>
        <Text variant="body-default-l" onBackground="neutral-weak" align="center">
          {hello.greeting}
        </Text>
        <Button href="https://docs.once-ui.com" variant="primary" label="Once UI docs" />
      </Column>
    </HydrateClient>
  );
}
