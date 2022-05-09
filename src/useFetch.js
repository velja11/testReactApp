import {useState,useEffect} from 'react'


const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [isPendinig, setPending]=useState(true);
    const [error, setError] = useState(false)

    useEffect(()=>{
            setTimeout(()=>{
                fetch(url).then(res => {
                        if(!res.ok){
                            throw new Error("something went wrong")
                        }
                            return res.json();
                            }).then(data => {
                                    console.log(data);
                                    setPending(false);
                                    setError(null);
                                    setData(data);
                            }).catch(err => {
                                    setError(err.message);
                                    setPending(false);
                             })
                

            }, 1000)
        
            

                },[url])

        return {data, isPendinig, error}
}
 
export default useFetch;