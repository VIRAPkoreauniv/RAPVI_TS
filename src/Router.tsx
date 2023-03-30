import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BasicInfo from "./home/basicInfo";
import Docs from "./home/docs";
import Start from "./home/start";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BasicInfo />} />
        <Route path="/docs" element={<Docs />} />
        <Route path="/projectinfo" element={<Start />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
