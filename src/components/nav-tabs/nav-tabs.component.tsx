import { Tabs } from "@mui/material";
import { FC, memo } from "react";
import LinkTab from "../link-tab/link-tab.component.tsx";
import { HEROES_URL, MATCHES_URL } from "../../constants/router.constants.ts";
import { useLocation } from "react-router-dom";

type NavTabsProps = {};

const NavTabs: FC<NavTabsProps> = () => {
  const { pathname } = useLocation();

  return (
    <Tabs value={pathname} role="navigation" textColor="inherit">
      <LinkTab value={HEROES_URL} label="Heroes" href={HEROES_URL} />
      <LinkTab value={MATCHES_URL} label="Matches" href={MATCHES_URL} />
    </Tabs>
  );
};

export default memo(NavTabs);
