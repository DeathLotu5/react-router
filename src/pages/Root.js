import MainNavigation from "../components/MainNavigation";
import {Outlet} from "react-router";

function Root() {
    return (
        <>
            <MainNavigation />
            <main>
                <Outlet />
            </main>

        </>
    )
}

export default Root;