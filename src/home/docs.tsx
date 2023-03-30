import React, { useEffect, useState } from "react";
import * as S from "./homeStyle";
import { useNavigate } from "react-router-dom";
import Header from "../layout/header";

const Docs = () => {
  useEffect(() => {
    sessionStorage.clear();
    localStorage.clear();
  }, []);

  const [where, setWhere] = useState(1);
  const navigate = useNavigate();

  return (
    <>
      <S.HomeContainer>
        <Header />
        <S.BasicInfoContainer>
          <S.LeftMenu>
            <h2>자료실</h2>
            {where === 1 ? (
              <>
                <S.RedTap>
                  <S.MenuTap onClick={() => setWhere(1)}>
                    <strong>사용자 가이드</strong>
                  </S.MenuTap>
                </S.RedTap>
              </>
            ) : (
              <>
                <S.BlackTap>
                  <S.MenuTap onClick={() => setWhere(1)}>
                    사용자 가이드
                  </S.MenuTap>
                </S.BlackTap>
              </>
            )}
            {where === 2 ? (
              <>
                <S.RedTap>
                  <S.MenuTap onClick={() => setWhere(2)}>
                    <strong>튜토리얼</strong>
                  </S.MenuTap>
                </S.RedTap>
              </>
            ) : (
              <>
                <S.BlackTap>
                  <S.MenuTap onClick={() => setWhere(2)}>튜토리얼</S.MenuTap>
                </S.BlackTap>
              </>
            )}
          </S.LeftMenu>
          <S.TextContainer>
            {where === 1 && (
              <>
                <S.PageTitle>사용자 가이드</S.PageTitle>
                <S.RedLine></S.RedLine>
                <S.FlexRow>
                  <S.TextBox>
                    <S.Explain>
                      사용자 가이드를 클릭하시면 RAPVI에 대한 소개 및 전처리용
                      문서를 확인하실 수 있습니다.
                    </S.Explain>
                    <S.GuideLink
                      onClick={() =>
                        window.open(
                          "https://docs.google.com/presentation/d/1J1dtYnPnG7OTtm18ixwL-5pzql4ZHltf/edit?usp=share_link&ouid=100870610785043714305&rtpof=true&sd=true"
                        )
                      }
                    >
                      사용자 가이드
                    </S.GuideLink>
                  </S.TextBox>
                </S.FlexRow>
              </>
            )}
            {where === 2 && (
              <>
                <S.PageTitle>튜토리얼</S.PageTitle>
                <S.RedLine></S.RedLine>
                <S.FlexRow>
                  <div>
                    <S.Explain>
                      실제로 증기침입 위해성 평가를 진행하기 전, 전체적인
                      프로그램의 플로우를 체험하고 싶다면, 튜토리얼을 진행할 수
                      있습니다.
                    </S.Explain>
                    <S.GuideLink onClick={() => navigate("/tutorial")}>
                      시작하기
                    </S.GuideLink>
                  </div>
                </S.FlexRow>
              </>
            )}
          </S.TextContainer>
        </S.BasicInfoContainer>
      </S.HomeContainer>
    </>
  );
};

export default Docs;
