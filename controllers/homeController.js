const { Post, User } = require('../models/');


// Function to fetch all posts
const getAllPosts = async () => {
  try {
    
    const postData = await Post.findAll({                               // Retrieve all posts with User data
      include: [User],
    });

    
    const posts = postData.map((post) => post.get({ plain: true }));    // Convert posts to plain objects
    return posts;                                                       // Return all posts
  } catch (err) {
    throw err;                                                          // Throw error if any
  }
};






