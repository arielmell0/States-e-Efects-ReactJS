const Counter = () => {
    let quantity = 10;

    const upQuantity = () => {
        quantity = quantity + 1;
        console.log(quantity);
    } 

    return (
        <>
            <h1>{quantity}</h1>
            <button onClick={upQuantity}>Aumentar</button>
        </>
    );
};

export default Counter;