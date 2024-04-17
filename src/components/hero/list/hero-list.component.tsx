import { FC, memo } from "react";
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Grid,
  Typography,
} from "@mui/material";
import { HeroModel } from "../../../models/hero.model.ts";

type HeroListProps = { heroes: HeroModel[] };

const HeroList: FC<HeroListProps> = ({ heroes }) => {
  return (
    <Grid container spacing={2}>
      {heroes.map((hero) => (
        <Grid key={hero.id} item xs={12} sm={6} md={4}>
          <Card sx={{ height: "100%" }}>
            <CardHeader
              avatar={<Avatar>{hero.name[0].toUpperCase()}</Avatar>}
              title={hero.name}
              titleTypographyProps={{
                variant: "h5",
                component: "div",
              }}
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {hero.description}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default memo(HeroList);
