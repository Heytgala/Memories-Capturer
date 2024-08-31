import express from 'express';
const router = express.Router();
router.get('/', (req, res) => {
    res.send('This WORKS!');
});

export default router;