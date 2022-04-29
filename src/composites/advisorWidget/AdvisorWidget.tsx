import Label from '../../components/label/Label'
import {
  ContactLabel1,
  ContactLabel2,
  ContactLabel3,
  IconWrapper,
  AdvisorWidgetProps,
  DividerWrapper,
  Base,
  SubWrapper,
  Main,
  
} from './styles'
import Divider from '../../components/divider/Divider'
import { Icon } from '../../components/icon/Icon'

import AdvisorLogo from '../../assets/images/advisor.png'


export const AdvisorWidget = ({ ...props }: AdvisorWidgetProps) => {
  return (
    <Base>
      <ContactLabel1>
        <Label
          fontSize={'18px'}
          fontStyle={'normal'}
          fontWeight={700}
          lineHeight={'24px'}
          color={'#192638'}
          label={'Contact Your Advisor'}
          fontFamily="SourceSansProBold"
        />
      </ContactLabel1>
      <DividerWrapper>
        <Divider
          borderColor={'#EEF3F5'}
          horizontal={true}
          borderHeight={'1px'}
        ></Divider>
      </DividerWrapper>
      <SubWrapper>
        <IconWrapper>
          <Icon icon={AdvisorLogo} />
        </IconWrapper>

        <Main>
          <ContactLabel2>
            <Label
              fontSize={'14px'}
              fontStyle={'normal'}
              fontWeight={400}
              lineHeight={'18px'}
              color={'#596579'}
              label={'Financial Advisor'}
              fontFamily="SourceSansProBold"
            />
          </ContactLabel2>
          <ContactLabel3>
            <Label
              fontSize={'16px'}
              fontStyle={'normal'}
              fontWeight={700}
              lineHeight={'20px'}
              color={'#192638'}
              label={'Allan Cooper'}
              fontFamily="SourceSansProBold"
            />
          </ContactLabel3>
        </Main>
      </SubWrapper>
    </Base>
  )
}

export default AdvisorWidget
