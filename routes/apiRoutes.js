const express = require('express');
const router = express.Router();

const authRoutes = require('./authRoutes');
const adminRoutes = require('./adminRoutes');
const userRoutes = require('./userRoutes');
const driverRoutes = require('./driverRoutes');

router.use('/auth', authRoutes);
router.use('/admin', adminRoutes);
router.use('/user', userRoutes);
router.use('/driver', driverRoutes);

module.exports = router;
