import Titlebar from "@/components/layout/titlebar";
import { useRouteError } from "react-router-dom";

type Error = {
    statusText: string
    message: string
}

export default function ErrorPage() {
    const error = useRouteError() as Error
    console.error(error);

    return <>
    <Titlebar/>
        <div id="error-page">
            <h1>Oops!</h1>
            <p>Erro na página</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
            
        </div>
    </>
}