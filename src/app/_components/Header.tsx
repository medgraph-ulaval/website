'use client'

import {Fade, Row, ToggleButton, Line} from "@once-ui-system/core"
import { usePathname } from "next/navigation";
import {routes} from "../../resources/once-ui.config"

export const Header = () => {
    const pathname = usePathname() ?? "";

    return(
        <>
            <Fade fillWidth position="fixed" height="80" zIndex={9} />
            <Row
            fitHeight
            position="sticky"
            as="header"
            zIndex={9}
            fillWidth
            padding="8"
            horizontal="center"
            data-border="rounded"
            >
                <Row
                background="page"
                border="neutral-alpha-weak"
                radius="m-4"
                shadow="l"
                padding="4"
                horizontal="center"
                zIndex={1}
                >
                    <Row
                    gap="4"
                    vertical="center"
                    textVariant="body-default-s"
                    >
                        {routes["/"] && (
                            <ToggleButton prefixIcon="home" href="/" selected={pathname === "/"}/>
                        )}
                        
                        <Line background="neutral-alpha-medium" vert maxHeight="24" />

                        {routes["/about"] && (
                            <ToggleButton prefixIcon="at" href="/about" selected={pathname === "about"} label="About"/>
                        )}

                        {routes["/register"] && (
                            <ToggleButton prefixIcon="cursor" href="/register" selected={pathname === "register"} label="Register"/>
                        )}
                    </Row>
                </Row>
            </Row>
        </>)
    ;
}