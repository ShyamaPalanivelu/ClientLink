import React from 'react'
import './styles.tsx'
import { Logo } from '../../components/logo/Logo'
import Divider from '../../components/divider/Divider'
import { Wrapper, LogoProps, LogoWrapper, IconWrapper } from './styles'
import { Icon } from '../../components/icon/Icon'

export const Avatar = ({ label }: LogoProps) => {
  return (
    <Wrapper>
      <LogoWrapper>
        <Logo logo={require('../../assets/icons/16px/Wedbushlogo.png')} />
      </LogoWrapper>
      <Divider
        borderColor={'#EEF3F5'}
        horizontal={true}
        borderHeight={'1px'}
      ></Divider>
      <LogoWrapper>
        <IconWrapper>
          <Icon icon={require('../../assets/icons/16px/Profile.png')} />
        </IconWrapper>
      </LogoWrapper>
    </Wrapper>
  )
}
