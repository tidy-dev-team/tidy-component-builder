import { Container, render, VerticalSpace } from "@create-figma-plugin/ui";
import { emit } from "@create-figma-plugin/utilities";
import { h } from "preact";
import { components } from "./componentData";
import { useAtom } from "jotai";
import { useState } from "preact/hooks";

import { DropdownComponent } from "./ui components/Dropdown";
import { CheckboxComponent } from "./ui components/Checkbox";
import { ButtonComponent } from "./ui components/Button";
import {
  selectedComponentPropertiesAtom,
  updatedComponentPropertiesAtom,
} from "./state/atoms";
import { useEffect } from "preact/hooks";

function Plugin() {
  const [componentProps] = useAtom(selectedComponentPropertiesAtom);
  const [propNames, setPropNames] = useState<string[]>([]);
  const [updatedComponentProps] = useAtom(updatedComponentPropertiesAtom);

  useEffect(() => {
    const keys = componentProps ? Object.keys(componentProps) : [];
    setPropNames(keys);
  }, [componentProps]);

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
        {propNames.length > 0 &&
          propNames.map((propName) => (
            <div key={propName}>
              <CheckboxComponent
                label={(componentProps[propName]?.name || propName) as string}
              />
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
