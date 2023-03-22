import { useEffect, useState } from "react";


const useClientCheck = () => {
    const [isClient, setIsClient] = useState<boolean>(false);
    useEffect(() => {
        setIsClient(true);
    }, []);
    return isClient;
}


export {
    useClientCheck
}