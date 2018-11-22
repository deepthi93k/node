const express=require('express');
const aboutRouter=express.Router();
function router(nav){
   
    aboutRouter.route('/')

    .get((req,res)=>{
        res.render('about',
        {
            
    
           nav,
           title:"library"
    
    
            
            });
        
        });
    
    
    return aboutRouter;
}
    
    module.exports=router;