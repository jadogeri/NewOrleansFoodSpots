import Category from "./Category/Category";
import Price from "./Price/Price";
import Colors from "./Colors/Colors";
import "./Sidebar.css";

const Sidebar = ({ handleChange, handlePriceChange,handleColorChange,handleCategoryChange }) => {
  return (
    <>
      <section className="sidebar">
        <div className="logo-container">          
        </div>
        <Category handleChange={handleChange}  handleCategoryChange={handleCategoryChange} />
        <Price handleChange={handleChange}  handlePriceChange={handlePriceChange} />
        <Colors handleChange={handleChange}  handleColorChange={handleColorChange} />
      </section>
    </>
  );
};

export default Sidebar;
