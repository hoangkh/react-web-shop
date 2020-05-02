import React from 'react';


function Body() {
    const refinement = [
        {
            name: 'size',
            items: [
                {name: 'UK 5', instock: 5},
                {name: 'UK 6', instock: 15},
                {name: 'UK 7', instock: 7},
                {name: 'UK 8', instock: 9},
                {name: 'UK 9', instock: 59},
                {name: 'UK 10', instock: 3},
                {name: 'UK 11', instock: 1},
                {name: 'UK 12', instock: 0},
                {name: 'UK 13', instock: 2},
            ]
        },
        {
            name: 'brand',
            items: [
                {name: 'Adidas', instock: 95},
                {name: 'Asics', instock: 15},
                {name: 'Boss', instock: 17},
                {name: 'Columbia', instock: 69},
                {name: 'Calvin Klein', instock: 9},
                {name: 'Birkenstock', instock: 3},
                {name: 'Bjorn Borg', instock: 1},
                {name: 'Nike', instock: 0},
                {name: 'Lacoste', instock: 102},
            ]
        },
        {
            name: 'category',
            items: [
                {name: 'Mens Shoes', instock: 5},
                {name: 'Mens Boots', instock: 15},
                {name: 'Mens Sandals', instock: 7},
                {name: 'Mens Trainers', instock: 9},
                {name: 'Mens Slippers', instock: 59},
                {name: 'Mens Sneakers', instock: 3}
            ]
        }
    ];
    const color = ['Beige', 'Blue', 'Black', 'Grey', 'Burgundy', 'Navy', 'Pink', 'Tan', 'Khaki', 'Pattern', 'Brown', 'White'];
    const trend = ["Men's Trainer", "Men's Boot", 'Smart Shoes', 'Nike', 'Vans', 'Adidas'];

    
    return <div id="shop-page-body">
      <div className="bread-crumb"></div>
      <div className="panel-info">
        <h2>men's shoes</h2>
        <p>1209 products found</p>
        <p className="main-category-description">For sneakerheads and trendsetters alike, schuh has every style of footwear to kit out your wardrobe. Whether you’re after a street-style men’s trainer or practical yet stylish men’s boot, you’ll find your fit right here. Our range of smart shoes will bring style to weekend escapades or the big day. Shop from big brands like Nike, Vans, adidas to find your next kick fix. Take your pick and order by 10pm* for Next Day UK Delivery.</p>
        <div className="row">
            <div className="col-9 trend">
            {trend.map((trend, index) => (
                 <button key={index}>{trend}</button>                       
            ))}
            </div>
            <div className="col-3">
                <p>Sort</p>
            </div>
        </div>
      </div>
      <div className="row">
        <div className="col-3 left-column">
            <h2>Refine</h2>
                {refinement.map((refinement, index) => (
                        <div className={refinement.name} key={index}>
                            <h3>{refinement.name}</h3>
                            <ul className={refinement.name}>
                                {refinement.items.map((item, i) => (
                                <li key={i}>
                                    {item.name} [{item.instock}]
                                </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                    <div>
                        <h3>color</h3>
                        <div className="color-refined">
                            {color.map((color, index) => (
                                <ul key={index}>
                                    <li>{color}</li>
                                </ul>        
                            ))}
                        </div>
                    </div>
        </div>
        <div className="col-9 right-column">this is right column</div>
      </div>
      <div className="paging"></div>
      <div className=""></div>
    </div>;
  }
export default Body;