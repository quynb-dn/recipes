import { usePathname } from "next/navigation";
import NextLink from "next/link";

import {
  List,
  ListItem,
  ListItemButton,
  Stack,
  SxProps,
  Theme,
} from "@mui/material";

import { NavItem } from "../Navigation/types";

interface NavigationMobileProps {
  items: NavItem[];
  className?: string;
  sx?: SxProps<Theme>;
}

export const NavigationMobile = ({
  items,
  className,
  sx,
}: NavigationMobileProps) => {
  const pathname = usePathname();

  return (
    <Stack className={className} component={List} sx={sx}>
      {items.map((item) => {
        const hasChildren = Boolean(item.children?.length);
        const isActive = pathname === item.path || pathname.includes(item.path);
        return (
          <ListItem key={item.id}>
            <ListItemButton
              selected={isActive}
              LinkComponent={NextLink}
              href={hasChildren ? "#" : item.path}
            >
              {item.label}
            </ListItemButton>
          </ListItem>
        );
      })}
    </Stack>
  );
};
