import { FC, memo } from "react";
import { Tab } from "@mui/material";
import { useNavigation } from "react-router-dom";

type LinkTabProps = {
  label?: string;
  href?: string;
  selected?: boolean;
};

const LinkTab: FC<LinkTabProps> = (props) => {
  const navigation = useNavigation();
  return (
    <Tab
      component="a"
      onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();
          navigation
      }}
      aria-current={props.selected && "page"}
      {...props}
    />
  );
};

export default memo(LinkTab);
