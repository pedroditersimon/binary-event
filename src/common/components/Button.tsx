import { cn } from "src/common/utils/cn";

interface Props {
    className?: string;
    label: string;
    icon?: string;
}

export function Button({ className, label, icon }: Props) {

    return (
        <button
            className={cn(
                "w-full bg-primary hover:bg-primary-hover hover:cursor-pointer text-white font-semibold p-2 rounded-2xl",
                className
            )}
        >
            <div className="flex flex-row items-center">
                <span className="w-full">{label}</span>
                {icon && <img src={icon} className="size-4 object-contain opacity-80" />}
            </div>
        </button>
    );
}