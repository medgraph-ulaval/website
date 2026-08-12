import { Button, Column, Heading, Icon, RevealFx, Text, Row, Background,Fade, AutoScroll, Media, Timeline, LetterFx } from "@once-ui-system/core";

import { api } from "~/trpc/server";
import Isohedron from "./_components/Isohedron";

import { getTranslations } from "next-intl/server";

export default async function Home() {
  const hello = await api.post.hello({ text: "from Once UI" });

  const t = await getTranslations("HomePage");

  return (
    <Column
    fillWidth
    paddingX="xl"
    paddingY="48"
    gap="xl"
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
          width={120}
          paddingX="xl"
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

        <Column fillWidth>
          <RevealFx delay={0.6} fillWidth>
            <Isohedron/>
          </RevealFx>
        </Column>

      </Row>

      <Row fillWidth position="relative" overflow="hidden">
        <Fade zIndex="1" to="right" fillHeight width="64" position="absolute" left="0" top="0"/>
        <AutoScroll paddingY="40">
          <Text paddingX="24">FHIR</Text>
          <Text paddingX="24">OMOP</Text>
          <Text paddingX="24">SNOMED</Text>
          <Text paddingX="24">PDF</Text>
          <Text paddingX="24">LOINC</Text>
          <Text paddingX="24">PNG</Text>
          <Text paddingX="24">DICOM</Text>
          <Text paddingX="24">XML</Text>
          <Text paddingX="24">NII</Text>
          <Text paddingX="24">HDR</Text>
        </AutoScroll>
        <Fade zIndex="1" to="left" fillHeight width="64" position="absolute" right="0" top="0" />
      </Row>

      <Row radius="l" border="neutral-alpha-medium" fillWidth padding="m" m={{direction: "column"}} gap="24" vertical="center" horizontal="center" align="center">
        <Media
          src="/logo_medium.svg"
          alt="Medgraph"
          maxWidth={15}
          objectFit="contain"
          unoptimized
          fillWidth
          radius="l"
          border="neutral-alpha-medium"
          padding="l"
        />
        <Column gap="8" fillWidth>
          <Heading variant="heading-strong-l">{t("medical_brain")}</Heading>
          <Text variant="body-default-m" onBackground="neutral-weak">{t("medical_brain_subtitle")}</Text>
        </Column>
      </Row>

      <Column fillWidth gap="24">
        <Heading variant="heading-strong-l">How MEDGRAPH works</Heading>
        <Timeline
          fillWidth
          size="s"
          items={[
            {
              marker: 1,
              label: "Ingest",
              description: "Connect your medical data : FHIR, DICOM, PDFs, and more.",
              state: "default",
              children: (
                <Row vertical="center" gap="48" margin="l">
                  <Media
                    src="/logo_medium.svg"
                    alt="Medgraph"
                    width={15}
                    height={15}
                    objectFit="contain"
                    unoptimized
                    fillWidth
                    radius="l"
                    border="neutral-alpha-medium"
                    padding="l"
                  />
                  <LetterFx speed="slow" trigger="instant" charset={["+"]}>
                    Lorem Ipsum
                  </LetterFx>
                </Row>
              ),
            },
            {
              marker: 2,
              label: "Unify",
              description: "Normalize into one patient timeline.",
              state: "default",
              children: (
                <Row vertical="center" gap="48" margin="l">
                  <Media
                    src="/logo_medium.svg"
                    alt="Medgraph"
                    width={15}
                    height={15}
                    objectFit="contain"
                    unoptimized
                    fillWidth
                    radius="l"
                    border="neutral-alpha-medium"
                    padding="l"
                  />
                  <LetterFx speed="slow"charset={["+"]}>
                    Lorem Ipsum
                  </LetterFx>
                </Row>
              ),
            },
            {
              marker: 3,
              label: "Act",
              description: "Query and reason over the medical brain.",
              state: "default",
              children: (
                <Row vertical="center" gap="48" margin="l">
                  <Media
                    src="/logo_medium.svg"
                    alt="Medgraph"
                    width={15}
                    height={15}
                    objectFit="contain"
                    unoptimized
                    fillWidth
                    radius="l"
                    border="neutral-alpha-medium"
                    padding="l"
                  />
                  <LetterFx speed="slow" charset={["+"]}>
                    Lorem Ipsum
                  </LetterFx>
                </Row>
              ),
            },
            {

            }
          ]}
        />
      </Column>

    </Column>
  );
}
