import { useEffect, useState } from 'react'

export default function useWindowDimension() {
    let [dimensions, setDimension] = useState({
        height: window.innerHeight,
        width: window.innerWidth,
        orientation: window.matchMedia('(orientation:landscape)').matches
    });

    function handleResize() {
        setDimension({
            height: window.innerHeight,
            width: window.innerWidth,
            orientation: window.matchMedia('(orientation:landscape)').matches
        });
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () =>
            window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        window.addEventListener('orientationchange', handleResize);
        return () =>
            window.removeEventListener('resize', handleResize);
    }, [])

    return dimensions
}

