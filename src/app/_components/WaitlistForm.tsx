"use client";

import {useState, type SetStateAction} from "react"

import { useTranslations } from "next-intl";
import { Input, Column, Button, Icon } from "@once-ui-system/core";

export function WaitlistForm(){
    const t = useTranslations("WaitlistForm")

    const [email, setEmail] = useState("")

    return (
        <Column gap="16" vertical="center" fillWidth maxWidth={24} horizontal="center">
            <form
                onSubmit={(e)=>{
                    e.preventDefault();
                }}
            >
                <Input
                    id="waitlist-email"
                    label={t("email")}
                    type="email"
                    value={email}
                    onChange={(e: { target: { value: SetStateAction<string>; }; }) => setEmail(e.target.value)}
                    hasPrefix={
                        <Icon marginLeft="4" onBackground="neutral-weak" name="email" size="xs" />
                    }
                    hasSuffix={
                        <Button
                            label={t("join")}
                            variant="primary"
                            size="s"
                            type="submit"
                        />  
                    }
                />
            </form>
        </Column>
    );
}