import { FC, memo } from "react";
import MainLayout from "../layouts/main.layout";

type HeroesPageProps = {};

const HeroesPage: FC<HeroesPageProps> = () => {
  return <MainLayout>Heroes Page</MainLayout>;
};

export default memo(HeroesPage);
