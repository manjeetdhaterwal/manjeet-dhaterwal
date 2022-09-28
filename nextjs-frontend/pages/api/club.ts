import type {NextApiRequest , NextApiResponse } from 'next'
import sgMail from '@sendgrid/mail'

sgMail.setApiKey(process.env.SENDGRID_API_KEY!)

export default async(req: NextApiRequest, res: NextApiResponse)=> {
    if(req.method === 'POST')
    {
        const {email} = req.body
        const msg = {
            to: 'manjeet.dhaterwal@gmail.com',
            from: 'manjeetdhaterwal13@gmail.com',
            subject: `New member added to your club | Portfolio Website`,
            text: `${email}`,
            html:   `Hi Manjeet, <br/><br/><strong>New Member's Email: ${email}</strong><br/><br/>Thanks and regards`
        }

        try {
            await sgMail.send(msg);
            res.status(200).json({sucess: true})
        } catch (err) {
            res.status(200).json({sucess: false})
        }
    }
  }
  