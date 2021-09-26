import React, { useState } from "react";
import { Paper, TextField } from "@material-ui/core";

const SearchBar = ({ onSubmit }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => setSearchTerm(event.target.value);

  const onKeyPress = (event) => {
    if (event.key === "Enter") {
      onSubmit(searchTerm);
    }
  }

  return (
    <div className="src_div">
    <input id="Search_box"
      value={searchTerm}
      onChange={handleChange}
      onKeyPress={onKeyPress}
      placeholder="Search.."
    />
    <span id="src_btn" onClick={()=>onSubmit(searchTerm)}><i class="fas fa-search"></i></span>
    </div>
  );
}

export default SearchBar;