const Counter = () => {
    let quantity = 10;

    const upQuantity = () => {
        quantity = quantity + 1;
        document.getElementById("counter-box").innerHTML = quantity
    } 

    return (
        <>
            <h1 id="counter-box">{quantity}</h1>
            <button onClick={upQuantity}>Aumentar</button>
        </>
    );
};

export default Counter;