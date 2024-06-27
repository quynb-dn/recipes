import { usePathname } from "next/navigation";
import NextLink from "next/link";

import {
  Accordion as MuiAccordion,
  AccordionDetails as MuiAccordionDetails,
  AccordionSummary as MuiAccordionSummary,
  List,
  ListItem,
  ListItemButton,
  Stack,
  SxProps,
  Theme,
  styled,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { NavItem } from "../Navigation/types";

const Accordion = styled(MuiAccordion)({
  boxShadow: "unset",
  paddingLeft: 0,
  paddingRight: 0,
  width: "100%",
});

const AccordionSummary = styled(MuiAccordionSummary)({
  paddingLeft: 0,
  paddingRight: 0,
  minHeight: "unset",

  ".MuiAccordionSummary-content": {
    marginTop: 0,
    marginBottom: 0,

    "&.Mui-expanded": {
      marginTop: 0,
      marginBottom: 0,
    },
  },

  "&.Mui-expanded": {
    minHeight: "unset",
  },
});

const AccordionDetails = styled(MuiAccordionDetails)({
  padding: 0,
});

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
            {hasChildren ? (
              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <ListItemButton
                    selected={isActive}
                    LinkComponent={NextLink}
                    href={hasChildren ? "#" : item.path}
                  >
                    {item.label}
                  </ListItemButton>
                </AccordionSummary>
                <AccordionDetails>
                  <NavigationMobile items={item.children!} />
                </AccordionDetails>
              </Accordion>
            ) : (
              <ListItemButton
                selected={isActive}
                LinkComponent={NextLink}
                href={hasChildren ? "#" : item.path}
              >
                {item.label}
              </ListItemButton>
            )}
          </ListItem>
        );
      })}
    </Stack>
  );
};
