export type SelectOption = {
  label: string;
  value: string;
};

export interface DisabledProps {
  disabled?: boolean;
}

export type ApiResponse<T> = {
  data: T;
  ok: boolean;
};
