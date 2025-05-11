import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { GSAPContext } from "../types";

type UseGSAPCallback = (context: gsap.Context) => void;

interface UseGSAPProps {
  scope?: React.RefObject<Element>;
  dependencies?: any[];
}

// Helper hook for GSAP animations with automatic cleanup
export const useGSAP = (
  callback: UseGSAPCallback,
  { scope, dependencies = [] }: UseGSAPProps = {}
): GSAPContext => {
  const ctx = useRef<GSAPContext | null>(null);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      if (ctx.current) {
        ctx.current.revert(); // Clean up previous animations
      }
      callback(gsap.context(() => {}));
    }, scope?.current || undefined);

    ctx.current = context;

    return () => {
      context.revert(); // Clean up animations when component unmounts
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [callback, scope, ...dependencies]);

  return ctx.current as GSAPContext;
};
