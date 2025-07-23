import { Button } from "src/common/components/Button";
import { Page } from "src/common/layouts/Page";
import { Panel } from "src/common/layouts/Panel";

export function HomePage() {
    return (
        <Page className="flex items-center justify-center size-full">
            <Panel title="Bienvenido!">

                <div className="flex flex-col items-center gap-2">
                    <p className="text-center">Esta es la página de inicio de tu aplicación.</p>

                    <Button navigateTo="/admin/customers/new" label="Crear visitante" />
                    <Button navigateTo="/scan" label="Escanear QR" />
                    <Button navigateTo="/admin/users/new" label="Crear usuario" />
                </div>

            </Panel>
        </Page>
    );
}