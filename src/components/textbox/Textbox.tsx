import { StyledInput } from './styles'

interface TextboxProps {
  placeholder: string
}
/**
 * Primary UI component for user interaction
 */
export const Textbox = ({ placeholder }: TextboxProps) => {
  return <StyledInput type="text" placeholder={placeholder} />
}
