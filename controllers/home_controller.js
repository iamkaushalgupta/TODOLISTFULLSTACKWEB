module.exports.home = function(req,res){
    return res.render('home',{
        title:'Home',
        descriptionText:'Description',
        descriptionPlaceholder:'What you need to do?',
        categoryText: 'Category',
        choseCategoryText: 'Choose Category Text',
        categoryList:['Personal', 'Work', 'School', 'Cleaning', 'Others' ],
        dueDateText: 'Due Date',
        button1:'Add Tasks',
        button2:'Delete Tasks'
        
    })
}