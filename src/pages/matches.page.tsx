import { FC, memo } from "react";
import MainLayout from "../layouts/main.layout.tsx";

type MatchesPageProps = {};

const MatchesPage: FC<MatchesPageProps> = () => {
  return <MainLayout>Matches Page</MainLayout>;
};

export default memo(MatchesPage);
