import { useContext, useState } from "react";
import { BrokerContext, BrokerProvider } from "./context/BrokerContext";
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import "./App.css";

const MainLayout = () => {
  
  return (
    <div className="app-container">
      <Navbar/>
      <Content/>
    </div>
  )
}

export default function App() {
  return (
    <BrokerProvider>
      <MainLayout />
    </BrokerProvider>
  );
}
