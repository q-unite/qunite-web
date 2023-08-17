import authStore from "../../../stores/auth-store";

export const handleLogout = (): void => {
  authStore.getState().logout();
  window.location.reload();
};
