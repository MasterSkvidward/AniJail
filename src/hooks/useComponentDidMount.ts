import {useEffect, useRef} from 'react';
import { TypeOfExpression } from 'typescript';

export const useComponentDidMount = () => {
    const ref = useRef<boolean>(false);

    useEffect(() => {
        ref.current = true;
    }, []);

    return ref.current;
  };