/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import WebApp from "@twa-dev/sdk";

import AboutPage from "./pages/About";
import FrendsPage from "./pages/Frends";
import HomePage from "./pages/Home";
import TaskPage from "./pages/Tasks";

import LoadingPage from "./pages/Loading";

import AppLayout from "./AppLayout";

import NoPage from "./pages/NoPage";

//LINK - init SDK Telegram Mini App
WebApp.ready();
WebApp.expand();
WebApp.enableClosingConfirmation();
console.log(WebApp);
const BASE_URL = "http://127.0.0.1:8000";

function App() {
  const [isError, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [UserData, setUserData] = useState();
  const [ScoreData, setScoreData] = useState();

  //!SECTION
  //!SECTION
  // if (WebApp == "unknown")
  // if (WebApp.platform == "unknown") {
  // }
  // console.log(WebApp.platform);

  //NOTE - If For Run in Telegram
  if (WebApp.initData !== "") {
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
    localStorage.setItem('user_data',JSON.stringify(reg_user_object))
  }
  //NOTE - End WebApp Telegram Func
  //!SECTION
  // const { data } = useQuery(["userDATA"], () => {
  //   const options = {
  //     method: "POST",
  //     headers: {
  //       accept: "application/json",
  //       "Content-Type": "application/json",
  //       "Access-Control-Allow-Origin": "*",
  //       Authorization: `Bearer ${"app123"}`
  //     },
  //     data: reg_user_object
  //   };
  //   return axios
  //     .post(BASE_URL + `/api/user/create`, reg_user_object, options)
  //     .then(data => data)
  //     .catch(error => error);
  // });

  
  
  //!SECTION
  useEffect(() => {
    // Simulate an API call
    
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
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
    .then(data => console.log(data))
    .catch(error => console.log(error));

  console.warn("++++++++++++++++");
  console.log(reg_user);
  console.warn("++++++++++++++++");
};
//!SECTION
    const RequestGetAPI =async ()=>{
      const LS_DATA = JSON.parse(localStorage.getItem('user_data'))
      
      const options = {
            method: "GET",
            headers: {
              accept: "application/json",
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
              Authorization: `Bearer ${LS_DATA.user_id}`
            },
            data: LS_DATA
          }
          console.log(options);
          
       const res =  await axios
        .get(BASE_URL + `/api/user/get?user_id=${LS_DATA.user_id}`, options)
        .then(data => data)
        .catch(error =>error)
        console.warn(res);
        // IF: //
        if(res.status == 200){
          
          console.warn("oooooOOOOoOooOOOoOk")
          console.log(res);
          
        }
        if(res.response.status == 401){
          console.warn("Inja Register Bshe");
          Sing_User()
  
          
        }
        // E IF //
    }
    RequestGetAPI()

  }, []);
  // console.log(isLoading);
  // if (WebApp.platform !== "unknown") {
    //   if (isError == true) {
    //     return <ErrorPage ecode="404" emsg="Not Found Page" />;
    return (
      <>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={isLoading ? <LoadingPage /> : <AppLayout />}
            >
              <Route index element={<HomePage />} />
              <Route path="airdrop" element={<AboutPage />} />
              <Route path="frend" element={<FrendsPage />} />
              <Route path="tasks" element={<TaskPage />} />

              <Route path="*" element={<NoPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
        </>
    );
    // }
  // } else return <NotDekstop />;
}

export default App;
