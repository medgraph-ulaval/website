import {
  DropdownWrapper,
  Row,
  Button,
  Column,
  Option,
} from "@once-ui-system/core";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import { setLocale } from "~/i18n/locale";

export const LanguageDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const locale = useLocale();
  const router = useRouter();

  const locales = [
    { label: "en", value: "en" },
    { label: "fr", value: "fr" },
  ];

  return (
    <Row vertical="center">
      <DropdownWrapper
        isOpen={isOpen}
        onOpenChange={setIsOpen}
        trigger={
          <Button
            variant="tertiary"
            size="s"
            suffixIcon="chevronDown"
            label={locales.find((l) => l.value === locale)?.label}
            onClick={() => setIsOpen(!isOpen)}
          />
        }
        dropdown={
          <Column>
            {locales.map((option) => (
              <Option
                key={option.value}
                label={option.label}
                value={option.value}
                selected={option.value == locale}
                onClick={async (value) => {
                  await setLocale(value);
                  setIsOpen(false);
                  router.refresh();
                }}
              />
            ))}
          </Column>
        }
      />
    </Row>
  );
};
