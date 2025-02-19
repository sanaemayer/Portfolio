const measureDomNode = (
  node: { cloneNode: (arg0: boolean) => any },
  enhanceMeasurableNode = (e: any) => e
) => {
  const container = document.createElement("div");
  container.setAttribute(
    "style",
    "display: inline-block; position: absolute; visibility: hidden;  zIndex: -1;"
  );

  const clonedNode = node.cloneNode(true);
  const content = enhanceMeasurableNode(clonedNode);

  container.appendChild(content);

  document.body.appendChild(container);

  const height = container.clientHeight;
  const width = container.clientWidth;

  container.parentNode!.removeChild(container);
  return { height, width };
};

const enhanceMeasurableNode = (node: { style: { height: string } }) => {
  /* The submenu has the height set to 0 when it's collapsed.
   * To allow the submenu's measurement, we need to set its
   * height to "auto"
   */
  node.style.height = "auto";
  return node;
};

export const measureSubmenu = (node: { cloneNode: (arg0: boolean) => any }) =>
  measureDomNode(node, enhanceMeasurableNode);
