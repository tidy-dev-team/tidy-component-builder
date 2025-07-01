import { getPlaceholderIcon } from "./getPlaceholderIcon";

export function buildCheckboxOnCanvas(properties: any): void {
  // Create a frame to contain the checkbox and label
  const checkboxFrame = figma.createComponent();
  checkboxFrame.name = "Checkbox";
  checkboxFrame.layoutMode = "HORIZONTAL";
  checkboxFrame.itemSpacing = 8;
  checkboxFrame.primaryAxisSizingMode = "AUTO";
  checkboxFrame.counterAxisSizingMode = "AUTO";
  checkboxFrame.paddingLeft = 0;
  checkboxFrame.paddingRight = 0;
  checkboxFrame.paddingTop = 0;
  checkboxFrame.paddingBottom = 0;
  checkboxFrame.fills = [];

  // Create the checkbox square
  const checkboxSquare = figma.createRectangle();
  checkboxSquare.name = "Checkbox Square";

  // Set size based on the size property
  const size = properties.size?.property?.value === "s" ? 16 : 20;
  checkboxSquare.resize(size, size);

  // Style the checkbox to match Kido DS (Figma Dev Mode MCP)
  checkboxSquare.cornerRadius = 4;
  checkboxSquare.fills = [
    {
      type: "SOLID",
      color: { r: 0.988, g: 0.992, b: 1 }, // #FCFDFF
    },
  ];
  checkboxSquare.strokes = [
    {
      type: "SOLID",
      color: { r: 0.792, g: 0.816, b: 0.871 }, // #CAD0DE
    },
  ];
  checkboxSquare.strokeWeight = 1;
  checkboxSquare.effects = [
    {
      type: "DROP_SHADOW",
      color: { r: 0.082, g: 0.114, b: 0.2, a: 0.06 }, // #15203A0F
      offset: { x: 0, y: 1 },
      radius: 2,
      visible: true,
      blendMode: "NORMAL",
    },
  ];

  // Add checkbox to frame
  checkboxFrame.appendChild(checkboxSquare);

  const icon = getPlaceholderIcon();

  // Add icon if enabled
  if (properties.icon?.used) {
    const iconNode = figma.createNodeFromSvg(icon);
    iconNode.name = "Checkbox Icon";
    iconNode.resize(size * 0.8, size * 0.8); // Resize to fit within the checkbox
    iconNode.x = (size - iconNode.width) / 2; // Center the icon horizontally
    iconNode.y = (size - iconNode.height) / 2; // Center the icon vertically
    checkboxFrame.appendChild(iconNode);
  }

  const textRow = figma.createFrame();
  textRow.name = "Text Row";
  textRow.layoutMode = "HORIZONTAL";
  textRow.itemSpacing = 8;
  textRow.fills = [];
  textRow.layoutSizingVertical = "HUG";

  // Create a vertical frame for label, count, and description
  const textColumn = figma.createFrame();
  textColumn.name = "Text Column";
  textColumn.layoutMode = "VERTICAL";
  textColumn.primaryAxisSizingMode = "AUTO";
  textColumn.counterAxisSizingMode = "AUTO";
  textColumn.itemSpacing = 2;
  textColumn.fills = [];

  // Helper to create and style a text node
  async function createStyledText({
    name,
    value,
    font,
    fontSize,
    color,
    opacity = 1,
    lineHeight,
    letterSpacing = 0,
  }: {
    name: string;
    value: string;
    font: { family: string; style: string };
    fontSize: number;
    color: { r: number; g: number; b: number };
    opacity?: number;
    lineHeight: number;
    letterSpacing?: number;
  }) {
    await figma.loadFontAsync(font);
    const text = figma.createText();
    text.name = name;
    text.fontName = font;
    text.characters = value;
    text.fontSize = fontSize;
    text.fills = [{ type: "SOLID", color }];
    text.opacity = opacity;
    text.lineHeight = { unit: "PIXELS", value: lineHeight };
    text.letterSpacing = { unit: "PERCENT", value: letterSpacing };
    return text;
  }

  // Create label if enabled
  (async () => {
    if (properties.label?.used) {
      const labelText = await createStyledText({
        name: "Label",
        value: properties.label?.property?.value || "Checkbox",
        font: { family: "Inter", style: "Medium" },
        fontSize: size === 16 ? 14 : 16,
        color: { r: 0.133, g: 0.153, b: 0.2 },
        opacity: 0.96,
        lineHeight: size === 16 ? 18 : 20,
      });
      textRow.appendChild(labelText);
      textColumn.appendChild(textRow);
    }
    if (properties.count?.used) {
      const countText = await createStyledText({
        name: "Count",
        value: String(properties.count?.property?.value ?? "(0)"),
        font: { family: "Inter", style: "Medium" },
        fontSize: size === 16 ? 12 : 14,
        color: { r: 0.384, g: 0.416, b: 0.502 },
        opacity: 0.72,
        lineHeight: size === 16 ? 14 : 16,
      });
      textRow.appendChild(countText);
      textColumn.appendChild(textRow);
    }
    if (properties.description?.used) {
      const descText = await createStyledText({
        name: "Description",
        value: properties.description?.property?.value || "(No description)",
        font: { family: "Inter", style: "Regular" },
        fontSize: size === 16 ? 12 : 14,
        color: { r: 0.384, g: 0.416, b: 0.502 },
        opacity: 0.72,
        lineHeight: size === 16 ? 14 : 16,
      });
      textColumn.appendChild(descText);
    }
    // Only append textColumn if it has children
    if (textColumn.children.length > 0) {
      checkboxFrame.appendChild(textColumn);
    }
  })();

  // Only append textColumn if it has children
  if (textColumn.children.length > 0) {
    checkboxFrame.appendChild(textColumn);
  }

  // Add the frame to the current page
  figma.currentPage.appendChild(checkboxFrame);

  // Center the checkbox in the viewport
  figma.viewport.scrollAndZoomIntoView([checkboxFrame]);

  console.log("Checkbox built on canvas with properties:", properties);
}
