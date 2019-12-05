// Require Necessary NPM Packages
const express = require('express');

// Require Mongoose Model for Article
const Article = require('../models/article');

// Instantiate a Router (mini app that only handles routes)
const router = express.Router();

/*
* Action:       INDEX
* Method:       GET
* URI:          /api/articles
* Description:  Get All Articles
*/

router.get('/api/articles', (req,res) => {
    Article.find()
            // Return all Articles as an Array
    .then((articles) => {
        res.status(200).json({articles: articles});
    })
    // Catch any errors that might occur
    .catch((error) => {
        res.status(500).json({error: error});
    });
});

/** 
 * Action:       SHOW
 * Method:       GET
 * URI:          /api/articles/542452
 * Description:  Get An Article by Article ID
 */


/** 
 * Action:       CREATE
 * Method:       POST
 * URI:          /api/articles
 * Description:  Create a New Article
 */

 /** 
 * Action:       UPDATE
 * Method:       PATCH           // PATCH for multiple fields, PUT for one field
 * URI:          /api/articles/54525424
 * Description:  Update An Article by Article ID
 */

 /** 
 * Action:       DESTROY
 * Method:       DELETE           
 * URI:          /api/articles/54254252
 * Description:  Delete An Article by Article ID
 */


// Export the Router so we can use it in the server.js file
module.exports = router;