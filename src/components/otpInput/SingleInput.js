import React, { memo, useRef, useLayoutEffect } from "react";
import usePrevious from "../../hooks/use-previous";

export function SingleOTPInputComponent(props) {
  const { focus, autoFocus, ...rest } = props;
  const inputRef = useRef(null);
  const prevFocus = usePrevious(!!focus);
  useLayoutEffect(() => {
    if (inputRef.current) {
      if (focus && autoFocus) {
        inputRef.current.focus();
      }
      if (focus && autoFocus && focus !== prevFocus) {
        inputRef.current.focus();
        inputRef.current.select();
      }
    }
  }, [autoFocus, focus, prevFocus]);

  return (
    <input
      required
      ref={inputRef}
      {...rest}
      className="col-sm-1 col-1 verifyOtp"
    />
  );
}

const SingleOTPInput = memo(SingleOTPInputComponent);
export default SingleOTPInput;
