import { Router } from 'express';
import recipe from './recipe';

const router: Router = Router();
router.use('/recipe', recipe);

export default router;