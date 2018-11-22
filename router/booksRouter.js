const express=require('express');
const booksRouter=express.Router();
function router(nav){
var booklist=[
    {book:'abcd',author:'ramu'},
    {book:'two states',author:'chetan'},
    {book:'three dots',author:'revi dev'}

  ]
booksRouter.route('/')

.get((req,res)=>{
    res.render('books',
    {
        

       nav,
       title:"library",

       booklist
        
        });
    
    });
booksRouter.route('/:id')
.get((req,res)=>{
    const id=req.params.id;

    res.render(
        'book',
        {
            nav,
          
            title:"Library",
            book:booklist[id]
        }

    );
});

return booksRouter;
}
module.exports=router;