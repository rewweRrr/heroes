import { FC, memo } from "react";
import MainLayout from "../layouts/main.layout";
import { Grid, Stack, Typography } from "@mui/material";
import HeroListContainer from "../components/hero/list/hero-list.container.tsx";
import HeroCreationContainer from "../components/hero/creation/hero-creation.container.tsx";

type HeroesPageProps = {};

const HeroesPage: FC<HeroesPageProps> = () => {
  return (
    <MainLayout>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Stack direction="row" columnGap={2} alignItems="center">
            <Typography variant="h3" component="h3">
              Heroes
            </Typography>
            <HeroCreationContainer />
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <HeroListContainer />
        </Grid>
      </Grid>
    </MainLayout>
  );
};

export default memo(HeroesPage);
