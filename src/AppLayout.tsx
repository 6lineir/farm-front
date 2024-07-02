import { Outlet } from "react-router-dom";

import AppHeader from "./components/AppHeader"
import AppFooter from "./components/AppFooter"

import WebApp from '@twa-dev/sdk'


//LINK - init SDK Telegram Mini App
WebApp.ready();
WebApp.expand();
WebApp.enableClosingConfirmation();
// console.log(WebApp);



const AppLayout = () => {
    // if (WebApp.initDataUnsafe) {
    //     const WA_user = WebApp.initDataUnsafe.user
    //     console.log(WA_user);
    //     const user_object = {
    //         user_id: WA_user.id,
    //         username: WA_user.username,
    //         is_premium: WA_user.is_premium,
    //         first_name: WA_user.first_name
    //     }
    //     console.log(user_object);


    //     //NOTE - End WebApp Telegram Func
    // }
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