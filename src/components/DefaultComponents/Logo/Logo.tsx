import React, { DetailedHTMLProps, ImgHTMLAttributes } from "react";

interface Porps
  extends DetailedHTMLProps<
    ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > {}

const Logo: React.FC<Porps> = ({ ...rest }) => {
  return <img src={require("../../../assets/logo.png")} {...rest} />;
};

export default Logo;
