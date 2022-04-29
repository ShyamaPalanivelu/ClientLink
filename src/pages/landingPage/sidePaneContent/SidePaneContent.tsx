import {
  RootContainer,
  StyledLogoContainer,
  StyledMenuListContainer,
  StyledBottomContainer,
} from './styles'

import WedbushLogoSmall from '../..//../assets/images/WedbushLogo-sm.png'

const SidePaneContent = () => {
  return (
    <RootContainer>
      <StyledLogoContainer>
        <img src={WedbushLogoSmall} alt="Wedbus Loggo" />
      </StyledLogoContainer>
      <StyledMenuListContainer>Menu List</StyledMenuListContainer>
      <StyledBottomContainer>Footer Menu</StyledBottomContainer>
    </RootContainer>
  )
}

export default SidePaneContent
