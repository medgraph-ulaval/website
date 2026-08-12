import {
  Column,
  Heading,
  Text,
  Row,
  RevealFx,
  Media,
} from "@once-ui-system/core";
import { getTranslations } from "next-intl/server";
export default async function About() {
  const t = await getTranslations("AboutPage");
  return (
    <Column fillWidth paddingX="xl" paddingY="48" gap="48" horizontal="center">
      <RevealFx horizontal="center">
        <Column gap="12" horizontal="center" align="center">
          <Heading variant="display-strong-xl">{t("title")}</Heading>
          <Text variant="heading-default-l" onBackground="neutral-weak">
            {t("subtitle")}
          </Text>
        </Column>
      </RevealFx>

      <RevealFx>
        <Row fillWidth gap="24" m={{ direction: "column" }} horizontal="center">
          <Column
            fillWidth
            maxWidth={24}
            padding="l"
            gap="16"
            radius="l"
            border="neutral-alpha-medium"
            background="neutral-alpha-weak"
          >
            <Media
              src="/founders/jordan_mathieu.png" // placeholder
              alt={"Jordan Mathieu"}
              aspectRatio="1 / 1"
              radius="m"
              border="neutral-alpha-medium"
            />
            <Heading variant="heading-strong-l">Jordan Mathieu</Heading>
            <Text onBackground="neutral-weak">subtitle</Text>
          </Column>

          <Column
            fillWidth
            maxWidth={24}
            padding="l"
            gap="16"
            radius="l"
            border="neutral-alpha-medium"
            background="neutral-alpha-weak"
          >
            <Media
              src="/founders/louis-etienne_messier.png" // placeholder
              alt={"Louis-Etienne Messier"}
              aspectRatio="1 / 1"
              radius="m"
              border="neutral-alpha-medium"
            />
            <Heading variant="heading-strong-l">Louis-Etienne Messier</Heading>
            <Text onBackground="neutral-weak">subtitle</Text>
          </Column>
        </Row>
      </RevealFx>
    </Column>
  );
}
