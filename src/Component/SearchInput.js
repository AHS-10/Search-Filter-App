import React, { useState } from "react";

function SearchInput(props) {
  const [searchVal, setSearchVal] = useState("");
  return (
    <>
      <div className="d-flex justify-content-center py-3">
        <input
          type="text"
          className="form-control w-50 "
          placeholder="Enter product name here..."
          value={searchVal}
          onChange={(val) => setSearchVal(val.target.value)}
          onKeyUp={() => {
            props.inputVal(searchVal);
          }}
        />
      </div>
    </>
  );
}

export default SearchInput;
