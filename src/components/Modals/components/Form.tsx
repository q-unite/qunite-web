import { useRef } from "react";
import { Input } from "../../common/ui";

interface Props {
  onSubmitHandler: () => void;
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
  placeholder: string;
}

export const Form = ({
  text,
  setText,
  onSubmitHandler,
  placeholder,
}: Props): JSX.Element => {
  const ref = useRef<HTMLInputElement | null>(null);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmitHandler();
      }}
    >
      <Input
        placeholder={placeholder}
        ref={ref}
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{ width: "100%" }}
      />
    </form>
  );
};
