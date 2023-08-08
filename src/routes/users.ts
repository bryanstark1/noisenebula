import { Router } from "express";
import * as UsersCtrl from '../controllers/api/users';

const router: Router = Router();


// POST new user
router.post('/signup', UsersCtrl.create);
// POST login existing user
router.post('/login', UsersCtrl.login);

export default router;