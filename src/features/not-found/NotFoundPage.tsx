import { useNavigate } from "react-router";
import { Button } from "src/common/components/Button";
import { Page } from "src/common/layouts/Page";
import { Panel } from "src/common/layouts/Panel";

export function NotFoundPage() {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1);
    };

    return (
        <Page className="flex items-center justify-center size-full">
            <Panel title="" className="text-center">
                <h1 className="text-6xl font-extrabold text-primary">404</h1>
                <p className="mt-1 text-xl text-gray-700">Página no encontrada</p>
                <p className="mt-4 text-gray-500">Lo sentimos, la página que buscas no existe.</p>
                <Button
                    className="mt-4 px-5 py-2 text-white font-medium"
                    label="Volver"
                    onClick={handleBack}
                />
            </Panel>
        </Page>
    );
}