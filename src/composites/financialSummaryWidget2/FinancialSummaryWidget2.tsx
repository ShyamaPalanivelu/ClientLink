
import Label from '../../components/label/Label'
import { Icon } from "../../components/icon/Icon";

import {
  WholeWidget1,
  UpperLabel,
  FirstWrapperLabel,
  SecondWrapperFlex,
  WholeWrapperFlex,
  IconWrapper,
  GainIcon,
  GainPercentage,
  LabelProps1,
} from "./styles";
import GainImage from '../../assets/images/GainImg.png'
//const GainImage = require("../../assets/images/GainImg.png")

export const FinancialSummaryWidget2 = ({ label, ...props }: LabelProps1) => {
  return (
    <WholeWidget1>
      <UpperLabel>
        <Label
          fontSize={"16px"}
          fontStyle={"normal"}
          fontWeight={400}
          lineHeight={"24px"}
          label={"Today's Gain/Loss"}
          fontFamily={"SourceSansProRegular"}
        />
      </UpperLabel>
      <WholeWrapperFlex>
        <FirstWrapperLabel>
          <Label
            fontSize={"24px"}
            fontStyle={"normal"}
            fontWeight={700}
            lineHeight={"43px"}
            label={"+$6,239.12"}
            fontFamily={"SourceSansProBold"}
          />
        </FirstWrapperLabel>
        <SecondWrapperFlex>
          <IconWrapper>
            <GainIcon>
              <Icon icon={GainImage}></Icon>
            </GainIcon>
          </IconWrapper>
          <GainPercentage>
            <Label
              fontSize={"21px"}
              fontStyle={"normal"}
              fontWeight={400}
              lineHeight={"48px"}
              label={"+ 4.23%"}
              fontFamily={"SourceSansProBold"}
            />
          </GainPercentage>
        </SecondWrapperFlex>
      </WholeWrapperFlex>
    </WholeWidget1>
  );
};
export default FinancialSummaryWidget2;
