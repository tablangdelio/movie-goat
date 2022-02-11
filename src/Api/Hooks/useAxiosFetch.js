import { useState, useEffect } from 'react';
import { axios } from 'axios';

const useAxiosFetch = (url, {}) => {
    const [data, setData] = useState([]);
    const [isError, setError ] = useState(null);
    const [isLoading, setLoading] = useState(null);

    useEffect(() => {
        let isMounted = true;
        const source = axios.CancelToken.source();

        const fetchData  = async (url) => {
            setLoading(true);
            try{
              const response =  await axios.get(url,{
                  CancelToken: source.token
              });

              if(isMounted){
                  setData(response.data);
              }
           
            } catch (err) {
                if(isMounted){
                    
                }
            }
        } 

    },[]);

    return(
        <></>
    );    
}

export default useAxiosFetch;