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
    console.log("Component props>>> ", componentProps);
    setPropNames(Object.keys(componentProps));
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
      {!!propNames.length &&
        propNames.map((propName) => {
          return <p>{componentProps[propName]}</p>;
        })}
      <VerticalSpace space="small" />
    </Container>
  );
}

export default render(Plugin);
