declare module "*.scss" {
  type IClassNames = Record<string, string>
  const classnames: IClassNames
  export = classnames
}

declare module "*.png"
declare module "*.jpg"
declare module "*.jpeg"

declare module "*.svg" {
  import type React from "react"
  const SVG: React.VFC<React.SVGProps<SVGSVGElement>>
  export default SVG
}

declare const __IS_DEV__: boolean

type DeepPartial<T> = T extends object
    ? {
          [P in keyof T]?: DeepPartial<T[P]>;
      }
    : T;
//eslint-disable-next-line @typescript-eslint/no-explicit-any
type OptionalRecord<K extends keyof any, T> = {
    [P in K]?: T;
};
