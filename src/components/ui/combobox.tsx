'use client';

import React, { useId, useState } from 'react';
import { Check, ChevronsUpDown } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from '@/components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

interface iComboboxProps {
  options: ComboboxOptions;
  placeholder?: string;
  popoverAlign?: 'center' | 'start' | 'end';
  defaultOption?: Maybe<iComboboxOption>;
  onSelectOption?: (value: string | number) => void;
  label?: string;
  buttonClassName?: string;
  popoverContentClassName?: string;
  buttonContainerClassName?: string;
  isLoading?: boolean;
  isDisabled?: boolean;
}

export function Combobox({
  options,
  placeholder,
  popoverAlign,
  defaultOption,
  onSelectOption,
  label,
  buttonClassName,
  popoverContentClassName,
  buttonContainerClassName,
  isDisabled,
  isLoading,
}: iComboboxProps) {
  const id = useId();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(defaultOption?.value.toString() || '');

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <div
          className={cn(
            'flex flex-col items-start gap-2 w-full max-w-[200px]',
            buttonContainerClassName
          )}
        >
          {label ? (
            <label htmlFor={id} className="text-xs text-zinc-500 font-bold">
              {label}
            </label>
          ) : null}
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className={cn(
              'w-full max-w-[200px] justify-between',
              buttonClassName
            )}
            id={id}
            disabled={isDisabled || isLoading}
          >
            {value
              ? options.find((option) => option.value === value)?.label
              : placeholder || 'Selecione'}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </div>
      </PopoverTrigger>
      <PopoverContent
        className={cn('w-full max-w-[200px] p-0', popoverContentClassName)}
        align={popoverAlign}
      >
        <Command>
          <CommandInput
            placeholder={placeholder || 'Selecione'}
            inputMode="search"
          />
          <CommandEmpty>Sem resultados</CommandEmpty>
          <CommandGroup>
            {options.map((option, index) => (
              <CommandItem
                key={index}
                value={option.value.toString()}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? '' : currentValue);
                  onSelectOption?.(
                    Number.isNaN(+currentValue) ? currentValue : +currentValue
                  );
                  setOpen(false);
                }}
              >
                <Check
                  className={cn(
                    'mr-2 h-4 w-4',
                    value === option.value ? 'opacity-100' : 'opacity-0'
                  )}
                />
                {option.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
