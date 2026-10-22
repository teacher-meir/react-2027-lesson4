export default function List({ productsArr, onRemove }) {
    // אסור לעדכן משתנים של פרופס

    // הצגת המוצרים - productsArr
    // מחיקת מוצר - onRemove

    return (
        <div className="cards">
            {/* רשימת כל המוצרים */}
            {productsArr.map(pr => <div key={pr.id} className="card">
                <h3>{pr.title}</h3>
                <p>price: {pr.price}</p>
                <button onClick={() => onRemove(pr.id)}>&times;</button>
                <button>add to cart</button>
            </div>)}
        </div>
    );
}