export type NavItem = {
  id: string;
  label: string;
  path: string;
  children?: NavItem[];
};
