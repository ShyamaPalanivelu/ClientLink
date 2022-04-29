import styled from "styled-components";

export interface CardHeaderProps {
  label: string;
  text: string;
  icon?: any;
}
export const Account = styled.div`
  display: flex;
  flex-direction: row;
  background: #1f5eb7;
  border-radius: 8px 8px 0px 0px;
`;

export const LabelHeader = styled.div`
  text-align: left;
  color: #ffffff;
  order: 0;
  padding: 17px 50px 12px 13px;
  flex-basis: 60%;
  
`;

export const LabelAmount = styled.div`
  color: #ffffff;
  text-align: right;
  padding: 10px 0px 0px 510px;
  flex-basis:35%;
`;
export const ChevronTop = styled.image`
  padding: 17px 5px 0px 20px;
  flex-basis: 5%;
`;