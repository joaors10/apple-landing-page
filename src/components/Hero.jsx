import { useEffect, useRef } from "react"

const Hero = () => {
    const videoRef = useRef();

    useEffect(() => {
        if(videoRef.current) videoRef.current.playbackRate = 2;
    }, []);

    return (
        <section id="hero">
            <div>
                <h1>MacBook Pro</h1>
                <img src="/title.png" alt="MacBook Title" />
            </div>

            <video ref={videoRef} src="/videos/hero.mp4" autoPlay muted playsInline></video>

            <button>Comprar</button>

            <p>A partir de R$ 9.099 ou em até 12x de R$ 749 sem juros</p>
        </section>
    )
}


export default Hero