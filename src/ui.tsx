import { Container, render, VerticalSpace } from "@create-figma-plugin/ui";
import { emit } from "@create-figma-plugin/utilities";
import { h } from "preact";
import { components } from "./componentData";
import { useAtom } from "jotai";

import { DropdownComponent } from "./ui_components/Dropdown";
import { CheckboxComponent } from "./ui_components/Checkbox";
import { ButtonComponent } from "./ui_components/Button";
import {
  selectedComponentPropertiesAtom,
  updatedComponentPropertiesAtom,
} from "./state/atoms";

function Plugin() {
  const [componentProps] = useAtom(selectedComponentPropertiesAtom);
  const [updatedComponentProps] = useAtom(updatedComponentPropertiesAtom);

  const propertyKeys = Object.keys(componentProps);

  function handleButtonClick() {
    emit("BUILD", updatedComponentProps);
  }

  return (
    <Container
      space="medium"
      style={{ height: "100vh", display: "flex", flexDirection: "column" }}
    >
      <div>
        <VerticalSpace space="small" />
        <DropdownComponent components={components} />
        <VerticalSpace space="large" />
        {propertyKeys.map((propertyKey) => (
          <div key={propertyKey}>
            <CheckboxComponent propertyKey={propertyKey} />
            <VerticalSpace space="small" />
          </div>
        ))}
      </div>
      <div style={{ flexGrow: 1 }}></div>
      <div>
        <ButtonComponent callback={handleButtonClick} />
        <VerticalSpace space="small" />
      </div>
    </Container>
  );
}

export default render(Plugin);
