import React from 'react';

// import logo from '../../public/img/Heavy.jpg';
import './Item.css';

const Item = ({ item }) => {

    

    return (
        <div className='box-item'>
            <div className='item-img'>
                <img className='imgItem' src={require(`../../src/mocks/img/${item.img}`)} alt='kadr filmu'/>
            </div>
            <p><b className='namePL'>{item.namePL}</b> - {item.nameEN}</p>
            <p><b>{item.director}</b></p>
        </div>
    );
}

export default Item;