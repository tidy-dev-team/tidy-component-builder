import { Container, render, VerticalSpace } from "@create-figma-plugin/ui";
import { emit } from "@create-figma-plugin/utilities";
import { h } from "preact";
import { components } from "./componentData";
import { useAtom } from "jotai";
import { useState } from "preact/hooks";

import { DropdownComponent } from "./ui components/Dropdown";
import { selectedComponentPropertiesAtom } from "./state/atoms";
import { useEffect } from "preact/hooks";

function Plugin() {
  const [componentProps] = useAtom(selectedComponentPropertiesAtom);
  const [propNames, setPropNames] = useState<string[]>([]);

  useEffect(() => {
    const keys = componentProps ? Object.keys(componentProps) : [];
    console.log("Component props>>> ", componentProps);
    setPropNames(keys);
  }, [componentProps]);

  useEffect(() => {
    propNames.forEach((propName) => {
      console.log(componentProps[propName]);
    });
  }, [propNames]);

  return (
    <Container space="medium">
      <VerticalSpace space="small" />
      <DropdownComponent {...components} />
      {propNames.length > 0 &&
        propNames.map((propName) => (
          <p key={propName}>{componentProps[propName]?.name}</p>
        ))}
      <VerticalSpace space="small" />
    </Container>
  );
}

export default render(Plugin);
