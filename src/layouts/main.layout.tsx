import { FC, memo, ReactNode } from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import NavTabs from "../components/nav-tabs/nav-tabs.component.tsx";

type MainLayoutProps = {
  children: ReactNode;
};

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography flexGrow={1} variant="h6">
            Dota Statistic
          </Typography>
          <NavTabs />
        </Toolbar>
      </AppBar>
      {children}
    </>
  );
};

export default memo(MainLayout);
