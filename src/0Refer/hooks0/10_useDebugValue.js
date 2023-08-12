import {useEffect, useDebugValue, useState} from 'react';

export const useFetch = (url) => {
    useDebugValue(url);
    const [response, setResponse]=useState([]);
    const clown = 'Yes';
    useDebugValue(`crazy ${clown}`);
    const [error, setError] = useState(null);
    const [httpResponse,setHttpResponse] = useState();
    useDebugValue(
        httpResponse ? 'status code' + httpResponse.status : 'no response'
    );
    useDebugValue(error,(e)=>
        e ? `fetch failed due to ${e.message}`:'success'
    )
    useEffect(()=>{
        async function fetchFiles(){
            try{
                const response = await fetch(url);
                setHttpResponse(response);
                const json = await response.json();
                setResponse(json);
            }
            catch(error){
                setError(error);
            }
        }
        fetchFiles();
    },[setError,setResponse, url]);

    useDebugValue(response, (mp3s)=>
       mp3s.length>0?mp3s.map((mp3)=>mp3.label):'no mp3s loaded'
    );
    return [response,error];
}