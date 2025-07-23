import { Button } from "src/common/components/Button";
import { Panel } from "src/common/layouts/Panel";
import { Page } from "src/common/layouts/Page";

import qr_img from "src/assets/qr-hand.png";
import chevron_right from "src/assets/chevron-right.png";

export function QRScanPreparePage() {
    return (
        <Page className="flex items-center justify-center size-full">
            <Panel title="Código QR" >
                <div className="flex flex-col gap-4 items-center">
                    <img src={qr_img} className="size-24 object-contain opacity-80" />
                    <p className="text-center text-sm w-[80%]">
                        Apuntá la cámara al QR del visitante hasta que esté dentro del marco.
                    </p>
                    <Button label="Escánear" icon={chevron_right} navigateTo="/scan/on" />
                </div>
            </Panel>
        </Page>
    );
}