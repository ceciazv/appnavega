import React from "react";
import { HeaderProps } from "../../interfaces/Header.inteface";
import {
  HeaderStyle,
  HeaderTitle,
  HeaderHello,
  HeaderName,
} from "./style";

export default function Header({ hello, name, image }: HeaderProps) {
  return (
    <HeaderStyle>
      <HeaderTitle>
        {hello && <HeaderHello>{hello}</HeaderHello>}
        <HeaderName>{name}</HeaderName>
      </HeaderTitle>
    </HeaderStyle>
  );
}