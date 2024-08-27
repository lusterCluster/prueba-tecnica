import { useMemo } from "react";
import { convertToTailwindClass } from "../../util/tailwind/classConverter";

const useTailwindClassConverter = (object: any) =>
  useMemo(() => {
    return convertToTailwindClass(object);
  }, [object]);
export default useTailwindClassConverter;
