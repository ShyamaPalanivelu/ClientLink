import styled from "styled-components";
export interface GainLoserTableProps {
  primary?: boolean;
  label?: string;
  onClick?: () => void;
}
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding-left: 20px;
`;

export const Container1 = styled.div`
display: flex;
flex-direction: row;
padding-left: 20px;
`;

export const Item1 = styled.div`
  padding: 4px 13px 4px 8px;
  flex: 0 1 100%;
`;
export const Item2 = styled.div`
  padding: 4px 13px 4px 8px;
  flex: 0 1 100%;
`;
export const Item3 = styled.div`
  padding: 4px 4px 4px 8px;
  flex: 0 1 100%;
`;

export const FlexItem1 = styled.div`
  padding: 4px 12px 4px 8px;
  flex: 0 1 100%;
`;
export const FlexItem2 = styled.div`
  padding: 4px 12px 20px 8px;
  flex: 0 1 100%;
`;
export const FlexItem3 = styled.div`
  padding: 4px 4px 20px 32.67px;
  flex: 0 1 100%;
  background-color: #22c373;
  border-radius: 4px;
`;
export const Container2 = styled.div`
 
`;
export const StockContainer = styled.div`

`;
export const StockCompanyContainer = styled.div`

`;
export const Container3 = styled.div`
 
`;