import { StyledIcon, IconProps } from './styles'

export const Icon = ({
  icon,
  bgColor
}: IconProps) => {
  return (
    <StyledIcon
      src={icon}
      alt="Icon"
      bgColor={bgColor}
      icon={icon}
    ></StyledIcon>
  )
}