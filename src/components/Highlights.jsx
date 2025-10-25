import { useGSAP } from "@gsap/react"
import { useMediaQuery } from "react-responsive"
import gsap from "gsap"

const Highlights = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 1024px)' })

    useGSAP(() => {
        gsap.to(['.left-column', '.right-column'], {
            scrollTrigger: {
                trigger: '#highlights',
                start: isMobile ? 'bottom bottom' : 'top center'
            },
            y: 0,
            opacity: 1,
            stagger: 0.5,
            duration: 1,
            ease: 'power1.inOut'
        })
    })


    return(
        <section id="highlights">
            <h2>Esse é o melhor momento para fazer um upgrade.</h2>
            <h3>Veja tudo o que vem com o novo MacBook Pro.</h3>
            
            <div className="masonry">
                <div className="left-column">
                    <div>
                        <img src="/laptop.png" alt="Laptop" />
                        <p>Execute tarefas complexas até 9,8x mais rápido.</p>
                    </div>
                    <div>
                        <img src="/sun.png" alt="Sun" />
                        <p>Uma deslumbrante <br />
                            tela Liquid Retina <br />
                            XDR.</p>
                    </div>
                </div>
                <div className="right-column">
                    <div className="apple-gradient">
                        <img src="/ai.png" alt="AI" />
                        <p>Projetado para <br />
                            <span>Apple Intelligence.</span></p>
                    </div>
                    <div>
                        <img src="/battery.png" alt="battery" />
                        <p>Até 
                            <span className="green-gradient">{' '}14 horas a mais{' '}</span>
                            de bateria. 
                            <span className="text-dark-100">{' '}(Até 24 horas no total.)</span></p>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Highlights