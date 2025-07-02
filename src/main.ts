import { on, showUI } from "@create-figma-plugin/utilities";
import { BuildHandler, CloseHandler } from "./types";
import { buildCheckboxOnCanvas } from "./figma_components/Checkbox/Checkbox";

export default function () {
  on<BuildHandler>("BUILD", (data) => {
    console.log("Building component with data:", data);
    buildCheckboxOnCanvas(data);
  });

  showUI({
    height: 360,
    width: 320,
  });
}
