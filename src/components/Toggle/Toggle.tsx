import React from "react";
import {Wrapper,TopGainers,TopLosers} from "./styles"
interface ToggleProps {
    primary?: boolean;
    label?: string;
    onClick?: () => void;
}
export const Toggle = ({
    primary = false,
    label,
    ...props
  }: ToggleProps) => {
      return(
          <Wrapper>
              <TopGainers>Top Gainers</TopGainers>
              <TopLosers>Top Losers</TopLosers>
          </Wrapper>
      );
  };