const router = require('express').Router();
const { getAllPosts } = require('../controllers/homeController');

// get all posts for homepage
router.get('/', async (req, res) => {                          // Define route handler
  try {
    const posts = await getAllPosts();                         // Get all posts
    res.render('all-posts', { posts });                        // Render posts page
  } catch (err) {
    res.status(500).json(err);                                 // Handle error case
  }
});



module.exports = router;