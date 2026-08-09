import { Button, Column, Heading, Icon, RevealFx, Text, Row, Background } from "@once-ui-system/core";

import { api } from "~/trpc/server";
import Isohedron from "./_components/Isohedron";

import { getTranslations } from "next-intl/server";

export default async function Home() {
  const hello = await api.post.hello({ text: "from Once UI" });

  const t = await getTranslations("HomePage");

  return (
    <Column
    fillWidth
    paddingX="128"
    paddingY="48"
    >
      <Row
      fillWidth
      gap="48"
      direction="row"
      vertical="center"
      horizontal="between"
      m={{direction: "column", horizontal: "center"}}
      >
        <Column
          gap="24"
          fillWidth
          width={40}
          horizontal="center"
          vertical="center"
        >
          <RevealFx m={{horizontal: "center"}}>
            <Heading variant="display-strong-xl">MEDGRAPH</Heading>
          </RevealFx>

          <RevealFx delay={0.2} m={{horizontal: "center"}}>
            <Text variant="heading-default-l" onBackground="neutral-weak">{t("subtitle")}</Text>
          </RevealFx>

          <RevealFx delay={0.4} m={{horizontal: "center"}}>
            <Row gap="12" m={{horizontal: "center"}}>
              <Button href="/register" variant="primary" size="l" label="Register"/>
            </Row>
          </RevealFx>
        </Column>

        <Column fillWidth flex={1}>
          <RevealFx delay={0.6}>
            <Isohedron/>
          </RevealFx>
        </Column>

      </Row>


    </Column>
  );
}
