import { NextResponse } from "next/server"
const nodemailer = require("nodemailer");

const sendotp = async (Email = process.env.userkanaam, Otp = "Thanks For Contacting..") => {
    const userkanaam = process.env.userkanaam
    const sabkapass = process.env.PASSWORD
    return new Promise(function (resolve, reject) {
        let transporter = nodemailer.createTransport({
            service: "outlook",
            auth: {
                user: userkanaam,
                pass: sabkapass
            },
        });

        const option = {
            from: userkanaam,
            to: Email,
            subject: "Contact from Portfolio",
            text: Otp,
        }
        resolve("success")
        // transporter.sendMail(option, async (error, info) => {
        //     if (info) {
        //         resolve("success")
        //     }
        //     else {
        //         reject(error)
        //     }
        // })
    })
}

export const POST = async (req) => {
    try {
        let reqBody = await req.json()
        if (reqBody.email) {
            if (/\S+@\S+\.\S+/.test(reqBody.email)) {
                await sendotp(reqBody.email)
                // console.log(reply)
            }
            else {
                return NextResponse.json({ success: false, error: "Please enter the valid email." })
            }
            // console.log(reqBody.email)
        }
        sendotp(undefined, JSON.stringify(reqBody)).then(() => {
            return NextResponse.json({ success: true }, { status: 200 })
        }).catch(()=>{
            return NextResponse.json({ success: false }, { status: 200 })
        })
        // console.log(result)
        // if (result)
    } catch (error) {
        // console.log(error)
        return NextResponse.json({ error }, { status: 500 })
    }
}