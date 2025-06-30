import { on, showUI } from "@create-figma-plugin/utilities";
import { BuildHandler, CloseHandler } from "./types";

export default function () {
  on<BuildHandler>("BUILD", (data) => {
    console.log("Building component with data:", data);
  });
  
  showUI({
    height: 360,
    width: 320,
  });
}
