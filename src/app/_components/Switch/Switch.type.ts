export type SwitchProps = {
  isChecked?: boolean;
  isDisabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  dimensions?: "tiny" | "small" | "medium" | "standard" | "large";
  color?: "default" | "primary" | "secondary";
  className?: string;
};
