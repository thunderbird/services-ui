export type CalendarItem = {
  key: number;
  label: string;
  checked: boolean;
};

// Utility types
export type Time<T> = {
  start: T;
  end: T;
};
export type TimeNumeric = Time<number>;
export type TimeFormatted = Time<string>;

export type SelectOption<T = number> = {
  label: string;
  value: T;
  fullLabel?: string;
};
export type SelectOptionBadges = {
  [key: string | number]: string | number;
};

export type Coloring = {
  border?: string;
  background?: string;
};

export type HTMLElementEvent = Event & {
  target: HTMLElement;
  currentTarget: HTMLElement;
};
export type HTMLInputElementEvent = Event & {
  target: HTMLInputElement;
  currentTarget: HTMLInputElement;
};
