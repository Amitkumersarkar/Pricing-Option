import PriceOption from "../../priceOption/priceOption";

const PriceOptions = () => {
    return (
        <div>
            <h2 className="text-3xl">Best Prices</h2>
            {
                PriceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
            }
        </div>
    );
};

export default PriceOptions;