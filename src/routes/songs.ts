import { Router } from "express";
import * as songsCtrl from "../controllers/api/songs";

const router: Router = Router();

router.get("/", songsCtrl.getSongs);

router.post("/add-song", songsCtrl.addSong);

router.put("/edit-song/:id", songsCtrl.updateSong);

router.delete("/delete-song/:id", songsCtrl.deleteSong);

export default router;