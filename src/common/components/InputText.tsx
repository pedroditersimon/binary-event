import { cn } from "src/common/utils/cn";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
    className?: string;
    leftIcon?: string;
    rightIcon?: string;
}

export function InputText({ className, leftIcon, rightIcon, ...props }: Props) {
    return (
        <div className="w-full flex items-center gap-3 rounded-2xl py-2 px-4 bg-secondary">
            {leftIcon && <img src={leftIcon} className="size-4"></img>}
            <input
                className={cn(
                    "w-full",
                    "text-primary-text outline-none",
                    "font-semibold placeholder:text-primary-text/60",
                    className
                )}
                {...props}
            />
            {rightIcon && <img src={rightIcon} className="size-4"></img>}
        </div>
    );
}