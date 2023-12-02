export default function Items({item,handleAddToCart}) {

    
    return (
        
            <div className="card mx-2 my-3 border-1 border-success" style={{ width: '18rem' }}>
                <img src={item.image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    {/* <p className="card-text">{item.details}</p> */}
                    <h6  className="card-text">{item.price}</h6>
                    <button 
                    onClick={() => {
                        
                        handleAddToCart(item)
                        
                    }}
                        className="btn btn-outline-success"
                        >Add To Cart</button>
                </div>
            </div>
        
    );
}
