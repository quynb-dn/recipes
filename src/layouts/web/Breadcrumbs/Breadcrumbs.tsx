import NextLink from "next/link";
import { ReactNode } from "react";

import {
  Link,
  LinkProps,
  Breadcrumbs as MuiBreadcrumbs,
  Typography,
  styled,
} from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const BreadcrumbItem = styled(Link)<{ component: LinkProps["component"] }>(
  ({ theme }) => ({
    color: theme.palette.text.primary,
    textDecoration: "none",
    textTransform: "uppercase",
    fontWeight: "bold",
    position: "relative",
    zIndex: 1,
  })
);

const BreadcrumbLabel = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  textTransform: "uppercase",
  fontWeight: "bold",
}));

const Seperator = styled(NavigateNextIcon)(({ theme }) => ({
  color: theme.palette.primary.main,
}));

export type Breadcrumb = {
  key: string;
  label: string | ReactNode;
  link?: string;
};

interface BreadcrumbsProps {
  breadcrumbs: Breadcrumb[];
}

export const Breadcrumbs = ({ breadcrumbs }: BreadcrumbsProps) => {
  return (
    <MuiBreadcrumbs sx={{ mt: 2 }} separator={<Seperator fontSize="small" />}>
      {breadcrumbs.map((breadcrumb) => {
        if (breadcrumb?.link) {
          return (
            <BreadcrumbItem
              key={breadcrumb.key}
              component={NextLink}
              href={breadcrumb.link}
            >
              {breadcrumb.label}
            </BreadcrumbItem>
          );
        }
        return (
          <BreadcrumbLabel key={breadcrumb.key}>
            {breadcrumb.label}
          </BreadcrumbLabel>
        );
      })}
    </MuiBreadcrumbs>
  );
};
