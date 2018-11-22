const express=require('express');
const contactRouter=express.Router();
function router(nav){
   
    contactRouter.route('/')

    .get((req,res)=>{
        res.render('contact',
        {
            
    
           nav,
           title:"library"
    
    
            
            });
        
        });
    
    
    return contactRouter;
}
    
    module.exports=router;