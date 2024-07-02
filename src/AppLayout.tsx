import { Outlet } from "react-router-dom";

import AppHeader from "./components/AppHeader"
import AppFooter from "./components/AppFooter"

import WebApp from '@twa-dev/sdk'

WebApp.ready();
WebApp.expand();
WebApp.enableClosingConfirmation();
console.log(WebApp);



const AppLayout = () => {
    return (
        <>
            <div className="dark mainCl">

                <AppHeader />


                {/* <Link to="/">Home</Link> */}

                <Outlet />

                <AppFooter />


            </div>
        </>
    )
};

export default AppLayout;