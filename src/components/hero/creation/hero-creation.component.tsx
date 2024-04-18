import { memo, FC } from "react";
import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

type HeroCreationProps = {};

const HeroCreation: FC<HeroCreationProps> = () => {
  return (
    <Fab color="primary" aria-label="add" size="small">
      <AddIcon />
    </Fab>
  );
};

export default memo(HeroCreation);
