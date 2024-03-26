import React from "react";
import { Input, P } from "@/components/common/ui";
import { InputProps } from "../input/Input.props";

interface Props extends InputProps {
  error: string | undefined;
}

export const InputBox = React.forwardRef(
  (
    { error, ...props }: Props,
    ref: React.Ref<HTMLInputElement>
  ): JSX.Element => {
    return (
      <>
        <Input ref={ref} style={{ textTransform: "lowercase" }} {...props} />
        {error && <P color="primary">{error}</P>}
      </>
    );
  }
);
