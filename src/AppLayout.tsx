/* eslint-disable @typescript-eslint/no-unused-vars */
import { Outlet } from "react-router-dom";

// import AppHeader from "./components/AppHeader"
import AppFooter from "./components/AppFooter"


import NotDekstop from "./pages/NotDekstop";

import WebApp from '@twa-dev/sdk'


//LINK - init SDK Telegram Mini App
WebApp.ready();
WebApp.expand();
WebApp.enableClosingConfirmation();
console.log(WebApp);

console.log(WebApp.initDataUnsafe);

const AppLayout = () => {
    // if (WebApp)
    console.log(WebApp.platform);
    console.log(WebApp.platform);
    console.log(WebApp.platform);

    //NOTE - If For Run in Telegram 
    if (WebApp.initData != "") {
        const WA_user = WebApp.initDataUnsafe.user
        console.log(WA_user);
        const user_object = {
            user_id: WA_user.id,
            username: WA_user.username,
            is_premium: WA_user.is_premium,
            first_name: WA_user.first_name,
            frends: [1, 2],
            coin: 100,

        }
        console.log(user_object);
        //NOTE - End WebApp Telegram Func
    }
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