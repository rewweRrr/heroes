import { FC, memo, useCallback, useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Fab,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { SubmitHandler } from "react-hook-form";
import { HeroCreationFormModel } from "../../../models/hero.model.ts";
import HeroCreationForm from "./form/hero-creation-form.component.tsx";
import { HERO_CREATION_FORM_ID } from "../../../constants/form.constants.ts";

type HeroCreationContainerProps = {};

const HeroCreationContainer: FC<HeroCreationContainerProps> = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit: SubmitHandler<HeroCreationFormModel> = useCallback(
    (data) => {
      // TODO create Hero
      console.log(data);
      setOpen(false);
    },
    [],
  );

  return (
    <>
      <Fab
        color="primary"
        aria-label="create"
        size="small"
        onClick={handleClickOpen}
      >
        <AddIcon />
      </Fab>
      <Dialog open={open} onClose={handleClose} fullWidth>
        <DialogTitle>Create Hero</DialogTitle>
        <DialogContent>
          <HeroCreationForm onSubmit={handleSubmit} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit" form={HERO_CREATION_FORM_ID}>
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default memo(HeroCreationContainer);
