import React from 'react';

const AppleCard = ({title, price}) => {
    return (
        <div className="apple__card">
            <h3>{title}</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi delectus eius exercitationem, facilis fugiat maxime nostrum praesentium voluptatibus. Earum, esse?</p>
            <p><b>Price :</b>{price} $ </p>
            <button type="button">Купить</button>
        </div>
    );
};

export default AppleCard;