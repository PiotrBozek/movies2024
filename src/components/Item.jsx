import React, { useState } from 'react';
import './Item.css';
import youtubeLogo from '../mocks/img/logo_YT.png';
import YoutubeMovie from './YoutubeMovie';

const Item = ({ item }) => {
    const [showYoutube, setShowYoutube] = useState(false);

    const handleYoutubeClick = () => {
        setShowYoutube(true);
    };

    const handleClose = () => {
        setShowYoutube(false);
    };

    if (showYoutube) {
        return <YoutubeMovie item={item} onClose={handleClose} />;
    }

    return (
        <div className='box-item'>
            <div className='item-img'>
                <img className='imgItem' src={require(`../../src/mocks/img/${item.img}`)} alt='kadr filmu'/>
            </div>
            <p><b className='namePL'>{item.namePL}</b> - {item.nameEN}</p>
            <p><b>{item.director}</b></p>
            <div>
                <p className='logoText' style={{ display: 'inline', fontSize: '18px' }} >zwiastun</p>
                <img 
                    className='logoItem' 
                    src={youtubeLogo} 
                    alt='logo Youtube' 
                    onClick={handleYoutubeClick}
                    style={{ cursor: 'pointer' }}
                />
            </div>
        </div>
    );
}

export default Item;