import { Button } from "src/common/components/Button";
import { InputText } from "src/common/components/InputText";
import { Panel } from "src/common/layout/Panel";

import user_icon from "src/assets/user.png";
import lock_icon from "src/assets/lock.png";
import eye_icon from "src/assets/eye.png";

interface Props {
    className?: string;
}

export function LoginForm({ className }: Props) {
    return (
        <Panel className={className} title="Iniciar Sesión" >

            <div className="flex flex-col gap-2 items-center">
                <InputText leftIcon={user_icon} placeholder="Usuario"></InputText>
                <InputText leftIcon={lock_icon} rightIcon={eye_icon} placeholder="Contraseña" type="password"></InputText>

                <Button className="mt-2" label="Ingresar" navigateTo="/scan" />
            </div>

        </Panel>
    );
}