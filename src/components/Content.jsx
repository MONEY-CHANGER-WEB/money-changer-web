import { useContext } from "react";
import { BrokerContext } from "../context/BrokerContext";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

export default function Content() {
  const { activePage } = useContext(BrokerContext);

  const pagesComponents = {
    Home: <Home />,
    About: <About />,
    Services: <Services />,
    Contact: <Contact />
  };

  return (
    <div className="content-wrapper">
      <div id="home"><Home /></div>
      <div id="about"><About /></div>
      <div id="services"><Services /></div>
      <div id="contact"><Contact /></div>
\    </div>
  );

}
