const CardsView = (props) => {
    const { cards } = props;

    const ShopCard = cards.map((item, index) => {
        return (
            <div className="card" key={index}>
                <div className="card-title">{item.name}</div>
                <div className="card-description">{item.color}</div>
                <div className="card-slider">
                    <figure>
                        <img src={item.img} alt={item.name} />
                    </figure>
                </div>

                <div className="card-price-wrapper">
                    <div className="price">${item.price}</div>
                    <button className="btn">Add to cart</button>
                </div>
            </div>
        );
    });

    return <div className="cards">{ShopCard}</div>;
};

export default CardsView;
