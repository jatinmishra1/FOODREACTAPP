import { useState } from "react";

const Accordian = (props) => {
  const { index, open, setShowIndex, showIndex } = props;
  return (
    <div>
      <div className="accordian-container">
        <div className="accordian-header">
          <h3>ACCPRDIAN</h3>
          <button
            onClick={() => {
              //   setOpen(!open);
              setShowIndex(index === showIndex ? -1 : index);
            }}
          >
            {open === true ? "CLOSE" : "OPNE"}
          </button>
        </div>
        {open && (
          <div className="accordian-body">
            <p>lorem</p>
          </div>
        )}
      </div>
    </div>
  );
};
export default Accordian;
