const { Review, User} = require('../models');

const isUserOwnReviewAuth = async (req, res, next) => {
    try {
        const review = await Review.findOne({ where: {id: req.params.id}});
        const user = req.authUser;
        if(!review) {
            return res.status(404).json({ message: "review tidak ditemukan" });
        }
        if (review.userId !== user?.id) {
            return res.status(404).json({ message: "user tidak punya akses data ini" });
        }

        next();
    } catch (error) {
        return res.status(500).json({
            message: 'Error'
        });
    }
}

const isAdmin = async (req, res, next) => {
    try {
        const { isAdmin } = req.authUser;
        if (!isAdmin) {
            return res.status(404).json({ message: "akses hanya untuk user admin" });
        }

        next();
    } catch (error) {
        return res.status(500).json({
            message: 'Error'
        });
    }
};

module.exports = { isUserOwnReviewAuth,  isAdmin };