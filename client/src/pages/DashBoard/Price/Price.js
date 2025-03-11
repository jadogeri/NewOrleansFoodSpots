import Input from "../../../components/Input";
import "./Price.css";

const Price = ({ handleChange, handlePriceChange }) => {
  return (
    <>
      <div className="ml">
        <h2 className="sidebar-title price-title">Price</h2>

        <label className="sidebar-label-container">
          <input onChange={handlePriceChange} type="radio" value="" name="test2" />
          <span className="checkmark"></span>All
        </label>

        <Input
          handleChange={handlePriceChange}
          value="$"
          title="$"
          name="test2"
        />

        <Input
          handleChange={handlePriceChange}
          value="$$"
          title="$$"
          name="test2"
        />

        <Input
          handleChange={handlePriceChange}
          value="$$$"
          title="$$$"
          name="test2"
        />

        <Input
          handleChange={handlePriceChange}
          value="$$$$"
          title="$$$$"
          name="test2"
        />
        <Input
          handleChange={handlePriceChange}
          value="$$$$$"
          title="$$$$$"
          name="test2"
        />
      </div>
    </>
  );
};

export default Price;
