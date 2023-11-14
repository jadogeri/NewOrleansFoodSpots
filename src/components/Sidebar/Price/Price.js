import Input from "../../Input";
import "./Price.css";

const Price = ({ handleChange, handlePriceChange }) => {
  return (
    <>
      <div className="ml">
        <h2 className="sidebar-title price-title">Price</h2>

        <label className="sidebar-label-container">
          <input onChange={handlePriceChange} type="radio" value="" name="price" />
          <span className="checkmark"></span>All
        </label>

        <Input
          handleChange={handlePriceChange}
          value='$'
          title="$"
          name="price"
        />

        <Input
          handleChange={handlePriceChange}
          value="$$"
          title="$$"
          name="price"
        />

        <Input
          handleChange={handlePriceChange}
          value='$$$'
          title="$$$"
          name="price"
        />

        <Input
          handleChange={handlePriceChange}
          value='$$$$'
          title="$$$$"
          name="price"
        />
      </div>
    </>
  );
};

export default Price;
