import Label from '../../components/label/Label'
import { Icon } from '../../components/icon/Icon'
import {
  DivWrapper,
  Wrapper,
  EmailLabel2,
  EmailLabel1,
  MailIcon,
  ChevronOuterBox,
  SubWrapper,
} from './styles'
import Divider from '../../components/divider/Divider'
import MailLogo from '../../assets/images/MailImg1.png'
import ChevronRightLogo from '../../assets/images/chevron_right.png'

interface SmallWidgetProps {
  label?: string
  color?: string
}

export const SmallWidget = ({ label, color, ...props }: SmallWidgetProps) => {
  return (
    <Wrapper>
      <MailIcon>
        <Icon icon={MailLogo}></Icon>
      </MailIcon>

      <SubWrapper>
        <EmailLabel1>
          <Label
            fontSize={'14px'}
            fontStyle={'normal'}
            fontWeight={400}
            lineHeight={'18px'}
            label={'Email'}
            fontFamily="SourceSansProBold"
          />
        </EmailLabel1>

        <EmailLabel2>
          <Label
            fontSize={'16px'}
            fontStyle={'normal'}
            fontWeight={400}
            lineHeight={'20px'}
            label={'advisor1@example.com'}
            fontFamily="SourceSansProBold"
          />
        </EmailLabel2>
      </SubWrapper>
      <ChevronOuterBox>
        <Icon icon={ChevronRightLogo}></Icon>
      </ChevronOuterBox>

      <DivWrapper>
        <Divider
          borderColor={'#EEF3F5'}
          horizontal={true}
          borderHeight={'1px'}
        ></Divider>
      </DivWrapper>
    </Wrapper>
  )
}
export default SmallWidget
