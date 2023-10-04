import React from "react";

const Economics = () => {
  return (
    <div>
      <div className="economics container">
        <ul>
          <li className="flex_class">
            <a href="/" className="madad">
              <span className="madad_type">S&amp;P500</span>
              <span>108.22</span>
              <i className="fa-sharp fa-solid fa-caret-up"></i>
              <span>0.00%</span>
            </a>
            <a href="/" className="madad">
              <span className="madad_type">Nasdaq</span>
              <span>75.03</span>
              <i className="fa-sharp fa-solid fa-caret-up"></i>
              <span>0.00%</span>
            </a>
            <a href="/" className="madad">
              <span className="madad_type">Crude Oil</span>
              <span>55.8</span>
              <i className="fa-sharp fa-solid fa-caret-up"></i>
              <span>0.00%</span>
            </a>
            <a href="/" className="madad">
              <span className="madad_type">US 10 Yr</span>
              <span>29</span>
              <i className="fa-sharp fa-solid fa-caret-up"></i>
              <span>0.00%</span>
            </a>
            <a href="/" className="madad">
              <span className="madad_type">Euro</span>
              <span>89.4</span>
              <i className="fa-sharp fa-solid fa-caret-up"></i>
              <span>0.00%</span>
            </a>
            <a href="/" className="madad">
              <span className="madad_type">Dow Jones</span>
              <span>22</span>
            </a>
            <button>
              <i className="fa-solid fa-angle-left fa-xl"></i>
            </button>
            <button>
              <i className="fa-solid fa-angle-right fa-xl"></i>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Economics;
