// this file is only for enabling intellisense of non code files like svg, scss, jpeg etc

declare module "*.scss" {
  const content: { [className: string]: string };
  export default content;
}

// SVG as React component (SVGR style)
declare module "*.svg" {
  import * as React from "react";
  export const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement>
  >;
  const src: string;
  export default src;
}

// Images (URLs)
declare module "*.jpeg" {
  const src: string;
  export default src;
}

declare module "*.png" {
  const src: string;
  export default src;
}
