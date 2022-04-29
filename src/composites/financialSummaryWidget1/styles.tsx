import styled from "styled-components";
import { Colors } from "../../shared/styles";

export interface LabelProps {
  label?: string;
}

export const WholeWidget = styled.div<LabelProps>`
  display: flex;
  flex-direction: column;
  background: ${Colors.Gray05};
  border: 1px solid ${Colors.Gray30};
  box-sizing: border-box;
  box-shadow: 0px 8px 16px -8px rgba(0, 36, 93, 0.3);
  border-radius: 8px;
  padding:0px 77px 0px 0px;
`;

export const FirstLabelComponent = styled.div`
  padding: 8px 0px 0px 16px;
  color: ${Colors.Gray70};
`;
export const SecondLabelComponent = styled.div`
  padding: 0px 0px 0px 16px;
  color: ${Colors.Gray70};
`;
