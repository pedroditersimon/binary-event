import QrScanner from "qr-scanner";
import { useEffect, useRef } from 'react';
import { cn } from "src/common/utils/cn";

interface Props {
    className?: string;
    onScan: (data: string) => void;
}

export function QrReader({ className, onScan }: Props) {
    const videoEl = useRef<HTMLVideoElement>(null);
    const scanner = useRef<QrScanner | null>(null);
    const qrBoxEl = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!videoEl.current) return;

        scanner.current = new QrScanner(
            videoEl.current,
            result => onScan(result.data),
            {
                preferredCamera: "environment",
                highlightCodeOutline: true,
                highlightScanRegion: true,
                maxScansPerSecond: 5,
                overlay: qrBoxEl?.current || undefined,
            }
        );

        scanner.current.start()

        // clean up
        return () => {
            scanner?.current?.stop();
            scanner?.current?.destroy();
            scanner.current = null;
        }
    });

    return (
        <div className={cn("flex items-center p-5", className)}>
            <video
                className="w-full max-h-[90vh] rounded-4xl"
                ref={videoEl}
            />
            <div
                ref={qrBoxEl}
                className="bg-amber-400 opacity-15 pointer-events-none"
            />
        </div>
    );
}