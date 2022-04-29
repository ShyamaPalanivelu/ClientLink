import React from "react";
import "./styles";
import {
  Account,
  ChevronTop,
  LabelHeader,
  LabelAmount,
  CardHeaderProps,
} from "./styles";

import Label from "../../components/label/Label";
import { Icon } from "../../components/icon/Icon";

export const CardHeader = ({ label, text, icon }: CardHeaderProps) => {
  //Reused label components and used chevron
  return (
    <Account>
      <LabelHeader>
        <Label
          fontSize={"20px"}
          fontStyle={"normal"}
          fontWeight={400}
          lineHeight={"32px"}
          color={"#FFFFFF"}
          label={label}
          fontFamily={""}
        />
      </LabelHeader>
      <LabelAmount>
        <Label
          fontSize={"20px"}
          fontStyle={"normal"}
          fontWeight={700}
          lineHeight={"32px"}
          color={"#FFFFFF"}
          label={text}
          fontFamily={""}
        />
      </LabelAmount>
      <ChevronTop>
        <Icon icon={icon}></Icon>
      </ChevronTop>
    </Account>
  );
};