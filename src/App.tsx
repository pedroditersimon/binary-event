import { Route, BrowserRouter, Routes, Navigate } from "react-router";
import { LoginPage } from "src/features/auth/pages/LoginPage";
import { QRScanPreparePage } from "src/features/qr-scan/pages/QRScanPreparePage";
import { QRScanReaderPage } from "src/features/qr-scan/pages/QRScanReaderPage";
import { QRScanSuccessPage } from "src/features/qr-scan/pages/QRScanSuccessPage";

export function App() {
    return (
        <BrowserRouter>
            <Routes>

                <Route path="/" element={<Navigate to="login" />}></Route>

                <Route path="login" Component={LoginPage}></Route>

                <Route path="scan" >
                    <Route path="" Component={QRScanPreparePage}></Route>
                    <Route path="success" Component={QRScanSuccessPage}></Route>
                    <Route path="on" Component={QRScanReaderPage}></Route>
                </Route>

            </Routes>
        </BrowserRouter>
    );
}