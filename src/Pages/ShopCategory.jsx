import React, { useContext } from "react";
import './css/ShopCategory.css'
import { MyContext } from "../Context/ShopContext";
import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import Item from '../Components/Items/Items'


function ShopCategory(props) {
    const { all_product } = useContext(MyContext)

    return (
        <div className="shop-category">
            <img className="shopcategory-banner" src={props.banner} alt="" />
            <div className="shopcategory-indexsort">
                <p>
                    <span>Showing1-12</span> out of 36 Products
                </p>
                <div className="shopcategory-sort">
                    Sort by <img src={dropdown_icon} alt="" />
                </div>
            </div>
            <div className="shopcategory-products">
                {all_product.map((item, i) => {
                    if (props.category === item.category) {
                        return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />

                    }
                    else {
                        return null;
                    }
                })}
            </div>

            <div className="shopcategory-loadmore">
                Explore more

            </div>


        </div>
    )
}

export default ShopCategory;