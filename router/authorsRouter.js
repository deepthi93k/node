const express=require('express');
const authorsRouter=express.Router();
function router(nav){


authorsRouter.route('/')

.get((req,res)=>{
    res.render('authors',
    {
        nav,

        title:"Authors",
        
            author:[
                {author:'vasu dev'},
                {author:'ram kumar'}
    
            ]
        
        });
    });
   
    return authorsRouter;


}

module.exports=router;