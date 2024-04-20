import { memo, FC } from "react";
import { Stack, Typography } from "@mui/material";

type PtTableCellProps = {
  orderNumber: number;
  sign: string;
  name: string;
  weight: string;
};

const PtTableCell: FC<PtTableCellProps> = ({
  weight,
  sign,
  orderNumber,
  name,
}) => {
  return (
    <Stack
      direction="column"
      alignItems="flex-start"
      padding={0.5}
      sx={{
        background: "#d9d6d6",
        border: "1px solid #a9a7a7",
        "border-radius": "4px",
      }}
    >
      <Typography fontSize={"smaller"}>{orderNumber}</Typography>
      <Typography variant="h6">{sign}</Typography>
      <Typography fontSize={"small"}>{name}</Typography>
      <Typography fontSize={"small"}>{weight}</Typography>
    </Stack>
  );
};

export default memo(PtTableCell);
