import { Column, Heading, RevealFx, Row } from "@once-ui-system/core";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

import { useTranslations } from "next-intl";
import { WaitlistForm } from "../_components/WaitlistForm";

export default function Register() {
  const t = useTranslations("RegisterPage");

  return (
    <Column
      fillWidth
      paddingX="128"
      paddingY="128"
      s={{ style: { paddingLeft: "32", paddingRight: "32" } }}
    >
      <RevealFx horizontal="center" align="center">
        <Heading variant="display-strong-xl">{t("join")}</Heading>
      </RevealFx>

      <RevealFx horizontal="center">
        <Row m={{ direction: "column" }} vertical="center" padding="xl">
          <Column padding="64">
            <DotLottieReact
              src="/animations/logo_rotate.lottie"
              loop
              autoplay
              style={{ width: 150, height: 150 }}
              renderConfig={{ autoResize: true, devicePixelRatio: 2 }}
            />
          </Column>

          <Column>
            <WaitlistForm />
          </Column>
        </Row>
      </RevealFx>
    </Column>
  );
}
