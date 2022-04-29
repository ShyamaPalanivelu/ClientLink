import styled from 'styled-components'

export interface AdvisorWidgetProps {
  label?: string
  color?: string
}
export const Base = styled.div`
  display: flex;
  flex-direction: column;
`
export const DividerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  background: #eef3f5;
`
export const SubWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 0px 10px 0px;
`
export const Main = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0 1 70%;
`
export const ContactLabel1 = styled.div`
  padding: 12px 0px 10px 13px;
`
export const ContactLabel2 = styled.div`
  order: 1;
`
export const ContactLabel3 = styled.div`
  order: 2;
`

export const IconWrapper = styled.div`
  border-radius: 1000px;
  padding-left: 10px;
  padding-right: 10px;
  flex: 0 1 15%;
`
