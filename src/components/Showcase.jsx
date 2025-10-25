import { useGSAP } from "@gsap/react"
import { useMediaQuery } from "react-responsive"
import gsap from 'gsap'

const Showcase = () => {
    const isTablet = useMediaQuery({ query: '(max-width: 1024px)' })


    useGSAP(() => {
        if (!isTablet) {
            const timeline = gsap.timeline({
                scrollTrigger: {
                    trigger: '#showcase',
                    start: 'top top',
                    end: 'bottom top',
                    scrub: true,
                    pin: true,
                }
            })

            timeline.to('.mask img', {
                transform: 'scale(1.1)'
            }).to('.content', { opacity: 1, y: 0, ease: 'power1.in' })
        }
    }, [isTablet])

    return (
        <section id="showcase">
            <div className="media">
                <video src="/videos/game.mp4" loop muted autoPlay playsInline />
                <div className="mask">
                    <img src="/mask-logo.svg"/>
                </div>
            </div>

            <div className="content">
                <div className="wrapper">
                    <div className="lg:max-w-md">
                        <h2>Chip Rocket</h2>

                        <div className="space-y-5 mt-7 pe-10">
                            <p>
                                 {" "}
                                <span className="text-white">
                                    M4, a nova geração do chip Apple Silicon
                                </span>
                                . O chip M4 torna tudo possível.
                            </p>
                            <p>
                                Ele impulsiona a inteligência Apple no iPad Pro, para que você escreva, crie e realize mais com leveza. Tudo em um design incrivelmente fino, leve e potente.
                            </p>
                            <p>
                                Um novo motor de tela entrega precisão impressionante, fidelidade de cor e brilho intenso. E a nova geração de CPU, com ray tracing acelerado por hardware, traz gráficos de nível de console ao alcance dos seus dedos.
                            </p>
                            <p className="text-primary">Saiba mais sobre a Inteligência Apple</p>
                        </div>
                    </div>

                    <div className="max-w-3xs space-y-14">
                        <div className="space-y-2">
                            <p>Até </p>
                            <h3>4x mais rápido</h3>
                            <p>no desempenho profissional de renderização que o chip M2</p>
                        </div>
                        <div className="space-y-2">
                            <p>Até </p>
                            <h3>1,5x mais rápido</h3>
                            <p>no desempenho da CPU que o chip M2</p>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )

}

export default Showcase