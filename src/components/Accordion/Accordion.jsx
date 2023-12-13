import React, { useEffect, useState } from "react";
import "./accordion.css";
  
import AccordionItem from "./AccordionItem/AccordionItem";
import axios from "axios";

const Accordion = () => {
  const [faqList, setFaqlist] = useState([]); 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/locations");

        setFaqlist(response.data.locations);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, []);

  const [openId, setId] = useState(1);

  const clickHandler = (id) => {
    if (id === openId) {
      setId(null);
    } else {
      setId(id);
    }
  };

  return (
    <>
      <ul className="accordion">
        {faqList.map((faqItem, id) => (
          <AccordionItem
            handler={clickHandler}
            {...faqItem}
            open={openId}
            key={id}
          />
        ))}
      </ul>
    </>
  );
};

export default Accordion;
