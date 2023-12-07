import { EnvType } from '@/config/env.config';

declare global {
  export type Maybe<T> = T | null | undefined;

  export type WithChildren<T extends Record<string, any> = {}> = T & {
    children: React.ReactNode;
  };

  namespace NodeJS {
    export interface ProcessEnv extends EnvType {}
  }

  export interface iComboboxOption {
    label: string;
    value: string | number;
  }

  export type ComboboxOptions = iComboboxOption[];
}
