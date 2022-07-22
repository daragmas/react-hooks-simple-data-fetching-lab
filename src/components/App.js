// create your App component here
import {useState, useEffect} from "react";

const App = ()=>{
    const [imgSrc, setImgSrc] = useState('')

    useEffect(()=>{
        fetch('https://dog.ceo/api/breeds/image/random')
            .then((res)=>res.json())
                .then((json)=>setImgSrc(json.message))
    },[])

    if (!imgSrc) return <p>Loading</p>

    return(
        <div>
            <img src={imgSrc} alt='A Random Dog'/>
        </div>
    )
}

export default App