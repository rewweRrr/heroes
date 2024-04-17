import { FC, memo, ReactNode } from "react";
import { AppBar, Box, Container, Toolbar, Typography } from "@mui/material";
import NavTabs from "../components/nav-tabs/nav-tabs.component.tsx";

type MainLayoutProps = {
  children: ReactNode;
};

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <AppBar position="static">
        <Container>
          <Toolbar disableGutters>
            <Typography flexGrow={1} variant="h6">
              Dota Statistic
            </Typography>
            <NavTabs />
          </Toolbar>
        </Container>
      </AppBar>
      <Container>
        <Box pt={2}>{children}</Box>
      </Container>
    </>
  );
};

export default memo(MainLayout);
