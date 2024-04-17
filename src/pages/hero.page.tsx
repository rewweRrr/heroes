import { FC, memo } from "react";
import MainLayout from "../layouts/main.layout";

type HeroPageProps = {};

const HeroPage: FC<HeroPageProps> = () => {
  return <MainLayout>Hero Page</MainLayout>;
};

export default memo(HeroPage);
