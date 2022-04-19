import React from "react";
import { useState } from "react";
import { Link } from "@mui/material";
function Description({ children, count }: { children: string; count: number }) {
  const text = children;

  const [show, setShow] = useState(true as boolean);
  const resultString = show ? text.slice(0, count) : text;
  const toggleShow = (item: any): void => {
    setShow(!show);
  };

  return (
    <div>
      <div data-testid="description-data">{resultString}</div>
      <Link sx={{ height: "10px" }}>
        {text.length > count ? (
          <span onClick={toggleShow}> {show ? "read more" : "read less"}</span>
        ) : null}
      </Link>
    </div>
  );
}

export default Description;
