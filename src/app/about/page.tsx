import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import {
  Column,
  Heading,
  Text,
  Row,
  RevealFx,
  Media,
  Grid,
} from "@once-ui-system/core";
import { getTranslations } from "next-intl/server";
export default async function About() {
  const t = await getTranslations("AboutPage");
  return (
    <Column fillWidth paddingX="xl" paddingY="48" gap="128" horizontal="center">
      <RevealFx horizontal="center">
        <Column gap="12" horizontal="center" align="center">
          <Heading variant="display-strong-xl" as="h1">{t("title")}</Heading>
        </Column>
      </RevealFx>

      <RevealFx fillWidth horizontal="center">
        <Column gap="l">
          <Heading variant="display-strong-m" as="h2" align="center">
                {t("mission")}
          </Heading>

          <Row s={{direction: "column"}} gap="xl" vertical="center">
            <Column
              aspectRatio="1 / 1"
              radius="l"
              border="neutral-alpha-medium"
              overflow="hidden"
            >
              <Grid
                columns={5}
                m={{ columns: 4 }}
                s={{ columns: 3 }}
                gap="8"
                style={{ width: "120%", marginLeft: "-10%", height:"120%", marginTop:"-10%"}}
              >
                {Array.from({ length: 25 }).map((_, i) => (
                  <Column key={i} aspectRatio="1 / 1" center>
                    <DotLottieReact
                      src="/animations/logo_formation.lottie"
                      mode="bounce"
                      loop
                      autoplay
                      style={{ width: "75px", height: "75px" }}
                      renderConfig={{ autoResize: true, devicePixelRatio: 1 }}
                    />
                  </Column>
                ))}
              </Grid>
            </Column>
          </Row>
        </Column>
      </RevealFx>

      <RevealFx fillWidth horizontal="center">
        <Column gap="l">
          <Heading variant="display-strong-m" as="h2" align="center">
                {t("subtitle")}
          </Heading>
          
          <Row fillWidth gap="24" m={{ direction: "column" }} horizontal="center" vertical="center" align="center">
            <Column
              fillWidth
              maxWidth={24}
              padding="l"
              gap="16"
              radius="l"
              border="neutral-alpha-medium"
            >
              <Media
                src="/founders/jordan_mathieu.png"
                alt={"Jordan Mathieu"}
                aspectRatio="1 / 1"
                radius="m"
                border="neutral-alpha-medium"
              />
              <Heading variant="heading-strong-l">Jordan Mathieu</Heading>
              <Text onBackground="neutral-weak">{t("jordan_mathieu_subtitle")}</Text>
            </Column>

            <Column
              fillWidth
              maxWidth={24}
              padding="l"
              gap="16"
              radius="l"
              border="neutral-alpha-medium"
            >
              <Media
                src="/founders/louis-etienne_messier.png"
                alt={"Louis-Etienne Messier"}
                aspectRatio="1 / 1"
                radius="m"
                border="neutral-alpha-medium"
              />
              <Heading variant="heading-strong-l">Louis-Etienne Messier</Heading>
              <Text onBackground="neutral-weak">{t("louis-etienne_messier_subtitle")}</Text>
            </Column>
          </Row>
        </Column>
      </RevealFx>
    </Column>
  );
}
