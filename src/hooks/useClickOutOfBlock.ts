import { useEffect } from "react";

/**
 * This hook is using to close some block if user cliks out of it.
 * You must to set ref to the elemnt you want to handle and define useState with function to set visibility
 */

export const useClickOutOfBlock = (
  ref: React.MutableRefObject<HTMLDivElement | null>,
  setVisible: React.Dispatch<React.SetStateAction<boolean>>
): void => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setVisible(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [ref, setVisible]);
};
