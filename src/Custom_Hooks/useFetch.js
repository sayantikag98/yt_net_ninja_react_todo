import { useState, useEffect } from "react";

// const dataFetchFunction = async (url, setData, setError, setIsPending, abortController) => {
//     try{
//         const response = await fetch(url, {signal : abortController.signal});
//         const data = await response.json();
//         setData(data);
//         setError(null);
//         setIsPending(false);
//     }
//     catch(err){
//         if(err.name === "AbortError")
//             console.log("Fetch aborted"); // fetch when aborted throws an abort error
//         else{
//             setData(null);
//             setError(err.message);
//             setIsPending(false);
//         }      
//     }
// };


export const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(true);
    
    useEffect(() => {
        const abortController = new AbortController();
        fetch(url, {signal:abortController.signal})
        .then(response => response.json())
        .then(data => {
            setData(data);
            setError(null);
            setIsPending(false);
        })
        .catch(err => {
            if(err.name === "AbortError")
                console.log("Fetch aborted"); // fetch when aborted throws an abort error
            else{
                setData(null);
                setError(err.message);
                setIsPending(false);
            } 
        });
        return () => abortController.abort();
    }, [url]);

    // use url as the dependency because as url changes then the function 
    // inside the useEffect() should run

    return ({data, error, isPending});
};