import React, { useState } from "react";
import * as sc from "../styles";
const HeaderOptions = () => {
  const [option, setOption] = useState<number>(0);

  return (
    <sc.HeaderOptions>
      <button
        onClick={() => setOption(0)}
        style={{ background: option === 0 ? "#CDCFFE" : "" }}
      >
        Recibidos
      </button>
      <button
        onClick={() => setOption(1)}
        style={{ background: option === 1 ? "#CDCFFE" : "" }}
      >
        En Proceso
      </button>
    </sc.HeaderOptions>
  );
};

export default HeaderOptions;
