// import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import FrendsPage from "./pages/Frends";
import TaskPage from "./pages/Tasks";


import AppLayout from "./AppLayout"

import NoPage from "./pages/NoPage"

function App() {
  // const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
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
