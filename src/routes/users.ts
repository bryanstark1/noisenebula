import { Router } from "express";
import * as UsersCtrl from '../controllers/api/users';

const router: Router = Router();


// POST new user
router.post('/signup', UsersCtrl.create);
// POST login existing user

export default router;