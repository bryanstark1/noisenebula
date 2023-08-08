import { Router } from "express";
import * as SongsCtrl from "../controllers/api/songs";

const router: Router = Router();

// GET All songs
router.get("/", SongsCtrl.getSongs);
// GET One song
router.get('/:id', SongsCtrl.getSong)
// POST New song
router.post("/add", SongsCtrl.addSong);
// PUT Edit song
router.put("/:id", SongsCtrl.updateSong);
// DELETE song
router.delete("/:id", SongsCtrl.deleteSong);

export default router;