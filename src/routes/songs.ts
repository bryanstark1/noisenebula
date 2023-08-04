import { Router } from "express";
import * as songsCtrl from "../controllers/api/songs";

const router: Router = Router();

// GET All songs
router.get("/", songsCtrl.getSongs);
// GET One song
router.get('/:id', songsCtrl.getSong)
// POST New song
router.post("/add", songsCtrl.addSong);
// PUT Edit song
router.put("/edit/:id", songsCtrl.updateSong);
// DELETE song
router.delete("/delete/:id", songsCtrl.deleteSong);

export default router;