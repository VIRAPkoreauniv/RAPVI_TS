import React, { useEffect, useState } from "react";
import * as S from "./homeStyle";
import { GrMail } from "react-icons/gr";
import Header from "../layout/header";

const BasicInfo = () => {
  useEffect(() => {
    sessionStorage.clear();
    localStorage.clear();
  });

  const [where, setWhere] = useState<number>(1);

  return (
    <>
      <S.HomeContainer>
        <Header />
        <S.BasicInfoContainer>
          <S.LeftMenu>
            <h2>기본 정보</h2>
            {where === 1 ? (
              <>
                <S.RedTap>
                  <S.MenuTap onClick={() => setWhere(1)}>
                    <strong>RAPVI 소개</strong>
                  </S.MenuTap>
                </S.RedTap>
              </>
            ) : (
              <>
                <S.BlackTap>
                  <S.MenuTap onClick={() => setWhere(1)}>RAPVI 소개</S.MenuTap>
                </S.BlackTap>
              </>
            )}
            {where === 2 ? (
              <>
                <S.RedTap>
                  <S.MenuTap onClick={() => setWhere(2)}>
                    <strong> 증기침입 위해성 평가란?</strong>
                  </S.MenuTap>
                </S.RedTap>
              </>
            ) : (
              <>
                <S.BlackTap>
                  <S.MenuTap onClick={() => setWhere(2)}>
                    증기침입 위해성 평가란?
                  </S.MenuTap>
                </S.BlackTap>
              </>
            )}
            {where === 3 ? (
              <>
                <S.RedTap>
                  <S.MenuTap onClick={() => setWhere(3)}>
                    <strong>연구진 소개</strong>
                  </S.MenuTap>
                </S.RedTap>
              </>
            ) : (
              <>
                <S.BlackTap>
                  <S.MenuTap onClick={() => setWhere(3)}>연구진 소개</S.MenuTap>
                </S.BlackTap>
              </>
            )}
          </S.LeftMenu>
          <S.TextContainer>
            {where === 1 && (
              <>
                <S.PageTitle>RAPVI 소개</S.PageTitle>
                <S.RedLine></S.RedLine>
                <S.FlexRow>
                  <S.TextBox>
                    <S.SubTitle>
                      Risk Assessment Program for Vapor Intrusion
                    </S.SubTitle>
                    <S.Explain>
                      토양, 지하수 오염원에서 실내 공간으로의 유해한 증기 이동은
                      실내 공기를 오염시키고 거주자의 건강을 위협합니다. RAPVI는
                      증기침입 프로세스에 의한 위해성을 평가하는 프로그램입니다.
                    </S.Explain>
                    <S.GuideLink
                      onClick={() =>
                        window.open(
                          "https://drive.google.com/drive/folders/1K8u7_g8TPrMohENg2-COU2uF2rLNVIZu?usp=share_link"
                        )
                      }
                    >
                      사용자 가이드
                    </S.GuideLink>
                  </S.TextBox>
                  <S.VideoBox>
                    <iframe
                      src="https://www.youtube.com/embed/-1XgqPnOm-Y?rel=0&amp;autoplay=1&mute=1&amp;loop=1;playlist=영상키값"
                      title="video"
                      width="300"
                      height="150"
                    ></iframe>
                  </S.VideoBox>
                </S.FlexRow>
                <br />
                <S.SubTitle>RAPVI의 증기침입 위해성평가 방식 비교</S.SubTitle>
                <S.FlexRow>
                  <S.Box>
                    <S.HorizontalLine>
                      <S.SubTitle>기본 평가</S.SubTitle>
                      <S.Explain>
                        기존 데이터를 바탕으로 한 간단한 위해성 평가 모델로,
                        오염원, 노출경로, 수용체 정보를 숫자 값으로 입력 받아
                        발암 위해도, 비발암 위해도 그래프를 산출합니다.
                      </S.Explain>
                    </S.HorizontalLine>
                    <S.Explain>단일 지점</S.Explain>
                    <S.Explain>단일/복합 오염물질</S.Explain>
                    <S.Explain>단일 층서</S.Explain>
                    <S.Explain>숫자 값 입력</S.Explain>
                    <S.Explain>숫자 값/그래프 출력</S.Explain>
                  </S.Box>
                  <S.Box>
                    <S.HorizontalLine>
                      <S.SubTitle>부지 기반 평가</S.SubTitle>
                      <S.Explain>
                        공간 특징적인 데이터를 바탕으로 심화된 현실적인 위해성
                        평가 모델로, 오염원, 노출경로, 수용체 정보를 숫자 값과
                        그리드로 입력 받아 실내 오염 농도, 발암 위해도, 비발암
                        위해도 그리드를 맵과 함께 산출합니다.
                      </S.Explain>
                    </S.HorizontalLine>

                    <S.Explain>다중 지점</S.Explain>
                    <S.Explain>단일 오염물질</S.Explain>
                    <S.Explain>단일/다중 층서</S.Explain>
                    <S.Explain>숫자 값/그리드 입력</S.Explain>
                    <S.Explain>그리드 출력</S.Explain>
                  </S.Box>
                </S.FlexRow>
              </>
            )}
            {where === 2 && (
              <>
                <S.PageTitle>증기침입 위해성 평가 프로그램란?</S.PageTitle>
                <S.RedLine></S.RedLine>
                <S.FlexRow>
                  <div>
                    <S.SubTitle>증기침입</S.SubTitle>
                    <S.Explain>
                      도심 환경에서 위해성평가의 대상이 되는 주요 경로로, 토양,
                      지하수와 같은 오염원으로부터​ 건물 벽면 및 바닥의 크랙
                      또는 도관 등을 통한 ​실내 공간으로의 인체에 유해한 증기의
                      이동
                    </S.Explain>
                    <S.SubTitle>위해성평가</S.SubTitle>
                    <S.Explain>
                      물질이 인체나 생물에 가하는 악영향 정도 평가
                    </S.Explain>
                  </div>
                  <S.HomeImg src="img/home.png" alt="증기침입 위해성평가" />
                </S.FlexRow>
              </>
            )}
            {where === 3 && (
              <>
                <S.PageTitle>연구진 소개</S.PageTitle>
                <S.RedLine></S.RedLine>
                <S.Person>
                  <S.Part>교수</S.Part>
                  <S.Name>이순재</S.Name>
                  <S.Mail>메디힐지구환경관 510호</S.Mail>
                  <S.Mail>
                    <GrMail /> soonjam@korea.ac.kr
                  </S.Mail>
                </S.Person>
                <hr />
                <S.Person>
                  <S.Part>연구</S.Part>
                  <S.Name>배민서</S.Name>
                  <S.Mail>
                    <GrMail /> mstt1@korea.ac.kr
                  </S.Mail>
                </S.Person>
                <hr />
                <S.Person>
                  <S.Part>연구, 백엔드 개발</S.Part>
                  <S.Name>최이준</S.Name>
                  <S.Mail>
                    <GrMail /> cosmos101@korea.ac.kr
                  </S.Mail>
                </S.Person>
                <hr />
                <S.Person>
                  <S.Part>연구</S.Part>
                  <S.Name>한성경</S.Name>
                  <S.Mail>
                    <GrMail /> 1101sky@korea.ac.kr
                  </S.Mail>
                </S.Person>
                <hr />
                <S.Person>
                  <S.Part>기획</S.Part>
                  <S.Name>김나영</S.Name>
                  <S.Mail>
                    <GrMail /> iamnayoung@korea.ac.kr
                  </S.Mail>
                </S.Person>
                <hr />
                <S.Person>
                  <S.Part>기획</S.Part>
                  <S.Name>임정아</S.Name>
                  <S.Mail>
                    <GrMail /> joy224@korea.ac.kr
                  </S.Mail>
                </S.Person>
                <hr />
                <S.Person>
                  <S.Part>프론트엔드 개발</S.Part>
                  <S.Name>차수지</S.Name>
                  <S.Mail>
                    <GrMail /> winner0509@korea.ac.kr
                  </S.Mail>
                </S.Person>
                <hr />
                <S.Person>
                  <S.Part>백엔드 개발</S.Part>
                  <S.Name>나혁주</S.Name>
                  <S.Mail>
                    <GrMail /> mate_of_wind@naver.com
                  </S.Mail>
                </S.Person>
                <hr />
              </>
            )}
          </S.TextContainer>
        </S.BasicInfoContainer>
      </S.HomeContainer>
    </>
  );
};

export default BasicInfo;
