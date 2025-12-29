import './Item.css';

const Item0 = ({ items }) => {
    console.log(items[0].img);
    return (
        <div className='box-item'>
            <div className='item-img'>
                <img className='imgItem' src={require(`../../src/mocks/img/${items[0].img}`)} alt='kadr filmu'/>
            </div>
            <p><b className='namePL'>{items[0].namePL}</b> - {items[0].nameEN}</p>
            <p><b>{items[0].director}</b></p>
        </div>
    );
}

export default Item0;