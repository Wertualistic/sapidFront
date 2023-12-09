import React, { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Filter from "./components/Filter/Filter";
import Content from "./components/Content/Content";
import Delivery from "./components/Delivery/Delivery";
import Footer from "./components/Footer/Footer";
import Drawer from "./components/Drawer/Drawer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const App = () => {
  const [cartOpened, setCartOpened] = useState(false);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

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
    </div>
  );
};

export default App;
