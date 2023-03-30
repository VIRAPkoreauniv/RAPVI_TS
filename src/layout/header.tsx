import React from "react";
import * as S from "./layoutStyle";
import { BsEnvelope } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <>
      <S.HeaderContainer>
        <S.Head>
          <S.LogoContainer>
            <S.Title
              onClick={() => {
                navigate("/");
                localStorage.setItem("where", "HOME");
              }}
            >
              RAPVI
            </S.Title>
            <S.FullTxtBox>
              <S.FullTxt>Risk Assessment Program</S.FullTxt>
              <S.FullTxt>for Vapor Intrusion</S.FullTxt>
            </S.FullTxtBox>
          </S.LogoContainer>
          <S.FAQdiv>
            <S.FAQ
              onClick={() => {
                window.open("https://engeokuees.wordpress.com/");
              }}
            >
              <BsEnvelope /> 문의하기
            </S.FAQ>
          </S.FAQdiv>
        </S.Head>

        <S.HorizontalMenu>
          <S.MenuWrapper>
            <S.HorizontalMenuTap
              onClick={() => {
                navigate("/");
                localStorage.setItem("where", "HOME");
              }}
            >
              기본정보
            </S.HorizontalMenuTap>

            <S.HorizontalMenuTap
              onClick={() => {
                navigate("/projectinfo");
              }}
            >
              RAPVI
            </S.HorizontalMenuTap>
            <S.HorizontalMenuTap onClick={() => navigate("/docs")}>
              자료실
            </S.HorizontalMenuTap>
          </S.MenuWrapper>
        </S.HorizontalMenu>
      </S.HeaderContainer>
    </>
  );
};

export default Header;
