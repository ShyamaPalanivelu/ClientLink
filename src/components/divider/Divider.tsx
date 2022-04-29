import { DividerLine, DividerProps } from './styles';

/**
 * Creates a horizontal divider
 */
const Divider = ({ borderColor, horizontal, borderHeight }: DividerProps) => {
  return (
    <DividerLine
      borderColor={borderColor}
      horizontal={horizontal}
      borderHeight={borderHeight}
    ></DividerLine>
  )
}

export default Divider