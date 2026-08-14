"use client";

import { useState, type SetStateAction } from "react";

import { useTranslations } from "next-intl";
import { Input, Column, Button, Icon, Text } from "@once-ui-system/core";
import { api } from "~/trpc/react";

export function WaitlistForm() {
  const t = useTranslations("WaitlistForm");
  const t_error = useTranslations("Error");

  const [email, setEmail] = useState("");
  const join = api.waitlist.join.useMutation();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        join.mutate({ email });
      }}
      noValidate
    >
      <Column
        gap="l"
        vertical="center"
        fillWidth
        maxWidth={24}
        horizontal="center"
      >
        <Input
          id="waitlist-email"
          label={t("email")}
          type="email"
          value={email}
          onChange={(e: { target: { value: SetStateAction<string> } }) =>
            setEmail(e.target.value)
          }
          hasPrefix={
            <Icon
              marginLeft="4"
              onBackground="neutral-weak"
              name="email"
              size="xs"
            />
          }
          hasSuffix={
            <Button
              label={t("join")}
              variant="primary"
              size="s"
              type="submit"
              loading={join.isPending}
            />
          }
          error={!!join.error}
          errorMessage={(join.error ? t_error("invalid_email_format") : undefined)}
        />
        {join.isSuccess && (
          <Text onBackground="success-medium" align="center">
            {t("success")}
          </Text>
        )}
      </Column>
    </form>
  );
}
