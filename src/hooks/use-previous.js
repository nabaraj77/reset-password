import { useRef, useEffect } from "react";

const usePrevious = (value) => {
  const ref = useRef();

  //strore current value in ref
  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
};
export default usePrevious;
