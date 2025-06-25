import {
  Button,
  Columns,
  Container,
  Muted,
  render,
  Text,
  TextboxNumeric,
  VerticalSpace,
} from "@create-figma-plugin/ui";
import { emit } from "@create-figma-plugin/utilities";
import { h } from "preact";
import { useCallback, useState } from "preact/hooks";
import { components } from "./componentData";

import { CloseHandler, CreateRectanglesHandler } from "./types";
import { DropdownComponent } from "./ui components/Dropdown";

function Plugin() {
  const [count, setCount] = useState<number | null>(5);
  const [countString, setCountString] = useState("5");
  const handleCreateRectanglesButtonClick = useCallback(
    function () {
      if (count !== null) {
        emit<CreateRectanglesHandler>("CREATE_RECTANGLES", count);
      }
    },
    [count]
  );
  const handleCloseButtonClick = useCallback(function () {
    emit<CloseHandler>("CLOSE");
  }, []);
  return (
    <Container space="medium">
      <VerticalSpace space="small" />
      <DropdownComponent components={Object.keys(components)} />

      <VerticalSpace space="small" />
    </Container>
  );
}

export default render(Plugin);
