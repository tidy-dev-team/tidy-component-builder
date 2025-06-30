import { Container, render, VerticalSpace } from "@create-figma-plugin/ui";
import { emit } from "@create-figma-plugin/utilities";
import { h } from "preact";
import { components } from "./componentData";
import { useAtom } from "jotai";
import { useState } from "preact/hooks";

import { DropdownComponent } from "./ui components/Dropdown";
import { CheckboxComponent } from "./ui components/Checkbox";
import { selectedComponentPropertiesAtom } from "./state/atoms";
import { useEffect } from "preact/hooks";

function Plugin() {
  const [componentProps] = useAtom(selectedComponentPropertiesAtom);
  const [propNames, setPropNames] = useState<string[]>([]);

  useEffect(() => {
    const keys = componentProps ? Object.keys(componentProps) : [];
    // console.log("Component props>>> ", componentProps);
    setPropNames(keys);
  }, [componentProps]);

  // useEffect(() => {
  //   propNames.forEach((propName) => {
  //     console.log(componentProps[propName]);
  //   });
  // }, [propNames]);

  return (
    <Container space="medium">
      <VerticalSpace space="small" />
      <DropdownComponent {...components} />
      <VerticalSpace space="large" />
      {propNames.length > 0 &&
        propNames.map((propName) => (
          <div>
            <CheckboxComponent
              key={propName}
              label={(componentProps[propName]?.name || propName) as string}
            />
            <VerticalSpace space="small" />
          </div>
        ))}
      <VerticalSpace space="small" />
    </Container>
  );
}

export default render(Plugin);
