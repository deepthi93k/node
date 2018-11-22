const express=require('express');
const addbookRouter=express.Router();
function router(nav){
   
    addbookRouter.route('/')

    .get((req,res)=>{
        res.render('addbook',
        {
            
    
           nav,
           title:"library"
    
    
            
            });
        
        });
    
    
    return addbookRouter;
}
    
    module.exports=router;