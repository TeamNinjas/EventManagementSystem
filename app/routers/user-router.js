'use strict';

module.exports = function(app, express, data) {
    let userRouter = new express.Router(),
        authController = require('../controllers/auth-controller')(data),
        userController = require('../controllers/user-controller')(data);

    userRouter
        .get('/login', userController.getLogin)
        .post('/login', authController.loginLocal)
        .get('/auth/facebook', authController.loginFacebook())
        .get('/auth/facebook/callback', authController.loginFacebookCallback())
        .get('/logout', authController.logout)
        .get('/register', userController.getRegister)
        .post('/register', authController.register)
        .get('/profile', userController.getProfile)
        .post('/profile', userController.updateProfile)
        .get('/profile/avatar', userController.getProfileAvatar)
        .post('/profile/avatar', userController.uploadProfileAvatar)
        .get('/unauthorized', userController.getUnauthorized)
        .get('/approvals', userController.getAllEventsForApproval)
        .post('/approvals', userController.updateEvent)
        .get('/contact', userController.getContactForm);

    app.use(userRouter);
};