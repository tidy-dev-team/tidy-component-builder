import { on, showUI } from "@create-figma-plugin/utilities";

import { CloseHandler, CreateRectanglesHandler } from "./types";

export default function () {
  on("BUILD", (data) => console.log("In main.ts...", data));
  showUI({
    height: 360,
    width: 320,
  });
}
