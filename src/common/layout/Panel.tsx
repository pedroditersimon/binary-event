import type React from "react";
import { cn } from "src/common/utils/cn";

interface Props {
    className?: string;
    title: string;
    children: React.ReactNode;
}

export function Panel({ className, title, children }: Props) {
    return (
        <div className={cn("bg-white rounded-3xl p-4 w-[20rem]", className)}        >
            <h1 className="text-primary-text text-xl font-semibold text-center mb-3">{title}</h1>
            <div className="text-primary-text ">
                {children}
            </div>
        </div>
    );
}
