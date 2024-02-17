import "./category-item.style.scss"

const CategoryItem=({category})=>{
    const {id,title,imageUrl}=category;
    console.log(id,title,imageUrl)
   return(
    
   <div key={id} className="category-container"   style={{
              backgroundImage:`url(${imageUrl})`,backgroundSize:"cover"
             }} >

          {/* <div className="background-image" > */}

              <div className="category-body-container">
                <h2>{title}</h2>
                <p>Shop Now</p>
              </div>

             {/* </div> */}
             
              
            </div>

   )
}

export default CategoryItem;