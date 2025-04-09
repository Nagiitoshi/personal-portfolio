import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { Line } from "react-bootstrap-icons";

export const Projects = () => {

    const projects = [
        {
            title: "E-commerce Moderno",
            description: "Design & Development",
            imgUrl: projImg1,
        },
        {
            title: "Landing Page",
            description: "Design & Development",
            imgUrl: projImg2,
            link: "https://nagi-barbershop.vercel.app/",
        },
        {
            title: "App Mobile de salão de beleza",
            description: "Design & Development",
            imgUrl: projImg3,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg1,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg2,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg3,
        },
    ];

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <h2>Recent <span style={{ color: 'rgb(230, 0, 230)' }}> Projects</span></h2>
                                    <p style={{ color: "rgb(255, 255, 255)" }}>
                                        🚀 Confira alguns dos meus projetos mais recentes, onde aplico minhas habilidades em desenvolvimento back-end e front-end para criar soluções eficientes e escaláveis.
                                        Utilizando tecnologias como{" "}
                                        <span style={{ color: "rgb(230, 0, 230)" }}>Java</span>,{" "}
                                        <span style={{ color: "rgb(230, 0, 230)" }}>Spring Boot</span>,{" "}
                                        <span style={{ color: "rgb(230, 0, 230)" }}>MySQL</span>,{" "}
                                        <span style={{ color: "rgb(230, 0, 230)" }}>Docker</span>,{" "}
                                        <span style={{ color: "rgb(230, 0, 230)" }}>Python</span>,{" "}
                                        <span style={{ color: "rgb(230, 0, 230)" }}>JavaScript</span> e{" "}
                                        <span style={{ color: "rgb(230, 0, 230)" }}>React</span>, busco desenvolver aplicações robustas, performáticas e intuitivas.
                                        Cada projeto reflete minha dedicação em criar sistemas que atendam às necessidades dos usuários, garantindo qualidade, segurança e uma ótima experiência.🚀
                                    </p>
                                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                            <Nav.Item>
                                                <Nav.Link eventKey="first">Tab 1</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="second">Tab 2</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="third">Tab 3</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                        <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                                            <Tab.Pane eventKey="first">
                                                <Row>
                                                    {
                                                        projects.map((project, index) => {
                                                            return (
                                                                <ProjectCard
                                                                    key={index}
                                                                    {...project}
                                                                />
                                                            )
                                                        })
                                                    }
                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="second">
                                                <h1 style={{
                                                    color: "rgb(201, 197, 255)",
                                                    textAlign: "center"
                                                }}>🛒   E-commerce Moderno com Next.js</h1>
                                                <p>
                                                    Este projeto é uma plataforma de e-commerce desenvolvida com Next.js, proporcionando alto desempenho e SEO otimizado. A estilização foi feita com TailwindCSS, garantindo um design responsivo e elegante. O sistema de pagamentos é totalmente integrado com Stripe, permitindo transações seguras e rápidas. Para a gestão de produtos e conteúdo, foi utilizado Sanity, um CMS headless flexível e eficiente.

                                                    🔧 Tecnologias utilizadas:
                                                    <span style={{ color: "rgb(230, 0, 230)" }}> Next.js</span>,{" "}
                                                    <span style={{ color: "rgb(230, 0, 230)" }}>BooTailwindCSS</span>,{" "}
                                                    <span style={{ color: "rgb(230, 0, 230)" }}>Stripe</span>,{" "}
                                                    <span style={{ color: "rgb(230, 0, 230)" }}>Sanity</span>,
                                                    🚀 Recursos principais:
                                                    ✅ Interface responsiva e otimizada
                                                    ✅ Sistema de checkout seguro com Stripe
                                                    ✅ Gerenciamento dinâmico de produtos com Sanity
                                                    ✅ Desempenho aprimorado com renderização SSR/ISR</p>
                                                <p>
                                                    <h1 style={{
                                                        color: "rgb(201, 197, 255)",
                                                        textAlign: "center"
                                                    }}>💈 Nagi's Barber - Landing Page para Barbearia</h1>
                                                    A Nagi's Barber é uma landing page moderna e elegante desenvolvida para uma barbearia estilosa. O projeto foi criado com foco em conversão, proporcionando uma navegação direta e uma seção de agendamento intuitiva para atrair novos clientes. A interface responsiva foi construída com <strong>HTML5, CSS3 e JavaScript</strong>, ideal para portfólios ou negócios locais.

                                                    🔧 Tecnologias utilizadas:
                                                    <span style={{ color: "rgb(230, 0, 230)" }}>HTML5</span>,{" "}
                                                    <span style={{ color: "rgb(230, 0, 230)" }}>CSS3</span>,{" "}
                                                    <span style={{ color: "rgb(230, 0, 230)" }}>JavaScript</span>

                                                    🚀 Recursos principais:
                                                    ✅ Layout moderno e responsivo<br />
                                                    ✅ Seção de serviços com imagens<br />
                                                    ✅ Depoimentos de clientes<br />
                                                    ✅ Formulário de agendamento funcional<br />
                                                    ✅ Foco em conversão e experiência do usuário
                                                </p>

                                                <h1 style={{
                                                    color: "rgb(201, 197, 255)",
                                                    textAlign: "center"
                                                }}> 💇‍♂️ Plataforma de Gestão para Salões de Beleza</h1>
                                                <p>Este projeto é uma solução moderna para salões de beleza, permitindo o gerenciamento eficiente de agendamentos, horários de atendimento, clientes e colaboradores. Além disso, a plataforma integra pagamentos via Gateway de Pagamento do Pagar.me, garantindo uma experiência segura e conveniente.

                                                    🛠 Tecnologias utilizadas:
                                                    <span style={{ color: "rgb(230, 0, 230)" }}>React</span>,
                                                    <span style={{ color: "rgb(230, 0, 230)" }}>Node.js</span>,
                                                    <span style={{ color: "rgb(230, 0, 230)" }}>MongoDB</span>,
                                                    <span style={{ color: "rgb(230, 0, 230)" }}>Redux</span>,
                                                    <span style={{ color: "rgb(230, 0, 230)" }}>Pagar.me</span>.
                                                </p>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="third">
                                                <h1 style={{ textAlign: "center", color: "rgb(201, 197, 255)" }}> 🚀 Explore mais! 🚀  </h1>
                                                <p style={{ color: "rgb(255, 255, 255)" }}>
                                                    Gostou dos projetos que viu? Existem muitos outros que demonstram minha experiência e habilidades em diversas áreas do desenvolvimento web. Se você quiser ver mais e descobrir como posso contribuir para seu próximo projeto,
                                                    <a href="https://github.com/Nagiitoshi" style={{ color: "rgb(0, 184, 230)", textDecoration: "underline" }}>
                                                        Acesse Meu Portfólio
                                                    </a> {" "} ou entre em contato comigo!!!</p>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Tab.Container>
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}></img>
        </section>
    )
}