import { memo, FC } from "react";
import heroes from "../../../data/heroes.json";
import HeroList from "./hero-list.component.tsx";

type HeroListContainerProps = {};

const HeroListContainer: FC<HeroListContainerProps> = () => {
  return <HeroList heroes={heroes} />;
};

export default memo(HeroListContainer);
