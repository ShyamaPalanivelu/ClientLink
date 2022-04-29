import styled from 'styled-components'
import { Colors } from '../../shared/styles'
export interface LabelProps1 {
  label?: string
}

export const WholeWidget1 = styled.div`
  display: flex;
  flex-direction: column;
  background: ${Colors.Gray05};
  border: 1px solid ${Colors.Gray30};
  box-sizing: border-box;
  box-shadow: 0px 8px 16px -8px rgba(0, 36, 93, 0.3);
  border-radius: 8px;
  padding: 0px 10px 0px 0px;
`
export const UpperLabel = styled.div`
  color: ${Colors.Gray70};
  padding: 8px 0px 0px 16px;
`
export const WholeWrapperFlex = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`
export const FirstWrapperLabel = styled.div`
  color: ${Colors.Success2};
  padding: 0px 0px 0px 16px;
`

export const SecondWrapperFlex = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0px 0px 0px 3px;
  color: ${Colors.Success2};
`
export const GainPercentage = styled.div`
  padding: 0px 0px 0px 28px;
`
export const IconWrapper = styled.div`
  transform: matrix(1, 0, 0, -1, 0, 0);
`
export const GainIcon = styled.div`
  transform: matrix(1, 0, 0, -1, 0, 0);
  padding: 0px 0px 29px 0px;
`
