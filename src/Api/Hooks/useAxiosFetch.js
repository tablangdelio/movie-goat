import { useState, useEffect}  from 'react';
import axios from "axios";



const useAxiosFetch = (dataUrl) => {
    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(null);
    const [isError, setError] = useState(null);


    useEffect(() => {
        let isMounted = true;
        const source = axios.CancelToken.source();

        const fetchData = async (url) => {
            setLoading(true);
            try{
                const response = await axios.get(url, {
                    cancelToken: source.token
                });
                if (isMounted) {
                    setData(response.data);
                    setError(null);
                }
            } catch (err) {
                if (isMounted) {
                    setError(err);
                    setData([]);
                }

            }   finally {
                isMounted && setTimeout(() => setLoading(false), 2000);
            } 
        }

        fetchData(dataUrl);

        const cleanup = () => {
            console.log('clean up function');
            isMounted = false;
            source.cancel();  
        }
        return cleanup;
    }, [dataUrl]);

    return { data, isError, isLoading }
}

export default useAxiosFetch;