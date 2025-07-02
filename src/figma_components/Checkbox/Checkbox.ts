import { getPlaceholderIcon } from "./getPlaceholderIcon";
import { addNewBooleanProperty } from "../../figma_functions/utils";

const CHECKBOX_CONFIG = {
  SIZES: { s: 16, default: 20 },
  SPACING: { item: 8, text: 2 },
  CORNER_RADIUS: 4,
  STROKE_WEIGHT: 1,
  ICON_SCALE: 0.8,
  COLORS: {
    background: { r: 0.988, g: 0.992, b: 1 },
    border: { r: 0.792, g: 0.816, b: 0.871 },
    shadow: { r: 0.082, g: 0.114, b: 0.2, a: 0.06 },
    text: {
      primary: { r: 0.133, g: 0.153, b: 0.2 },
      secondary: { r: 0.384, g: 0.416, b: 0.502 },
    },
  },
  TYPOGRAPHY: {
    family: "Inter",
    styles: { medium: "Medium", regular: "Regular" },
  },
};

interface TextConfig {
  name: string;
  value: string;
  font: { family: string; style: string };
  fontSize: number;
  color: { r: number; g: number; b: number };
  opacity?: number;
  lineHeight: number;
  letterSpacing?: number;
}

export async function buildCheckboxOnCanvas(properties: any): Promise<void> {
  // Create a frame to contain the checkbox and label
  const checkboxFrame = figma.createComponent();
  checkboxFrame.name = "Checkbox";
  checkboxFrame.layoutMode = "HORIZONTAL";
  checkboxFrame.itemSpacing = CHECKBOX_CONFIG.SPACING.item;
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
  const size =
    properties.size?.property?.value === "s"
      ? CHECKBOX_CONFIG.SIZES.s
      : CHECKBOX_CONFIG.SIZES.default;
  checkboxSquare.resize(size, size);

  // Style the checkbox to match Kido DS (Figma Dev Mode MCP)
  checkboxSquare.cornerRadius = CHECKBOX_CONFIG.CORNER_RADIUS;
  checkboxSquare.fills = [
    { type: "SOLID", color: CHECKBOX_CONFIG.COLORS.background },
  ];
  checkboxSquare.strokes = [
    { type: "SOLID", color: CHECKBOX_CONFIG.COLORS.border },
  ];
  checkboxSquare.strokeWeight = CHECKBOX_CONFIG.STROKE_WEIGHT;
  checkboxSquare.effects = [
    {
      type: "DROP_SHADOW",
      color: CHECKBOX_CONFIG.COLORS.shadow,
      offset: { x: 0, y: 1 },
      radius: 2,
      visible: true,
      blendMode: "NORMAL",
    },
  ];
  // Create text containers
  const textRow = createFrame(
    "Text Row",
    "HORIZONTAL",
    CHECKBOX_CONFIG.SPACING.item
  );
  textRow.layoutSizingVertical = "HUG";

  const textColumn = createFrame(
    "Text Column",
    "VERTICAL",
    CHECKBOX_CONFIG.SPACING.text
  );

  // Add checkbox to frame
  checkboxFrame.appendChild(checkboxSquare);

  // Add icon if enabled
  if (properties.icon?.used) {
    const icon = getPlaceholderIcon();
    const iconNode = figma.createNodeFromSvg(icon);
    iconNode.name = "Placeholder Icon";
    const iconSize = size * CHECKBOX_CONFIG.ICON_SCALE;
    iconNode.resize(iconSize, iconSize);
    iconNode.x = (size - iconSize) / 2;
    iconNode.y = (size - iconSize) / 2;
    textRow.appendChild(iconNode);
    // addNewBooleanProperty(checkboxFrame, iconNode, "icon", true);
    // checkboxFrame.addComponentProperty("icon", "BOOLEAN", true);
    // const keys = Object.keys(checkboxFrame.componentPropertyDefinitions);
    // const iconProp = keys.find((key) => key.startsWith("icon"));
    // iconNode.componentPropertyReferences = { visible: iconProp };
    // console.log(iconProp);
  }

  // Helper functions
  function createFrame(
    name: string,
    layoutMode: "HORIZONTAL" | "VERTICAL",
    spacing: number
  ) {
    const frame = figma.createFrame();
    frame.name = name;
    frame.layoutMode = layoutMode;
    frame.itemSpacing = spacing;
    frame.primaryAxisSizingMode = "AUTO";
    frame.counterAxisSizingMode = "AUTO";
    frame.fills = [];
    return frame;
  }

  async function createStyledText(config: TextConfig) {
    await figma.loadFontAsync(config.font);
    const text = figma.createText();
    text.name = config.name;
    text.fontName = config.font;
    text.characters = config.value;
    text.fontSize = config.fontSize;
    text.fills = [{ type: "SOLID", color: config.color }];
    text.opacity = config.opacity || 1;
    text.lineHeight = { unit: "PIXELS", value: config.lineHeight };
    text.letterSpacing = { unit: "PERCENT", value: config.letterSpacing || 0 };
    return text;
  }

  function getTextConfig(
    type: "label" | "count" | "description",
    value: string,
    size: number
  ): TextConfig {
    const isSmall = size === CHECKBOX_CONFIG.SIZES.s;
    const configs = {
      label: {
        name: "Label",
        font: {
          family: CHECKBOX_CONFIG.TYPOGRAPHY.family,
          style: CHECKBOX_CONFIG.TYPOGRAPHY.styles.medium,
        },
        fontSize: isSmall ? 14 : 16,
        color: CHECKBOX_CONFIG.COLORS.text.primary,
        opacity: 0.96,
        lineHeight: isSmall ? 18 : 20,
      },
      count: {
        name: "Count",
        font: {
          family: CHECKBOX_CONFIG.TYPOGRAPHY.family,
          style: CHECKBOX_CONFIG.TYPOGRAPHY.styles.medium,
        },
        fontSize: isSmall ? 12 : 14,
        color: CHECKBOX_CONFIG.COLORS.text.secondary,
        opacity: 0.72,
        lineHeight: isSmall ? 14 : 16,
      },
      description: {
        name: "Description",
        font: {
          family: CHECKBOX_CONFIG.TYPOGRAPHY.family,
          style: CHECKBOX_CONFIG.TYPOGRAPHY.styles.regular,
        },
        fontSize: isSmall ? 12 : 14,
        color: CHECKBOX_CONFIG.COLORS.text.secondary,
        opacity: 0.72,
        lineHeight: isSmall ? 14 : 16,
      },
    };
    return { ...configs[type], value };
  }

  // Create text elements
  const textElements: Array<{ element: any; container: "row" | "column" }> = [];

  if (properties.label?.used) {
    const labelText = await createStyledText(
      getTextConfig(
        "label",
        properties.label?.property?.value || "Checkbox",
        size
      )
    );
    textElements.push({ element: labelText, container: "row" });
  }

  if (properties.count?.used) {
    const countText = await createStyledText(
      getTextConfig(
        "count",
        String(properties.count?.property?.value ?? "(0)"),
        size
      )
    );
    textElements.push({ element: countText, container: "row" });
  }

  if (properties.description?.used) {
    const descText = await createStyledText(
      getTextConfig(
        "description",
        properties.description?.property?.value || "(No description)",
        size
      )
    );
    textElements.push({ element: descText, container: "column" });
  }

  // Organize text elements
  const rowElements = textElements.filter((te) => te.container === "row");
  const columnElements = textElements.filter((te) => te.container === "column");

  if (rowElements.length > 0) {
    rowElements.forEach((te) => textRow.appendChild(te.element));
    textColumn.appendChild(textRow);
  }

  if (columnElements.length > 0) {
    columnElements.forEach((te) => textColumn.appendChild(te.element));
  }

  if (textColumn.children.length > 0) {
    checkboxFrame.appendChild(textColumn);
    properties.label.used &&
      addNewBooleanProperty(checkboxFrame, textColumn, "label", true);
  }

  // Add the frame to the current page
  figma.currentPage.appendChild(checkboxFrame);

  // Center the checkbox in the viewport
  figma.viewport.scrollAndZoomIntoView([checkboxFrame]);

  console.log("Checkbox built on canvas with properties:", properties);
}
