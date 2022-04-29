import styled from 'styled-components'

export interface IconProps {
  icon: any
  bgColor?: string
}

export const StyledIcon = styled.img<IconProps>`
  margin: 0px;
`