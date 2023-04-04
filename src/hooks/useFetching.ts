import { useState } from "react";


export interface IFetch {
    fetching: () => void,
    isLoading: boolean,
    error: string
}

export function useFetching(callback: () => void): [()=>void, boolean, string] {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState('');
    
    async function fetching(...args: any): Promise<void>{
        // try {
        //     setIsLoading(true);
        //     await callback(...args);
        // } catch (e:any) {
        //     setError(e.message);
        // } finally {
        //     setIsLoading(false);
        // }
    }

    return [fetching, isLoading, error]
}