import Label from "../../components/label/Label";
import {
  WholeWidgetFlex,
  FirstLabelComponent,
  SecondLabelComponent,
  ThirdLabelComponent,
  Flex,
  LabelProps,
} from "./styles";

export const FinancialSummaryWidget3 = ({ label, ...props }: LabelProps) => {
  return (
    <WholeWidgetFlex>
      <FirstLabelComponent>
        <Label
          fontSize={"16px"}
          fontStyle={"normal"}
          fontWeight={400}
          lineHeight={"24px"}
          label={"Projected Income Over Next 12 Mos"}
          fontFamily={"SourceSansProRegular"}
        />
      </FirstLabelComponent>

      <Flex>
        <SecondLabelComponent>
          <Label
            fontSize={"26px"}
            fontStyle={"normal"}
            fontWeight={700}
            lineHeight={"43px"}
            label={"$29,924.42"}
            fontFamily={"SourceSansProBold"}
          />
        </SecondLabelComponent>
        <ThirdLabelComponent>
          <Label
            fontSize={"21px"}
            fontStyle={"normal"}
            fontWeight={400}
            lineHeight={"48px"}
            label={"20.00%"}
            fontFamily={"SourceSansProBold"}
          />
        </ThirdLabelComponent>
      </Flex>
    </WholeWidgetFlex>
  );
};
export default FinancialSummaryWidget3;
