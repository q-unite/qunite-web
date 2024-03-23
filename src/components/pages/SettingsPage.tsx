import { SettingsForm } from "../Forms/SettingsForm/SettingsForm";

const SettingsPage = (): JSX.Element => {
  return (
    <section
      style={{
        display: "flex",
        borderRadius: "15px",
        background: "var(--white)",
      }}
    >
      <SettingsForm />
    </section>
  );
};

export default SettingsPage;
