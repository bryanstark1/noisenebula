import { Router } from "express";
import * as FavoritesCtrl from "../controllers/api/favorites";

const router: Router = Router();

// All paths start with /favorites

// GET All favorites
router.get("/", FavoritesCtrl.getFavorites);

export default router;