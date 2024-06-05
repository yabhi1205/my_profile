import { NextResponse } from "next/server"
const nodemailer = require("nodemailer");

const sendotp = async (Email = process.env.userkanaam, Otp = "Thanks For Contacting..") => {
    const userkanaam = process.env.userkanaam
    const sabkapass = process.env.PASSWORD
    return new Promise(function (resolve, reject) {
        let transporter = nodemailer.createTransport({
            service: "gmail",
            host: "smtp.gmail.com",
            port: 587,
            secure: false,
            auth: {
                user: userkanaam,
                pass: sabkapass
            },
        });

        const option = {
            from: "support@abhinavyadav.xyz",
            to: Email,
            subject: "Contact from Portfolio",
            text: Otp,
        }
        // resolve(true)
        transporter.sendMail(option, async (error, info) => {
            if (info) {
                resolve(true)
            }
            else {
                reject(false)
            }
        })
    })
}

export const POST = async (req) => {
    try {
        let reqBody = await req.json()
        if (reqBody.email) {
            if (/\S+@\S+\.\S+/.test(reqBody.email)) {
                await sendotp(reqBody.email)
            }
            else {
                return NextResponse.json({ success: false, error: "Please enter the valid email." })
            }
        }
        let output = await sendotp(undefined, JSON.stringify(reqBody))
        return NextResponse.json({success: output?true:false})
        // if (result)
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 })
    }
}