import dotenv from 'dotenv';
dotenv.config({ path: './.env' });
import express from 'express';
import cors from 'cors';
import { Resend } from 'resend';

const app = express();
const port = 3000;

// Habilitar CORS para todas las solicitudes
app.use(cors()); // Esto permite todas las solicitudes desde cualquier origen
// Si solo quieres permitir solicitudes de localhost:4321, usa lo siguiente:
// app.use(cors({ origin: 'http://localhost:4321' }));

app.use(express.json()); // Para que Express pueda manejar JSON

const resend = new Resend(process.env.RESEND_API_KEY); // Usa tu clave API de Resend

// Ruta para manejar el envío de correos
app.post('/api/sendEmail', async (req, res) => {
  const { to, from, subject, html } = req.body;

  try {
    const response = await resend.emails.send({
      from:'Acme <onboarding@resend.dev>',
      to,
      subject,
      html,
    });

    res.status(200).json({ success: true, data: response });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Configurar para servir tu frontend de Astro (si lo deseas)
app.use(express.static('dist'));

// Iniciar el servidor Express
app.listen(port, () => {
  console.log(`Servidor Express corriendo en http://localhost:${port}`);
});