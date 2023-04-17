import React from "react";
import { Box, styled } from "@mui/material";
import logoHeader from "../assets/icons/logoHeader.svg";
import logoHeader2 from "../assets/icons/headerlogo2.svg";
import iconTelegram from "../assets/icons/icon-telegram.svg";
import iconWatsappe from "../assets/icons/watsappe.svg";
import inconPhone from "../assets/icons/phone.svg";

const Header = () => {
  return (
    <WrapperHeader>
      <TitleLogo>
        <ContainerHeaderLogo>
          <img src={logoHeader} alt="" />
          <img src={logoHeader2} alt="" />
        </ContainerHeaderLogo>
        <h5 className="title">
          крупный интегратор CRM <br /> в Росcии и ещё 8 странах
        </h5>
      </TitleLogo>
      <HeaderList>
        <li>Услуги</li>
        <li>Виджеты</li>
        <li>Интеграции</li>
        <li>Интеграции</li>
        <li>Сертификаты</li>
      </HeaderList>
      <ContactContainer>
        <li className="numberList">+7 555 555-55-55</li>
        <div className="iconsContacts">
          <img className="icons" src={iconTelegram} alt="" />
          <img className="icons" src={inconPhone} alt="" />
          <img className="icons" src={iconWatsappe} alt="" />
        </div>
      </ContactContainer>
    </WrapperHeader>
  );
};

export default Header;

const WrapperHeader = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
  height: "73px",
  paddingTop: "91px",

  "@media (max-width: 600px)": {
    // Адаптивный стиль для мобильных устройств
    flexDirection: "column",
    alignItems: "center",
    paddingTop: "16px",
  },
}));

const TitleLogo = styled(Box)(() => ({
  "& .title": {
    color: "#E4E5EA",
    width: "165px",
    height: "24px",
    position: "relative",
    top: "10px",
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "300",
    fontSize: "10px",
    lineHeight: "12px",
  },
}));

const ContainerHeaderLogo = styled("div")(() => ({
  display: "flex",
  gap: "8px",
}));

const HeaderList = styled("ul")(() => ({
  display: "flex",
  gap: "30px",
  color: "white",
  listStyle: "none",

  "@media (max-width: 600px)": {
    // Адаптивный стиль для мобильных устройств
    gap: "10px",
    marginBottom: "24px",
  },
}));

const ContactContainer = styled("ul")(() => ({
  display: "flex",
  gap: "48px",

  "& .numberList": {
    cursor: "pointer",
    color: "#E4E5EA",
    listStyle: "none",
  },
  "& .iconsContacts": {
    display: "flex",
    gap: "33px",
  },
  "& .icons": {
    cursor: "pointer",
    width: "16px",
    height: "15px",
  },

  "@media (max-width: 600px)": {
    // Адаптивный стиль для мобильных устройств
    flexDirection: "column",
    alignItems: "center",
    marginBottom: "24px",
  },
}));
