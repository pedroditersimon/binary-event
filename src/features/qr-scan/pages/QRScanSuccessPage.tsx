import { Button } from "src/common/components/Button";
import { Panel } from "src/common/layout/Panel";
import { Page } from "src/common/layout/Page";

// import qr_img from "./assets/qr-hand.png";
// import chevron_right from "./assets/chevron-right.png";
import check_icon from "src/assets/check.png";

export function QRScanSuccessPage() {
    return (
        <Page className="flex items-center justify-center size-full">
            <Panel className="w-[20rem] md:w-fit" title="¡Escaneo exitoso!" >
                <div className="flex flex-col gap-4 items-center">

                    <img src={check_icon} className="size-16 object-contain opacity-80" />
                    <p className="text-center text-sm w-[80%]">
                        El visitante ha sido identificado correctamente.
                    </p>
                    <Button label="Aceptar" navigateTo="/scan" />
                </div>
            </Panel>
        </Page>
    );
}