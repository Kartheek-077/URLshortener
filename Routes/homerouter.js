import express from "express"
import {
    handleCreateUrl,
    handleHomepage,
    handleGetImg
} from "../Controller/Homeroute.js"

const router = express.Router();

router.route("/")
      .get(handleHomepage)
      .post(handleCreateUrl,handleGetImg)
    
export default router;
