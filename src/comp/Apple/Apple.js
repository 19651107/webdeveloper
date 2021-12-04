import React from 'react';
import './Apple.css'
import AppleCard from "./AppleCard";

const Apple = () => {

    let  array = [
        {title: 'Jordan', price: 20},
        {title: 'Nike', price: 100},
        {title: 'Adidas', price: 75},
    ];

    return (
        <section className="apple">
            <div className="container">
                <div className="apple__row">
                    {array.map((item,idx)=>{
                        return <AppleCard title={item.title} price={item.price}/>
                    })}
                </div>
            </div>
        </section>
    );
};

export default Apple;