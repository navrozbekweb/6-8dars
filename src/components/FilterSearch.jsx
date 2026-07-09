import React from "react";
import Input from "./Input";
import Dropdow from "./Dropdow";

function FilterSearch({ searchProd, searchCatigory }) {
  return (
    <section>
      <div className="center flex justify-between items-center">
        <Input searchProd={searchProd} />
        <Dropdow searchCatigory={searchCatigory} />
      </div>
    </section>
  );
}

export default FilterSearch;
