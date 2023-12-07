'use client';

import { apisPorts } from '@/data/ports';
import { Combobox } from '@/components/ui/combobox';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import { useHome } from './hooks/home.hook';
import { cn } from '@/lib/utils';

export default function Home() {
  const { currentPort, data, handleChangePort, isLoading, isSucessfull } =
    useHome();

  return (
    <section className="flex w-full flex-col items-start gap-6">
      <Combobox
        options={apisPorts as unknown as ComboboxOptions}
        defaultOption={apisPorts.at(0)}
        label="Selecione uma API"
        onSelectOption={handleChangePort as any}
        isLoading={isLoading}
      />
      {isLoading ? (
        <span className="text-lg">Carregando...</span>
      ) : (
        <div className="flex flex-col items-start gap-2 w-full">
          <h1>Resultados para a porta: {currentPort}</h1>
          <Card className="w-1/2">
            <CardHeader>
              <CardTitle
                className={cn({
                  'text-blue-500': isSucessfull,
                  'text-red-500': !isSucessfull,
                })}
              >
                Resultado: {isSucessfull ? '👌' : '👎'}
              </CardTitle>
              <CardDescription>
                http://82.180.136.148:{currentPort}/api/health
              </CardDescription>
            </CardHeader>
            <CardContent>
              <pre className="p-2 border text-sm font-bold">
                {JSON.stringify(data, null, 2)}
              </pre>
            </CardContent>
          </Card>
        </div>
      )}
    </section>
  );
}
