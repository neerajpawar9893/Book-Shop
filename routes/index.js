var express = require('express');
var router = express.Router();

const isAuth = require('../middleware/isAuth');

const authController = require('../controller/auth');
const shopController = require('../controller/shop');
const adminController = require('../controller/admin');

/* GET home page. */
router.get('/', authController.getLogin);

router.post('/', authController.postLogin);

router.get('/signup', authController.getSignup);

router.post('/signup', authController.postSignup);

router.post('/logout', authController.postLogout);

router.get('/product', shopController.getShop);


router.get('/product/:prodsId',  shopController.getProduct);

router.get('/cart', isAuth, shopController.getCart);

router.post('/cart', isAuth, shopController.postCart);

router.post('/delete-cart', isAuth, shopController.postDeleteCart);

router.get('/checkout', isAuth, shopController.getCheckout);

router.get('/order', isAuth, shopController.getOrder);

router.post('/creat-order', isAuth, shopController.postOrder);

router.get('/addProduct', isAuth, adminController.getAddProduct);

router.post('/addProduct', isAuth, adminController.postAddProduct);

router.get('/admin/product', isAuth,  adminController.getProduct);

router.get('/admin/edit-product/:productId', isAuth,  adminController.getEditProduct);

router.post('/admin/edit-product', isAuth,  adminController.postEditProduct);

router.post('/admin/delete-product', isAuth,  adminController.postDeleteProduct);




module.exports = router;
