import cors from "cors"
import express from "express"
import 'dotenv/config'
import MailJet from "node-mailjet"
const app = express()

app.use(cors())
app.use(express.json())

const mailjet = MailJet.apiConnect(
    process.env.MJ_APIKEY_PUBLIC,
    process.env.MJ_APIKEY_PRIVATE
)

app.post('/api/send-email',async (req, res)=>{
    const {name,email,message} = req.body
    if(!name || !email || !message){
        return res.status(400).json({error: 'Missing required fields: name, email, or message.'})
    }
    try{
        const result = await mailjet.post('send', {version: 'v3.1'}).request({
            Message: [
                {
                    From:{
                        Email: "rahmanrafi416@gmail.com",
                        Name: "Contact Form" 
                    },
                    To:[
                        {
                            Email: "rahmanrafi416@gmail.com",
                            Name: "Admin"
                        }
                    ],
                    Subject: `New Money Changer from ${name}`,
                    TextPart: `You received a message from ${name} (${email}): \n\n${message}`,
                    HtmlPart: `
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                     <p><strong>Message:</strong> ${message}</p>
                    `
                }
            ]
        })
        res.status(200).json({success: true, message: "Email send successfully!",data: result.body})
    }catch(error){
        console.error("Mailjet API Error: ", error)
        res.status(500).json({ error: 'Failed to process email delivery via Mailjet.' });
    }
})

const PORT = process.env.PORT || 5000

app.listen(PORT, ()=>{
    console.log("server is running " + PORT);
})

