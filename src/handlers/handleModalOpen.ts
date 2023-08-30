export const handleModalOpen = (
  event: React.MouseEvent<HTMLElement>,
  setIsShown: React.Dispatch<React.SetStateAction<boolean>>
): void => {
  event.stopPropagation();
  setIsShown(true);
};
