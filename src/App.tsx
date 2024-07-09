/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import WebApp from "@twa-dev/sdk";

import AboutPage from "./pages/About";
import FrendsPage from "./pages/Frends";
import HomePage from "./pages/Home";
import TaskPage from "./pages/Tasks";
import SingPage from "./pages/SingPage";


import LoadingPage from "./pages/Loading";
import ErrorPage from "./pages/ErrorPage";

import AppLayout from "./AppLayout";

import NoPage from "./pages/NoPage";
import NotDekstop from "./pages/NotDekstop"


//LINK - init SDK Telegram Mini App
WebApp.ready();
WebApp.expand();
WebApp.enableClosingConfirmation();
console.log(WebApp);
const BASE_URL = "http://127.0.0.1:8000";

function App() {
  const [isLogin, setLogin] = useState(false);
  const [isError, setError] = useState(false);
  const [ErrorCODE, setErrorCODE] = useState("404");
  const [ErrorMSG, setErrorMSG] = useState("Not Found");
  const [isLoading, setIsLoading] = useState(true);
  const [UserData, setUserData] = useState();
  const [ScoreData, setScoreData] = useState();

  //!SECTION
  //!SECTION

  //NOTE - If For Run in Telegram
  if (WebApp.initData !== "") {
    // console.log("==PARAMS=:", WebApp.initDataUnsafe.start_param);
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
    localStorage.setItem('user_data', JSON.stringify(reg_user_object))
    // console.log(reg_user_object);
  }
  //NOTE - End WebApp Telegram Func
  //!SECTION
  const LS_DATA = JSON.parse(localStorage.getItem('user_data'))
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      Authorization: `Bearer ${LS_DATA.user_id}`
    }
  }

  const { data, status, error, isRefetching } = useQuery({
    queryKey: ["data_user"],

    queryFn: () => {
      return axios.get(BASE_URL + `/api/user/get?user_id=${LS_DATA.user_id}`, options);
    },
  });
  console.warn("API CALL", data);
  console.warn("API Status:", status);
  console.error("API Error:", error);
  //!SECTION



  useEffect(() => {
    //!SECTION
    const Sing_User = async () => {
      const LS_DATA = JSON.parse(localStorage.getItem('user_data'))
      const options = {
        method: "POST",
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          Authorization: `Bearer ${"app123"}`
        },
        data: LS_DATA
      };
      const reg_user = await axios
        .post(BASE_URL + `/api/user/create`, LS_DATA, options)
        .then(data => data)
        .catch(error => error)
      // console.warn("++++++++++++++++");
      // console.log(reg_user);
      // console.warn("++++++++++++++++");
    };
    //!SECTION




    // Simulate an API call
    if (status == 'success') {
      setLogin(true)
      setError(false)
    }
    if (status == 'pending') {
      setLogin(false)
      setError(false)
      setIsLoading(true);
    }
    if (status == 'error') {
      setErrorCODE("505")
      setErrorMSG("Server Is Offline")
      setLogin(false)
      setError(true)
    }
    if (error !== null) {
      if (error.response.status == 401) {
        //* //  Register Run // / / // / / / / / / / / / / /
        setLogin(true)
        Sing_User()
        window.location.reload();
      }
    }

    isRefetching ? setIsLoading(false) : setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);




  }, [error, isRefetching, status]);
  // console.log(isLoading);
  //   if (isError == true) {
  //     return <ErrorPage ecode="404" emsg="Not Found Page" />;

  if (isLoading == true) {
    return <LoadingPage />
  } else {
    if (WebApp.platform !== "unknown") {
      if (isError == false) {
        if (isLogin == true) {
          return (
            <>
              <BrowserRouter>
                <Routes>
                  <Route
                    path="/"
                    element={isLoading ? <LoadingPage /> : <AppLayout />}
                  >
                    <Route index element={<HomePage username={WebApp.initDataUnsafe.user.username} />} />
                    <Route path="airdrop" element={<AboutPage />} />
                    <Route path="frend" element={<FrendsPage />} />
                    <Route path="tasks" element={<TaskPage />} />

                    <Route path="*" element={<NoPage />} />
                  </Route>
                </Routes>
              </BrowserRouter>
            </>
          );

        } else return <SingPage />
      } else return <ErrorPage ecode={ErrorCODE} emsg={ErrorMSG} />
    } else return <NotDekstop />;

    //////////////////////main.tsx// }
  }
}

export default App;
