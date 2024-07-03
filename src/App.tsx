import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import FrendsPage from "./pages/Frends";
import TaskPage from "./pages/Tasks";


import LoadingPage from "./pages/Loading";

import AppLayout from "./AppLayout"

import NoPage from "./pages/NoPage"

function App() {
  const [isLoading, setIsLoading] = useState(true);


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
        <Route path="/" element={isLoading? <LoadingPage /> : <AppLayout />}>
          <Route index element={<HomePage />} />
          <Route path="airdrop" element={<AboutPage />} />
          <Route path="frend" element={<FrendsPage />} />
          <Route path="tasks" element={<TaskPage />} />

          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
