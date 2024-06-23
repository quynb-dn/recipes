import { LinkProps, Link as MuiLink, styled } from "@mui/material";
import NextLink from "next/link";

import { Logo, LogoProps } from "./Logo";

const Link = styled(MuiLink)<{ component: LinkProps["component"] }>`
  text-decoration: none;
`;

interface LogoClickableProps extends LinkProps {
  logoProps?: LogoProps;
}

export const LogoClickable = ({
  logoProps,
  ...linkProps
}: LogoClickableProps) => {
  return (
    <Link {...linkProps} component={NextLink}>
      <Logo {...logoProps} />
    </Link>
  );
};
