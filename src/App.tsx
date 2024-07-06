/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import WebApp from "@twa-dev/sdk";

import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import FrendsPage from "./pages/Frends";
import TaskPage from "./pages/Tasks";

import LoadingPage from "./pages/Loading";

import AppLayout from "./AppLayout";

import NoPage from "./pages/NoPage";
import NotDekstop from "./pages/NotDekstop";

//LINK - init SDK Telegram Mini App
WebApp.ready();
WebApp.expand();
WebApp.enableClosingConfirmation();
console.log(WebApp);

function App() {
  const [isLoading, setIsLoading] = useState(true);

  //NOTE - If For Run in Telegram
  // if (WebApp)
  console.log(WebApp.platform);

  if (WebApp.initData != "") {
    console.log("==PARAMS=:", WebApp.initDataUnsafe.start_param);

    const WA_user = WebApp.initDataUnsafe.user;
    // console.log(WA_user);

    const reg_user_object = {
      user_id: WA_user.id,
      username: WA_user.username,
      first_name: WA_user.first_name,
      last_name: WA_user.last_name,
      invited_by: WebApp.initDataUnsafe.start_param | 0,
      is_premium: WA_user.is_premium
    };
    console.log(reg_user_object);
  }
  //NOTE - End WebApp Telegram Func

  useEffect(() => {
    // Simulate an API call
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  // console.log(isLoading);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={isLoading ? <LoadingPage /> : <AppLayout />}>
          <Route index element={<HomePage />} />
          <Route path="airdrop" element={<AboutPage />} />
          <Route path="frend" element={<FrendsPage />} />
          <Route path="tasks" element={<TaskPage />} />

          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
