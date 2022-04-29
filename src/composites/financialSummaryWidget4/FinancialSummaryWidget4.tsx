import Label from "../../components/label/Label";
import {
  WholeWidget,
  FirstLabelComponent,
  SecondLabelComponent,
} from "./styles";

export const FinancialSummaryWidget4 = () =>{
  return (
    <WholeWidget>
      <FirstLabelComponent>
        <Label
          fontSize={"16px"}
          fontStyle={"normal"}
          fontWeight={400}
          lineHeight={"24px"}
          label={"Rate of Return(trailing 12 months)"}
          fontFamily={"SourceSansProRegular"}
        />
      </FirstLabelComponent>

      {/* {Styling for second element} */}
      <SecondLabelComponent>
        <Label
          fontSize={"24px"}
          fontStyle={"normal"}
          fontWeight={700}
          lineHeight={"48px"}
          label={"$+4.48%"}
          fontFamily={"SourceSansProBold"}
        />
      </SecondLabelComponent>
    </WholeWidget>
  );
};
export default FinancialSummaryWidget4;
