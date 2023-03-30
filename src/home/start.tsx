import React, { FC, useState } from "react";
import * as S from "./homeStyle";
import Header from "../layout/header";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Start: FC = () => {
  const navigate = useNavigate();

  //변수
  const [projectName, setProjectName] = useState<string>("");
  const [projectManager, setProjectManager] = useState<string>("");
  const [projectDate, setProjectDate] = useState<string>("");
  const [evalType, setEvalType] = useState<string>("");
  const [tier1, setTier1] = useState<string>("white");
  const [tier2, setTier2] = useState<string>("white");
  const [numofRows, setNumofRows] = useState<number>(0);
  const [numofCols, setNumofCols] = useState<number>(0);

  return (
    <>
      <Header />
      <S.Content>
        <S.PageTitle>프로젝트 정보</S.PageTitle>
        <S.EvalArea>
          <S.EvalBox>
            <S.PaddingBox>
              <table>
                <tbody>
                  <tr>
                    <S.Td>프로젝트</S.Td>
                  </tr>
                </tbody>
              </table>
            </S.PaddingBox>
          </S.EvalBox>
        </S.EvalArea>
      </S.Content>
    </>
  );
};

export default Start;
