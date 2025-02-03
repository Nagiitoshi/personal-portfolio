import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import { MailchimpForm } from "./Mailchimpform";

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <MailchimpForm />
                    <Col size={12} sm={6}>
                        <img src={logo} alt="Logo" />
                    </Col>
                    <Col size={12} sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/endil-igor/" target="_blank" rel="noopener noreferrer"><img src={navIcon1} alt="" /></a>
                            <a href="https://wa.me/+5516991719949" target="_blank" rel="noopener noreferrer"><img src={navIcon2} alt="" /></a>
                            <a href="https://github.com/Nagiitoshi" target="_blank" rel="noopener noreferrer"><img src={navIcon3} alt="" /></a>
                        </div>
                        <p>Copyright 2025. All Rights Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}