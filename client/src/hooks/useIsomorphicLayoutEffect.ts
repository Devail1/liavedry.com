import { isServer } from "@/utils";
import { useEffect, useLayoutEffect } from "react";

// eslint-disable-next-line import/prefer-default-export
export const useIsomorphicLayoutEffect = isServer()
  ? useEffect
  : useLayoutEffect;
