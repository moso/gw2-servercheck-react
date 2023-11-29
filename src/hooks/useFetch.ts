/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';

export const useFetch = <T>( url: string )  => {
    const [data, setData] = useState<T | null>(null)
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [error, setError] = useState(null)

    const getData = async (url:string) => {
        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error('could not fetch the data from the resource');
            const data = await response.json();
            setData(data);
        } catch (error: any) {
            setIsLoading(false);
            setError(error);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        getData(url)
    }, [url])

    return {data, isLoading, error}
}
