import { Container, styled } from "@mui/material";
import React from "react";
import Header from "../layaut/Header";
import Footer from "../layaut/Footer";

const HomePage = () => {
  return (
    <>
      <Container>
        <Header />
        <ConTentContainer>
          <div>
            <div className="title">
              Зарабатывайте <br /> больше
            </div>
            <div className="titleWelbex">с WELBEX</div>
            <p className="text">
              Развиваем и контролируем <br /> продажи за вас
            </p>
          </div>
          <ContentСonsultations>
            <div className="consultations">
              <br /> Вместе с
              <span
                style={{
                  color: "#FCB045",
                  fontSize: "1.2em",
                  marginLeft: "0.5em",
                }}
              >
                бесплатной <br /> консультацией
              </span>
              мы дарим:
            </div>
            <div className="options">
              <div>
                <ul className="widget-list">
                  <h3>Виджеты</h3>
                  <li>30 готовых</li>
                  <li>решений</li>
                </ul>
                <ul className="dashboard-list">
                  <h3>Dashboard</h3>
                  <li>с показателями</li>
                  <li>вашего бизнеса</li>
                </ul>
              </div>
              <div>
                <ul className="skype-audit-list">
                  <h3>Skype Аудит</h3>
                  <li>отдела продаж</li>
                  <li>и CRM системы</li>
                </ul>
                <ul className="crm-usage-list">
                  <h3>35 дней</h3>
                  <li>использования</li>
                  <li>CRM</li>
                </ul>
              </div>
            </div>
            <Button>Получить консультацию</Button>
          </ContentСonsultations>
        </ConTentContainer>
        <Footer />
      </Container>
    </>
  );
};

export default HomePage;

const ConTentContainer = styled("div")(() => ({
  display: "flex",
  justifyContent: "space-between",
  marginTop: "90px",
  "& .title": {
    width: "362px",
    height: "58px",
    color: "#E4E5EA",
    fontSize: "48px",
  },
  "& .titleWelbex": {
    width: "247px",
    fontSize: "48px",
    height: "58px",
    color: "#FCB045",
    marginTop: "3rem",
  },
  "& .text": {
    width: "272px",
    height: "44px",
    color: "#E4E5EA",
  },
}));

const ContentСonsultations = styled("div")(() => ({
  color: "white",
  "& .consultations": {
    textAlign: "center",
  },
  "& .options": {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "63px",
  },
  "& .crm-usage-list": {
    marginTop: "30px",
  },
  "& .dashboard-list": {
    marginTop: "30px",
  },
}));

const Button = styled("div")(() => ({
  width: "262px",
  height: "61px",
  background: "#4077F3",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "62px",
  marginBottom: "69px",
}));
