"use client";

import clsx from "clsx";
import { usePathname } from "next/navigation";
import NextLink, { LinkProps } from "next/link";

import {
  CSSObject,
  List,
  ListItem,
  ListItemButton,
  Stack,
  StackProps,
  SxProps,
  Theme,
  styled,
} from "@mui/material";

import { NavItem } from "./types";

const selectedMixin = (theme: Theme): CSSObject => ({
  position: "absolute",
  top: "100%",
  left: 0,
  display: "flex",
  alignItems: "center",

  ".menu-item": {
    ".menu-item-link": {
      "&.Mui-selected": {
        color: theme.palette.primary.main,
      },
    },
    "&:hover": {
      ".menu-item-link": {
        borderBottomColor: "transparent",
        color: theme.palette.primary.main,
      },
    },
  },

  "&:before": {
    content: '" "',
    position: "absolute",
    left: "-100%",
    backgroundColor: "#f9f5f1",
    display: "block",
    height: "48px",
    width: "calc(100vw + 100%)",
    zIndex: 0,
  },
});

const Wrapper = styled(Stack)<{ component: StackProps["component"] }>(() => ({
  position: "relative",
  textTransform: "uppercase",
  fontWeight: "bold",
  paddingBottom: 0,
  paddingTop: 0,

  ".sub-menu": {
    display: "none",
  },
}));

const MenuItem = styled(ListItem)(({ theme }) => ({
  position: "static",
  height: "100%",
  paddingBottom: "20px",
  paddingLeft: 0,
  paddingRight: 0,

  "&.has-sub-menu": {
    "& .menu-item": {
      paddingBottom: 8,
      zIndex: 1,

      "> .menu-item-link": {
        paddingTop: 0,
        paddingBottom: 0,
        borderBottomColor: "transparent",
      },
    },
    "&:hover": {
      ".sub-menu": selectedMixin(theme),
    },

    "> .menu-item-link": {
      "&.Mui-selected": {
        "+ .sub-menu": selectedMixin(theme),
      },
    },
  },
}));

const MenuItemLink = styled(ListItemButton)<{ href: LinkProps["href"] }>(
  ({ theme }) => ({
    color: theme.palette.text.primary,
    textDecoration: "none",
    fontSize: 14,
    borderBottom: `3px solid transparent`,
    paddingLeft: 0,
    paddingRight: 0,

    "&.Mui-selected, &:hover": {
      backgroundColor: "transparent",
      borderBottomColor: theme.palette.primary.main,

      "&:hover": {
        backgroundColor: "transparent",
      },
    },
  })
);

interface NavigationProps {
  items: NavItem[];
  className?: string;
  sx?: SxProps<Theme>;
}

export const Navigation = ({ items, className, sx }: NavigationProps) => {
  const pathname = usePathname();

  return (
    <Wrapper
      direction="row"
      className={className}
      component={List}
      spacing={6}
      alignItems="center"
      justifyContent="flex-start"
      sx={sx}
    >
      {items.map((item) => {
        const hasChildren = Boolean(item.children?.length);
        const isActive = pathname === item.path || pathname.includes(item.path);
        return (
          <MenuItem
            key={item.id}
            className={clsx("menu-item", {
              "has-sub-menu": hasChildren,
            })}
          >
            <MenuItemLink
              selected={isActive}
              LinkComponent={NextLink}
              className="menu-item-link"
              href={hasChildren ? "#" : item.path}
              disableRipple
            >
              {item.label}
            </MenuItemLink>
            {hasChildren && (
              <Navigation items={item.children!} className="sub-menu" />
            )}
          </MenuItem>
        );
      })}
    </Wrapper>
  );
};
