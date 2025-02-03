require('dotenv').config();
const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();


app.use(cors({
    origin: "https://endil-portfolio.vercel.app/",
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"]
}));

app.use(express.json());
app.use("/", router);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server Running on port ${PORT}`));

console.log("Email User:", process.env.EMAIL_USER);
console.log("Email Pass:", process.env.EMAIL_PASS ? " Configurado" : " Não Configurado");

const contactEmail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    },
});

contactEmail.verify((error) => {
    if (error) {
        console.log("Erro ao conectar ao servidor de e-mail:", error);
    } else {
        console.log("Pronto para enviar e-mails!");
    }
});

// 🔹 Rota de contato
router.post("/contact", (req, res) => {
    const { firstName, lastName, email, message, phone } = req.body;
    const name = `${firstName} ${lastName}`;

    const mail = {
        from: name,
        to: process.env.EMAIL_USER,
        subject: "Novo contato no portfólio!",
        html: `
           <p><strong>Nome:</strong> ${name}</p>
           <p><strong>Email:</strong> ${email}</p>
           <p><strong>Telefone:</strong> ${phone}</p>
           <p><strong>Mensagem:</strong> ${message}</p>
        `,
    };

    contactEmail.sendMail(mail, (error) => {
        if (error) {
            console.error("Erro ao enviar e-mail:", error);
            res.status(500).json({ success: false, message: "Erro ao enviar e-mail, tente novamente." });
        } else {
            console.log("E-mail enviado com sucesso!");
            res.json({ success: true, message: "Mensagem enviada com sucesso!" });
        }
    });
});
