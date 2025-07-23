import { Button } from "src/common/components/Button";
import { InputText } from "src/common/components/InputText";
import { Panel } from "src/common/layouts/Panel";

import user_icon from "src/assets/user.png";
import lock_icon from "src/assets/lock.png";
import eye_icon from "src/assets/eye.png";
import { useState } from "react";

export interface LoginFormFields {
    email: string;
    password: string;
}

interface Props {
    className?: string;
    onSubmit?: (fields: LoginFormFields) => void;
}

export function LoginForm({ className, onSubmit }: Props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = () => {
        if (!onSubmit) return;

        onSubmit({ email: email, password });
    };

    return (
        <Panel className={className} title="Iniciar Sesión" >

            <div className="flex flex-col gap-2 items-center">
                <InputText
                    placeholder="Email"
                    type="email"
                    leftIcon={user_icon}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <InputText
                    placeholder="Contraseña"
                    type="password"
                    leftIcon={lock_icon}
                    rightIcon={eye_icon}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <Button
                    className="mt-2"
                    label="Ingresar"
                    onClick={handleSubmit}
                />
            </div>

        </Panel>
    );
}