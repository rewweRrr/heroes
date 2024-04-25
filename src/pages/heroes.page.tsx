import { FC, memo } from "react";
import MainLayout from "../layouts/main.layout";
import { Box, Grid, Stack, Typography } from "@mui/material";
// import HeroListContainer from "../components/hero/list/hero-list.container.tsx";
import HeroCreationContainer from "../components/hero/creation/hero-creation.container.tsx";
import PtTableCell from "../components/table-cell/table-cell.component.tsx";
import { PtTableCellModel } from "../models/table-cell.model.ts";

import tableCells from "../data/components.json";

type HeroesPageProps = {};

const HeroesPage: FC<HeroesPageProps> = () => {
  const data: PtTableCellModel[] = tableCells;

  console.log(data);
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
          <Box
            display="grid"
            gridTemplateColumns="repeat(18, 1fr)"
            gridTemplateRows="repeat(9, 1fr)"
          >
            {data.map(({ information, position }, index) => (
              <Box
                key={index}
                sx={{
                  "grid-column-start": `${position.column}`,
                  "grid-row-start": `${position.row}`,
                }}
              >
                <PtTableCell {...information} />
              </Box>
            ))}
          </Box>
        </Grid>
      </Grid>
    </MainLayout>
  );
};

export default memo(HeroesPage);
