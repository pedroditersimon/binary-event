import type React from "react";

interface Props {
    title: string;
    children: React.ReactNode;
}

export function Panel({ title, children }: Props) {
    return (
        <div className="bg-white rounded-3xl p-4 w-64">
            <h1 className="text-primary-text text-xl font-semibold text-center mb-2">{title}</h1>
            <div className="text-primary-text ">
                {children}
            </div>
        </div>
    );
}
