import {
    Column,
    Line,
    Row,
    Text,
    SmartLink,
    Button
} from "@once-ui-system/core"

import {useTranslations} from "next-intl"

export const Footer = () => {
    const t = useTranslations("Footer");

    return (
        <Column>
            <Line/>

            <Column padding="128" paddingBottom="64" gap="64">

                <Row fillWidth gap="128">
                    <Column gap="32">
                        <Text variant="body-strong-m">{t("company")}</Text>
                        <SmartLink href="/about">{t("about")}</SmartLink>
                        <SmartLink href="/">{t("blog")}</SmartLink>
                        <SmartLink href="/">{t("contact")}</SmartLink>
                    </Column>

                    <Column gap="32">
                        <Text variant="body-strong-m">{t("socials")}</Text>
                        <Button prefixIcon="github" label="Github" variant="secondary" size="s" weight="default" href="https://github.com/medgraph-ulaval"/>
                        <Button prefixIcon="linkedin" label="LinkedIn" variant="secondary" size="s" weight="default" href="/"/>
                        <Button prefixIcon="youtube" label="YouTube" variant="secondary" size="s" weight="default" href="/"/>
                    </Column>
                </Row>

                <Row>
                    <Text>@ {new Date().getFullYear()} MedGraph</Text>
                </Row>
            </Column>
        </Column>
    );
}