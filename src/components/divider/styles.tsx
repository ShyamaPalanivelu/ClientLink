import styled, { css } from 'styled-components'

export interface DividerProps {
  borderColor: string
  horizontal?: boolean
  borderHeight: string
}

export const DividerLine = styled.div<DividerProps>`
 display:flex;
 flex-direction:row;
  ${({ horizontal }: any) =>
    horizontal
      ? css`
          border-bottom: ${(props: any) => props.borderHeight} solid
            ${(props: any) => props.borderColor};
        `
      : css`
          border-left: ${(props: any) => props.borderHeight} solid
            ${(props: any) => props.borderColor};
        `}
`;