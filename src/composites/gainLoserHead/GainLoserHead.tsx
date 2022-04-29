import React from "react";
import Label from "../../components/label/Label";
// import { Toggle } from "../../components/Toggle/Toggle";
import { Wrapper, FlexItem1, FlexItem2, Container, InnerDiv } from "./styles";
interface GainLoserHeadProps {
  primary?: boolean;
  label?: string;
  onClick?: () => void;
}

export const GainLoserHead = ({ ...props }: GainLoserHeadProps) => {
  return (
    <Wrapper>
      <Label
        fontSize={"1.25rem"}
        color={"#192638;"}
        fontWeight={700}
        fontStyle={"normal"}
        lineHeight={"2rem"}
        label="Top Gainers/Losers"
        fontFamily="SourceSansProBold"
      />
      <Container >
        <FlexItem1>
          <InnerDiv>
            <Label
              fontSize={"1.25rem"}
              color={"#fff"}
              fontWeight={400}
              fontStyle={"normal"}
              lineHeight={"2rem"}
              label="Top Gainers"
              fontFamily="SourceSansProBold"
            />
          </InnerDiv>
        </FlexItem1>
        <FlexItem2>
          <Label
            fontSize={"1.25rem"}
            color={"#00245D"}
            fontWeight={400}
            fontStyle={"normal"}
            lineHeight={"2rem"}
            label="Top Losers"
            fontFamily="SourceSansProBold"
          />
        </FlexItem2>
      </Container>
    </Wrapper>
  );
};
