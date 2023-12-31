import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Filter from "./components/Filter/Filter";
import Content from "./components/Content/Content";
import Delivery from "./components/Delivery/Delivery";
import Footer from "./components/Footer/Footer";
import Drawer from "./components/Drawer/Drawer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Chat from "./components/Chat/Chat";

const App = () => {
  const [cartOpened, setCartOpened] = useState(false);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  AOS.init({ duration: 1000 });

  return (
    <div>
      <ToastContainer />

      <Drawer onClose={() => setCartOpened(false)} opened={cartOpened} />

      <Header handleClick={() => setCartOpened(true)} />
      <Hero />
      <Filter
        handleClick={() => setCartOpened(true)}
        categories={categories}
        setCategories={setCategories}
      />
      <Content products={products} setProducts={setProducts} />
      <Delivery />
      <Footer />
      <Chat />
    </div>
  );
};

export default App;
