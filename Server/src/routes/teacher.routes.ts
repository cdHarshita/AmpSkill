// src/routes/teacher.routes.ts
import { Router } from 'express';
import { TeacherController } from '../controllers/teacher.controller';
import { AuthMiddleware } from '../middlewares/auth.middleware';
import { isTeacher } from '../middlewares/isTeacher.middleware';

const router = Router();

router.use(AuthMiddleware);
router.use(isTeacher);

router.post('/dashboard/profile', TeacherController.profile);
router.post('/dashboard/batch/update', TeacherController.updateBatch);
router.post('/dashboard/batch/view', TeacherController.viewBatches);
router.post('/dashboard/batch/getStudents', TeacherController.getStudentsOfBatch);
router.post('/dashboard/test/uploadTest', TeacherController.uploadTest);
router.post('/dashboard/test/upload/addQue', TeacherController.addSingleQues);
router.put('/dashboard/test/upload/updateQue', TeacherController.updateSingleQues);

export default router;