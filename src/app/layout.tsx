import "@once-ui-system/core/css/styles.css";
import "@once-ui-system/core/css/tokens.css";
import "~/styles/globals.css";

import classNames from "classnames";
import { type Metadata } from "next";
import { Column, ThemeInit } from "@once-ui-system/core";

import { Providers } from "~/components/Providers";
import { dataStyle, fonts, style } from "~/resources/once-ui.config";
import { Header } from "./_components/Header";
import { Footer } from "./_components/Footer";

import {NextIntlClientProvider} from "next-intl";

export const metadata: Metadata = {
  title: "Website",
  description: "Website",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <Column
      as="html"
      lang="en"
      suppressHydrationWarning
      className={classNames(
        fonts.heading.variable,
        fonts.body.variable,
        fonts.label.variable,
        fonts.code.variable,
      )}
    >
      <head>
        <ThemeInit
          config={{
            theme: style.theme,
            brand: style.brand,
            accent: style.accent,
            neutral: style.neutral,
            solid: style.solid,
            "solid-style": style.solidStyle,
            border: style.border,
            surface: style.surface,
            transition: style.transition,
            scaling: style.scaling,
            "viz-style": dataStyle.variant,
          }}
        />
      </head>
      <Providers>
        <NextIntlClientProvider>
          <Column
            as="body"
            background="page"
            fillWidth
            margin="0"
            padding="0"
            style={{ minHeight: "100vh" }}
          >
            <Header/>
            {children}
            <Footer/>
          </Column>
        </NextIntlClientProvider>
      </Providers>
    </Column>
  );
}
