import { StyledLabel, LabelProps } from './styles'

/**
 * Gives the label customizable component
 */
const Label = ({
  fontSize,
  fontStyle,
  fontWeight,
  lineHeight,
  color,
  label,
  fontFamily
}: LabelProps) => (
  <StyledLabel
    fontFamily={fontFamily}
    fontSize={fontSize}
    fontStyle={fontStyle}
    fontWeight={fontWeight}
    lineHeight={lineHeight}
    color={color}
    label={label}
  >
    {label}
  </StyledLabel>
)

export default Label
