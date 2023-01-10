const { application } = require('express');
const express= require('express');
const TODO = require('../models/models');
const routes = express.Router();
const homeController = require('../controllers/home_controller');
routes.use(express.urlencoded())

routes.get('/',homeController.home);

routes.post('/add-task',function(req,res){

    TODO.create({
        description:req.body.description,
        category:req.body.category,
        date:req.body.date,

    },function(err, newTODO){
        if(err){
            console.log(err);
            return;
        }
        res.redirect('back');
    })

})

module.exports=routes;