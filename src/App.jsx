import { useContext, useState } from "react";
import { BrokerContext, BrokerProvider } from "./context/BrokerContext";
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import "./App.css";

const MainLayout = () => {
  return (
    <main className="app-container">
      <Navbar />
      <section className="main-container">
        <Content />
      </section>
    </main>
  );
};

export default function App() {
  return (
    <BrokerProvider>
      <MainLayout />
    </BrokerProvider>
  );
}
