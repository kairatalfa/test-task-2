import { styled } from "@mui/material";
import React from "react";
import iconTelegram from "../assets/icons/icon-telegram.svg";
import iconWatsappe from "../assets/icons/watsappe.svg";
import inconPhone from "../assets/icons/phone.svg";

const Footer = () => {
  return (
    <SyledFooter>
      <Container>
        <StyledUl>
          <p className="title">О компании</p>
          <li>Партнёрская программа</li>
          <li>Вакансии</li>
        </StyledUl>
        <StyledUl>
          <p className="title">Меню</p>
          <li>Расчёт стоимости</li>
          <li>Услуги</li>
          <li>Виджеты</li>
          <li>Интеграции</li>
          <li>Наши клиенты</li>
        </StyledUl>
        <StyledUl>
          <li className="move">Кейсы</li>
          <li>Благодарственные письма</li>
          <li>Сертификаты</li>
          <li>Блог на Youtube</li>
          <li>Вопрос / Ответ</li>
        </StyledUl>
        <div>
          <StyledUl className="last-child">
            <p className="title">Контакты</p>
            <li>+7 555 555-55-55</li>
            <li className="iconsContacts">
              <img className="icons" src={iconTelegram} alt="" />
              <img className="icons" src={inconPhone} alt="" />
              <img className="icons" src={iconWatsappe} alt="" />
            </li>
            <li>Москва, Путевой проезд 3с1, к 902</li>
          </StyledUl>
          <LastTile>
            <p>©WELBEX 2022. Все права защищены.</p>
            <p>Политика конфиденциальности</p>
          </LastTile>
        </div>
      </Container>
    </SyledFooter>
  );
};

export default Footer;

const SyledFooter = styled("footer")(() => ({
  padding: "50px 0 32px",
  width: "1141px",
  height: "235px",
  // position: "fixed",
  // bottom: "0",
}));

const Container = styled("div")(() => ({
  display: "flex",
  justifyContent: "space-between",

  "& .last-child": {
    textAlign: "end",
    gap: "18px",
  },
}));

const StyledUl = styled("ul")(() => ({
  listStyleType: "none",
  display: "flex",
  flexDirection: "column",
  gap: "10px",

  "& .title ": {
    color: " #656566",
    lineHeight: "30px",
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "14px",
    textTransform: "uppercase",
  },
  "& li": {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "16px",
    lineHeight: "19px",
    gap: "50px",
    color: " #E4E5EA",
  },
  "& .move": {
    paddingTop: "40px",
  },
  "& .iconsContacts": {
    cursor: "pointer",
    display: "flex",
    gap: "15px",
    justifyContent: "flex-end",
  },
}));

const LastTile = styled("div")(() => ({
  fontFamily: "'Montserrat'",
  fontStyle: "normal",
  fontWeight: "400",
  fontSize: "12px",
  color: "#E4E5EA",
  textAlign: "right",
  marginTop: "70px",
}));
