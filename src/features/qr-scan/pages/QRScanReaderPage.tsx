import { useNavigate } from "react-router";
import { Page } from "src/common/layout/Page";
import { QrReader } from "src/features/qr-scan/components/QRReader";

export function QRScanReaderPage() {
    const navigate = useNavigate();

    const onScan = (data: string) => {
        alert(data);
        navigate("/scan/success");
    }

    return (
        <Page>
            <QrReader onScan={onScan}></QrReader>
        </Page>
    );
}