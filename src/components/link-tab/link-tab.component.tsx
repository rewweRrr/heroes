import { FC, memo } from "react";
import { Tab } from "@mui/material";
import { useNavigate } from "react-router-dom";

type LinkTabProps = {
  value: string;
  label?: string;
};

const LinkTab: FC<LinkTabProps> = (props) => {
  const navigate = useNavigate();
  return (
    <Tab
      component="a"
      onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();
        navigate(props.value);
      }}
      {...props}
    />
  );
};

export default memo(LinkTab);
