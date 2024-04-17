import { FC, memo, ReactNode } from "react";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";

type MainLayoutProps = {
  children: ReactNode;
};

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  const navItems = ["Home", "About", "Contact"];

  return (
    <>
      <AppBar>
        <Toolbar>
          <Typography variant="h6">Heroes</Typography>
          <Box>
            {navItems.map((item) => (
              <Button key={item}>{item}</Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      {children}
    </>
  );
};

export default memo(MainLayout);
