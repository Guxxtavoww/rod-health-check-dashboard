export const apisPorts = [
  {
    label: 'Banky :3334',
    value: '3334',
  },
  {
    label: 'Escriba :3338',
    value: '3338',
  },
] as const;

export type Values = (typeof apisPorts)[number]['value'];
