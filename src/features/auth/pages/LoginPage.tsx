import { Page } from "src/common/layout/Page";
import { LoginForm } from "src/features/auth/components/LoginForm";

import visitor_man_img from "src/assets/visitor-man.png"

export function LoginPage() {
    return (
        <Page className="flex flex-col items-center size-full">

            <img src={visitor_man_img} className="mt-5 size-52 object-contain" alt="" />
            <LoginForm className="w-[20rem] md:w-fit"></LoginForm>

        </Page>
    );
}