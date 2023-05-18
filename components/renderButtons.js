import { Box } from "@chakra-ui/react";
import { useState, useEffect } from "react";

const RenderButtons = (props) => {
  const [buttonList, setButtonList] = useState();
  useEffect(() => {
    setButtonList(props.list);
  }, [props.list]);
  const Buttons = buttonList.map((currButton) => {
    <Box>{currButton.text}</Box>;
  });
  return <Buttons />;
};

export default RenderButtons;
