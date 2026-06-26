import type { HTMLAttributes } from "react";

declare module "react" {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      "spline-viewer": HTMLAttributes<HTMLElement> & {
        url?: string;
      };
    }
  }
}

export {};
