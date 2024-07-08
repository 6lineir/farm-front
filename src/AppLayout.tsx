/* eslint-disable @typescript-eslint/no-unused-vars */
import { Outlet } from "react-router-dom";

// import AppHeader from "./components/AppHeader"
import AppFooter from "./components/AppFooter"
import WebApp from "@twa-dev/sdk";





const AppLayout = () => {
    return (
        <>
            <div className="dark mainCl">
                {/* <AppHeader /> */}
                <div>
                    <Outlet />
                </div>
                <AppFooter />
            </div>
        </>
    )
};

export default AppLayout;