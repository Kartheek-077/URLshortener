import URL from "../Model/url.js"

export async function handleGetUrlbyId (req,res){
    const url = await URL.findOneAndUpdate({ shortId: req.params.id },
        {
            $push: {
                vishistory: {
                    timestamp: Date.now()
                }
            }
        })
    if (!url) return res.status(404).json({ msg: "Short URL not found" });
    res.redirect(url.redirectUrl);
}

export async function handleanalytics (req,res){
    const url = await URL.findOne({ shortId: req.params.id });
    if (!url) return res.status(404).json({ msg: "Short URL not found" });
    res.json({ totalClicks: url.vishistory.length,visHistory : url.vishistory});
}
