import "./Category.css";
import Input from "../../components/Input";

function Category({ handleChange, handleCategoryChange }) {
  return (
    <div>
      <h2 className="sidebar-title">Category</h2>

      <div>
        <label className="sidebar-label-container">
          <input onChange={handleCategoryChange} type="radio" value="" name="test" />
          <span className="checkmark"></span>All
        </label>
        <Input
          handleChange={handleCategoryChange}
          value="sneakers"
          title="Sneakers"
          name="test"
        />
        <Input
          handleChange={handleCategoryChange}
          value="flats"
          title="Flats"
          name="test"
        />
        <Input
          handleChange={handleCategoryChange}
          value="sandals"
          title="Sandals"
          name="test"
        />
        <Input
          handleChange={handleCategoryChange}
          value="heels"
          title="Heels"
          name="test"
        />
      </div>
    </div>
  );
}

export default Category;
