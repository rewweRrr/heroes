import { FC, memo } from "react";
import MainLayout from "../layouts/main.layout";
import { Box, Grid, Stack, Typography } from "@mui/material";
// import HeroListContainer from "../components/hero/list/hero-list.container.tsx";
import HeroCreationContainer from "../components/hero/creation/hero-creation.container.tsx";
import PtTableCell from "../components/table-cell/table-cell.component.tsx";

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
          {/*<HeroListContainer />*/}
          <Grid container spacing={0.5} columns={18}>
            <Grid item xs={1}>
              <PtTableCell
                orderNumber={1}
                sign="H"
                name="Hydrogen"
                weight="4.0026"
              />
            </Grid>
            <Grid item xs={16} />
            <Grid item xs={1}>
              <PtTableCell
                orderNumber={2}
                sign="He"
                name="Helium"
                weight="1.008"
              />
            </Grid>
          </Grid>

          <Box
            display="grid"
            gridTemplateColumns="repeat(18, 1fr)"
            gridTemplateRows="repeat(9, 1fr)"
          >
            <Box gridColumn="span 1">
              <PtTableCell
                orderNumber={1}
                sign="H"
                name="Hydrogen"
                weight="4.0026"
              />
            </Box>
            <Box sx={{ "grid-column-start": "18" }}>
              <PtTableCell
                orderNumber={2}
                sign="He"
                name="Helium"
                weight="1.008"
              />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </MainLayout>
  );
};

export default memo(HeroesPage);
