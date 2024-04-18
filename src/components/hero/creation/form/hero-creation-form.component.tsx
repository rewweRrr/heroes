import { FC, memo } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Stack, TextField } from "@mui/material";
import { HeroCreationFormModel } from "../../../../models/hero.model.ts";
import { HERO_CREATION_FORM_ID } from "../../../../constants/form.constants.ts";

type HeroCreationFormProps = {
  onSubmit: SubmitHandler<HeroCreationFormModel>;
};

const HeroCreationForm: FC<HeroCreationFormProps> = ({ onSubmit }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<HeroCreationFormModel>({
    mode: "onBlur",
    reValidateMode: "onBlur",
    defaultValues: {
      name: "",
      description: "",
    },
  });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      id={HERO_CREATION_FORM_ID}
    >
      <Stack direction="column" rowGap={2} pt={0.5}>
        <Controller
          name="name"
          rules={{ required: true }}
          control={control}
          render={({ field }) => (
            <TextField {...field} required label="Name" error={!!errors.name} />
          )}
        />
        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <TextField {...field} multiline rows={4} label="Description" />
          )}
        />
      </Stack>
    </form>
  );
};

export default memo(HeroCreationForm);
