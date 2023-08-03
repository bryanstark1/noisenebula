import { Router } from "express";
import { getSongs, addSong, updateSong, deleteSong } from "../controllers/songs";

const router: Router = Router();

router.get("/songs", getSongs);

router.post("/add-song", addSong);

router.put("/edit-song/:id", updateSong);

router.delete("/delete-song/:id", deleteSong);

export default router;