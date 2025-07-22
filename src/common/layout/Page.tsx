import { cn } from "src/common/utils/cn";

interface Props {
    className?: string;
    children: React.ReactNode;
}

export function Page({ className, children }: Props) {
    return (
        <div className={cn(className)}>
            {children}
        </div>
    );
}