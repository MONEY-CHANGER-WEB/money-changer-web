import express from "express"
import cors from "cors"
import nodemailer from "nodemailer"
import 'dotenv/config'

const app = express()
app.use(cors())
app.use(express.json())

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'rahmanrafi416@gmail.com', 
        pass: process.env.GMAIL_PASS
    }
})

app.post('/api/send-email', async (req, res) => {
    const { name, email, number, message } = req.body
    
    if (!name || !email || !number || !message) {
        return res.status(400).json({ error: 'Harap isi semua kolom!' })
    }

    const mailOptions = {
        from: `"Website Contact Form" <rahmanrafi416@gmail.com>`, 
        to: 'nakanom858@gmail.com', 
        replyTo: email,             
        subject: `Pesan Baru dari ${name} (Money Changer Inquiry)`,
        text: `Anda menerima pesan baru dari ${name} (${email}): \n\n${message}`,
        html: `
            <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee;">
                <h2>Ada Pesan Baru Lewat Website!</h2>
                <p><strong>Nama Pengirim:</strong> ${name}</p>
                <p><strong>Email Pengirim:</strong> ${email}</p>
                <p><strong>Nomor Pengirim:</strong> ${number}</p>
                <p><strong>Isi Pesan:</strong></p>
                <blockquote style="background: #f9f9f9; padding: 15px; border-left: 5px solid #ccc;">
                    ${message}
                </blockquote>
            </div>
        `
    }

    try {
        await transporter.sendMail(mailOptions)
        res.status(200).json({ success: true, message: "Email berhasil terkirim via Gmail!" })
    } catch (error) {
        console.error("Nodemailer Error: ", error)
        res.status(500).json({ error: 'Gagal mengirim email lewat server backend.' })
    }
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server backend berjalan lancar di port ${PORT}`)
})