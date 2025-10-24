const express = require('express')
const router = express.Router() // handles which code runs for each request (based on url and method)

// responds to get request for the home page
router.get('/', function(req, res, next) {
    // render the index.handlebars template with data
    res.render('index', {
        title: 'Feedback Application',
        author: 'Abir',
        timePageloadedAt: new Date()
    })
})

// responds to get request for the feedback form page
router.get('/feedback-form', function(req, res, next) {
    res.render('Student_feedback_form')
})

// handles feedback form submission
router.get('/submit-feedback', function(req, res, next) {
    // get form data (req.body for post, req.query for get)
    const formData = req.body
    console.log(formData)

    //todo -save to a database
    //automatically email someone when feedback was submitted

    res.render('thank_you', {
        name: formData.name,
        email: formData.email,
        comments: formData.comments,
        currentStudent: formData['current-student']
    })
})

// export router to be used in app.js
module.exports = router
