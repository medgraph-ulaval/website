
import { Column, Heading, RevealFx, Row} from "@once-ui-system/core";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export default function Register(){
    return (
        <Column
            fillWidth
            paddingX="128"
            paddingY="48"
            s={{style:{paddingLeft: "32", paddingRight: "32"}}}>
                <RevealFx horizontal="center" align="center">
                    <Heading variant="display-strong-xl">Join the wait list now!</Heading>
                </RevealFx>

                <RevealFx horizontal="center">
                    <Row>
                        <Column padding="64">
                            <DotLottieReact
                                src="/animations/logo_rotate.lottie"
                                loop
                                autoplay
                                style={{width: 150, height:150}}
                                renderConfig={{ autoResize: true, devicePixelRatio: 2 }}

                            />
                        </Column>

                        <Column>
                        
                        </Column>
                    </Row>
                </RevealFx>
        </Column>
    );
}