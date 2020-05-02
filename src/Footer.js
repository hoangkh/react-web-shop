import React from 'react';


function Footer() {
  const link = [
    {
      name: "Need Help?",
      items: ["Customer Experience", "Track Order", "Delivery Info",
              "Return Policy", "Student Discount"]
    },
    {
      name: "Useful Links",
      items: ["Find our stores", "Jobs at schuh", "Account Log-in", 
              "Giftcards", "Mordern Slavry Statement", "Our Community Pillars"]
    },
    {
      name: "Follow Us",
      items: ["Facebook", "Instagram", "Twitter", "YouTube", "Blog"]
    }
  ];
    return <div id="shop-page-footer">
      <div className="row useful-links">
        <div className="col-6 list-links">
          <div className="row">
          {link.map((link, index) => (
                        <div className="col-4" key={index}>
                            <h3>{link.name}</h3>
                            <ul>
                                {link.items.map((item, i) => (
                                <li key={i}>
                                    {item}
                                </li>
                                ))}
                            </ul>
                        </div>
                    ))}
            </div>
        </div>
        <div className="col-6">
            <div className="row">
              <div className="col-6"><h3>Sign up for news</h3></div>
              <div className="col-6"><h3>Rating</h3></div>
            </div>
        </div>
      </div>
      <div className="row copy-rights">This is where copy rights

      </div>
      </div>;
  }

export default Footer;