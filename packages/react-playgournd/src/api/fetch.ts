import { useEffect, useState } from 'react';
import { BattleTypes, Effectiveness, Types } from './data';

const delay = 5;

async function fakeFetchTypes(): Promise<typeof Types> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(Types);
    }, delay);
  });
}

export function useFetchTypes(): [string[], boolean] {
  const [result, setResult] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTypes() {
      try {
        const types = await fakeFetchTypes();
        setResult(types);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    }

    fetchTypes();
  }, []);

  return [result, loading];
}

async function fakeFetchAttackingMultipliers(
  type: string
): Promise<Effectiveness[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(Object.values(BattleTypes?.[type]?.attackingMultiplier ?? {}));
    }, delay);
  });
}

export function useFetchAttackingMultipliers(
  type: string
): [Effectiveness[], boolean] {
  const [result, setResult] = useState<Effectiveness[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMultipliers() {
      try {
        const multis = await fakeFetchAttackingMultipliers(type);
        setResult(multis);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    }

    fetchMultipliers();
  }, []);

  return [result, loading];
}
