import URL from "../Model/url.js"
import shortid from "shortid";
import QRCode from "qrcode";

export async function handleHomepage(req,res){
    res.render("index.ejs");
}

export async function handleCreateUrl(req, res, next) {
    try {
        const body = req.body;
        const shortID = shortid();
        if (!body.url) {
            return res.status(400).json({ msg: "All fields are required" });
        }
        const url = await URL.findOne({ redirectUrl: body.url });
        if (url) {
            return res.render("index.ejs", {
                data: `http://localhost:3000/user/${url.shortId}`,
                qrCode: url.qrCode,
                msg: "URL already exists"
            });
        }
        req.shorturl = `http://localhost:3000/user/${shortID}`;
        req.qrurl = body.url;
        req.shortID = shortID;
        next();
    } catch (err) {
        console.log(err);
        res.status(500).json({ msg: "Internal Server Error" });
    }
}

export async function handleGetImg(req, res) {
    try {
        const qrurl = req.qrurl;
        const shorturl = req.shorturl;
        const shortID = req.shortID;
        const qrCode = await QRCode.toDataURL(qrurl);

        await URL.create({
            shortId: shortID,
            redirectUrl: qrurl,
            qrCode: qrCode,
            vishistory: []
        });

        res.render("index.ejs", {
            data: shorturl,
            qrCode: qrCode,
        });
        
    } catch (err) {
        console.log(err);
        res.status(500).json({
            msg: "Internal Server Error"
        });
    }
}