import React from "react";
import { useTranslation } from "react-i18next";

const Title = () => {
  const {t} = useTranslation();
  return (
    <h1 className="delivery_title" >
      {t('Delivery')}
    </h1>
  );
};

export default Title;
