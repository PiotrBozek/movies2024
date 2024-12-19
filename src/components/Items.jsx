import React from 'react';
import Item from './Item';
import './Items.css';

    const Items = ({data}) => {
    
        const items = (data.items.length >= 2) ?
        (data.items.sort((a, b) => (a.namePL > b.namePL) ? 1 : ((b.namePL > a.namePL) ? -1 : 0)))
        : data;

    const oneItems = data.length === 0 ? -1 : [items]

    const datas = data.items.length <= 1
        ? data.items.length === 1 ? (<p>{oneItems[0].items[0].namePL} - {oneItems[0].items[0].nameEN}</p>) : null
        : items.map((item) => {
            return <Item key={item.key} item = {item}/>
        });

        return (
            <div className='container'>
                 {datas}
            </div>
    );
}

export default Items;
