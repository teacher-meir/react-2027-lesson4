export default Form = ({ f }) => {
    return (<div>
        <input type="text" placeholder='title' name="title" ref={titleRef} />
        <input type="text" placeholder='price' name="price" ref={priceRef} />
        <button onClick={f}>Add Product to store</button>
    </div>)
}