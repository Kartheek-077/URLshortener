import express from "express"
import {
    handleanalytics,
    handleGetUrlbyId
} from "../Controller/userroute.js"

const router = express.Router();

router.route("/analytics/:id")
      .get(handleanalytics);

router.route("/:id")
      .get(handleGetUrlbyId);

export default router;
