import { toast } from "sonner";
import { Page } from "src/common/layouts/Page";
import { LoginForm, type LoginFormFields } from "src/features/auth/login/components/LoginForm";
import authService from "src/common/services/authService";

import visitor_man_img from "src/assets/visitor-man.png"
import { useNavigate } from "react-router";

export function LoginPage() {
    const navigate = useNavigate();

    const handleSubmit = (fields: LoginFormFields) => {
        console.log("Login submitted with fields:", fields);
        authService.login(fields.email, fields.password)
            .then(() => {
                toast.success("Inicio de sesión exitoso.");
                navigate("/home");
            })
            .catch(() => {
                toast.error("Error al iniciar sesión. Verifica las credenciales.");
            });
    };

    return (
        <Page className="flex flex-col items-center size-full">

            <img src={visitor_man_img} className="mt-5 size-52 object-contain" alt="" />
            <LoginForm onSubmit={handleSubmit} />

        </Page>
    );
}