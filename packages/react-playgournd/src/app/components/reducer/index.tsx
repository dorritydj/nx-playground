import { useEffect, useLayoutEffect, useReducer, useState } from 'react';

function init(initialStr: string) {
  return initialStr.toUpperCase();
}

function reducer(state: string, action: Record<string, string>) {
  switch (action['type']) {
    case 'upper':
      return state.toUpperCase();
    case 'lower':
      return state.toLowerCase();
    default:
      throw new Error('need type');
  }
}

export function ReducerDemo({ initialStr }: Record<string, string>) {
  const [isUpper, setIsUpper] = useState(true);
  const [state, dispatch] = useReducer(reducer, initialStr, init);

  useLayoutEffect(() => {
    setTimeout(() => {
      dispatch({
        type: isUpper ? 'lower' : 'upper',
      });
      setIsUpper(!isUpper);
    }, 3_000);
  }, [state, isUpper]);

  return <div>{state}</div>;
}
