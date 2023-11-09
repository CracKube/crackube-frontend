import React from "react";
import Popup from "../Popup";
import "./Category.css";
import { useState } from "react";
const Categories = () => {
  const AdvancedMaths = [
    "Number Theory",
    "MATLAB",
    "Graph Theory",
    "Differential Equations",
    "Partial Differential Equations",
    "Abstract Algebra",
    "Topology",
    "Numerical Analysis",
    "Functional Analysis",
    "Complex Analysis",
    "Differential Geometry",
    "Real Analysis",
    "Engineering Mathematics",
  ];
  const basicMaths = [
    "Algebra",
    "Prealgebra",
    "Precalculus",
    "Geometry",
    "Trignometry",
  ];
  const Calculus = [
    "Single Variable Calculus",
    "Multi Variable Calculus",
    "Vector Calculus",
    "Advanced Calculus",
  ];
  const OtherMaths = [
    "Discrete Maths",
    "Finite Mathematics",
    "Applied Mathematics",
    "Mathematical Biology",
    "Business Mathematics",
    "Operations Research",
  ];
  const Statistics = [
    "Bayes Estimation",
    "Stochastic Process",
    "Testing of Hypothesis",
    "Probability distribution",
    "Probability",
  ];

  // Health
  const Anatomy = ["Sample Topics"];
  const Nursing = ["Sample Topics"];
  const Psychology = ["Sample Topics"];
  const health = { Anatomy, Nursing, Psychology };

  // Bussiness
  const Accounting = [
    "Marginal and Absorption Costing",
    "Differential Analysis",
    "Incremental Analysis",
    "Make-or-Buy Decisions",
    "Analysis of Financial Statements",
    "Analyzing and recording transactions",
    "Adjusting and closing entries",
    "Bank Reconciliation Statement",
  ];
  const Economics = [
    "Econometrics",
    "Game Theory",
    "Microeconomics",
    "Macroeconomics",
    "Engineering Economics",
  ];
  const Finance = [
    "Dividend Policy",
    "Interest Rate Swap",
    "Changes in price level and its effect",
    "Interest rate parity",
  ];
  const OperationManagement = [
    "Dividend Policy",
    "Interest Rate Swap",
    "Changes in price level and its effect",
    "Interest rate parity",
  ];
  const Business = { Accounting, Economics, Finance, OperationManagement };
  // Engineering

  const ChemicalEngineering = [
    "Thermodynamics",
    "Mass Transfer",
    "Heat Transfer",
    "Fluid Mechanics and Mechanical Operations",
    "Chemical process calculations",
    "Reaction Engineering",
    "Process dyanmics and control",
    "Transport Phenomena",
    "Plant Design and Economics",
  ];
  const CivilEngineering = [
    "Surveying",
    "Structural Analysis",
    "Geotechnical Engineering",
    "Transportation Engineering",
  ];
  const ComputerScience = [
    "Software Engineering",
    "Data Communication and Security",
    "C Programming",
    "Computer Organization and Design",
    "Design and Analysis of Algorithms",
  ];
  const ElectricalEngineering = [
    "Analog Circuits",
    "MATLAB software",
    "Power Electronics and applications",
    "Electrical Machines",
    "Electromagnetic Theory",
    "Microcontrollers/Microprocessors",
    "Microelectronics and Integrated Circuits",
  ];
  const MechanicalEngineering = [
    "Thermodynamics",
    "Fluid Mechanics",
    "Machine Design",
    "MATLAB",
  ];
  const Engineering = {
    ChemicalEngineering,
    CivilEngineering,
    ComputerScience,
    ElectricalEngineering,
    MechanicalEngineering,
  };

  // Science

  const AdvancedPhysics = [
    "Classical Mechanics",
    "Quantum Mechanics",
    "Electrodynamics",
    "Solid State Physics",
    "Atomic and Molecular Spectra",
    "Statistical Mechanics",
    "Nuclear and Particle Physics",
  ];
  const Biology = [
    "Biochemistry",
    "Cell Biology",
    "Ecology and Evolution",
    "Genetics",
    "Microbiology",
    "Nutrition",
  ];
  const Chemistry = [
    "Physical Chemistry",
    "Organic Chemistry",
    "Analytical Chemistry",
    "Inorganic Chemistry",
  ];
  const Physics = [
    "Gravitation",
    "SHM",
    "Fluid Mechanics and Aerodynamics",
    "WaveTheory",
    "Optics",
    "Thermodynamics",
    "Electrostatistics",
    "Theory of Relativity",
    "Modern Physics",
  ];
  const Science = { AdvancedPhysics, Biology, Chemistry, Physics };
  const Maths = { AdvancedMaths, basicMaths, Calculus, OtherMaths, Statistics };

  //   var data = [
  //     Maths,
  //     // HealthCare = [Anatomy, Nursing, Psychology],
  //     // EarthScience = [],
  //     // Business = [Accounting, Economics, Finance, OperationManagement],
  //     // Engineering = [ChemicalEngineering, CivilEngineering, ComputerScience, ElectricalEngineering, MechanicalEngineering],
  //     // Science = [AdvancedPhysics, Biology, Chemistry, Physics],
  //   ];
  const Mathematics = [
    "AdvancedMaths",
    "basicMaths",
    "Calculus",
    "OtherMaths",
    "Statistics",
  ];
  const data = {
    Maths: { ...Maths },
    Health: { ...health },
    Business: { ...Business },
    Engineering: { ...Engineering },
    Science: { ...Science },
  };
  const list = [
    {
      name: "Mathematics",
    },
    {
      name: "Healthcare",
    },
    {
      name: "Business",
    },
    {
      name: "Engineering",
    },
    {
      name: "Science",
    },
  ];
  const [selected, setSelected] = useState("Maths");
  const [selectSub, setSelectSub] = useState(null);
  const [selectedTags, setSelectedTags] = useState([]);
  const [clicked, setClicked] = useState(0);

  const handleTagClick = (tag) => {
    if(selectedTags.includes(tag)){
      setSelectedTags(selectedTags.filter((item) => item !== tag));
    } else if (selectedTags.length < 5){
      setSelectedTags([...selectedTags, tag]);
    }else {
      return;
    }
  };
  return (
    <Popup trigger={true}>
      <div className="category">
        <div className="top">
          <h1>Available Categories to Answer</h1>
        </div>
        
        <div className="select-field">
          {Object.keys(data).map((category) => (
            <button
              key={category}
              value={category}
              className= {selected === category ? 'selected-btn' : 'not-selected-btn'}
              onClick={() => setSelected(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="cat-top">
          <p>Choose from 1 to 5 Tags you want to Answer in CracKube. You can select any categories you want from the above domains</p>
        </div>
        <div className="btn-tag">
          {Object.keys(data[selected]).map((subCategory) => (
            <div  >
              <div key={subCategory}>
                <div className="field-options">
                <div onClick={() => setSelectSub(subCategory)} >
                  <h2>{subCategory}</h2>
                </div>
                {subCategory === selectSub && selectSub && (
                <div className="ques-tags-cover" >
                  {data[selected][selectSub] ? (
                    data[selected][selectSub].map((item, index) => (
                      <p className= {selectedTags.includes(item) ? 'selected-tag' : 'ques-tags'} key={index} onClick={() => handleTagClick(item)}>{item}</p> // "ques-tags"
                    ))) : (<></>)}
                </div>
              )}
                </div>
                
              </div>
              <div>
              
              </div>
            </div>
          ))}
        </div>
        <div className="submit-bottom">
          <button className="btn-submit">Choose Categories</button>
          <p>Selected ({selectedTags.length}/5)</p>
        </div>
      </div>
    </Popup>
  );
};

export default Categories;
