import { Route, BrowserRouter, Routes, Navigate } from "react-router";
import { Toaster } from 'sonner';
import { LoginPage } from "src/features/auth/login/LoginPage";
import { HomePage } from "src/features/home/HomePage";
import { NotFoundPage } from "src/features/not-found/NotFoundPage";
import { QRScanPreparePage } from "src/features/qr-scan/pages/QRScanPreparePage";
import { QRScanReaderPage } from "src/features/qr-scan/pages/QRScanReaderPage";
import { QRScanSuccessPage } from "src/features/qr-scan/pages/QRScanSuccessPage";


export function App() {
    return (
        <>
            <Toaster position="top-right" duration={8000} />
            <BrowserRouter>
                <Routes >

                    <Route path="*" Component={NotFoundPage} />

                    <Route path="/" element={<Navigate to="login" />} />

                    <Route path="home" Component={HomePage} />

                    <Route path="login" Component={LoginPage} />

                    <Route path="scan" >
                        <Route path="" Component={QRScanPreparePage} />
                        <Route path="success" Component={QRScanSuccessPage} />
                        <Route path="on" Component={QRScanReaderPage} />
                    </Route>

                </Routes>
            </BrowserRouter>
        </>

    );
}