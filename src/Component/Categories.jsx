import React from "react";

const Categories = () => {
    const AdvancedMaths = ["Number Theory",
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
        "Engineering Mathematics"]
    const basicMaths = ["Algebra", "Prealgebra", "Precalculus", "Geometry", "Trignometry"]
    const Calculus = ["Single Variable Calculus", "Multi Variable Calculus", "Vector Calculus", "Advanced Calculus"]
    const OtherMaths = ["Discrete Maths", "Finite Mathematics", "Applied Mathematics", "Mathematical Biology", "Business Mathematics", "Operations Research"]
    const Statistics = ["Bayes Estimation", "Stochastic Process", "Testing of Hypothesis", "Probability distribution", "Probability"]


    // Health
    const Anatomy = ["Sample Topics"]
    const Nursing = ["Sample Topics"]
    const Psychology = ["Sample Topics"] 
    const health = {Anatomy, Nursing, Psychology}

    // Bussiness
    const Accounting = ["Marginal and Absorption Costing", "Differential Analysis", "Incremental Analysis", "Make-or-Buy Decisions", "Analysis of Financial Statements", "Analyzing and recording transactions", "Adjusting and closing entries", "Bank Reconciliation Statement"]
    const Economics = ["Econometrics", "Game Theory", "Microeconomics", "Macroeconomics", "Engineering Economics"]
    const Finance = ["Dividend Policy", "Interest Rate Swap", "Changes in price level and its effect", "Interest rate parity"]
    const OperationManagement = ["Dividend Policy", "Interest Rate Swap", "Changes in price level and its effect", "Interest rate parity"]
    const Business = {Accounting, Economics, Finance, OperationManagement}
    // Engineering

    const ChemicalEngineering = ["Thermodynamics", "Mass Transfer", "Heat Transfer", "Fluid Mechanics and Mechanical Operations", "Chemical process calculations", "Reaction Engineering", "Process dyanmics and control", "Transport Phenomena", "Plant Design and Economics"]
    const CivilEngineering = ["Surveying", "Structural Analysis", "Geotechnical Engineering", "Transportation Engineering"]
    const ComputerScience = ["Software Engineering", "Data Communication and Security", "C Programming", "Computer Organization and Design", "Design and Analysis of Algorithms"]
    const ElectricalEngineering = ["Analog Circuits", "MATLAB software", "Power Electronics and applications", "Electrical Machines", "Electromagnetic Theory", "Microcontrollers/Microprocessors", "Microelectronics and Integrated Circuits"]
    const MechanicalEngineering = ["Thermodynamics", "Fluid Mechanics", "Machine Design", "MATLAB"]
    const Engineering = {ChemicalEngineering, CivilEngineering, ComputerScience, ElectricalEngineering, MechanicalEngineering}

    // Science

    const AdvancedPhysics = ["Classical Mechanics", "Quantum Mechanics", "Electrodynamics", "Solid State Physics", "Atomic and Molecular Spectra", "Statistical Mechanics", "Nuclear and Particle Physics"]
    const Biology = ["Biochemistry", "Cell Biology", "Ecology and Evolution", "Genetics", "Microbiology", "Nutrition"]
    const Chemistry = ["Physical Chemistry", "Organic Chemistry", "Analytical Chemistry", "Inorganic Chemistry"]
    const Physics = ["Gravitation", "SHM", "Fluid Mechanics and Aerodynamics", "WaveTheory", "Optics", "Thermodynamics", "Electrostatistics", "Theory of Relativity", "Modern Physics"]
    const Science = {AdvancedPhysics, Biology, Chemistry, Physics}
   const Maths = {AdvancedMaths, basicMaths, Calculus, OtherMaths, Statistics},

//   var data = [
//     Maths,
//     // HealthCare = [Anatomy, Nursing, Psychology],
//     // EarthScience = [],
//     // Business = [Accounting, Economics, Finance, OperationManagement],
//     // Engineering = [ChemicalEngineering, CivilEngineering, ComputerScience, ElectricalEngineering, MechanicalEngineering],
//     // Science = [AdvancedPhysics, Biology, Chemistry, Physics],
//   ];

   data = {
    "Maths" : Maths,
    "HealthCare" : health,
    "Business" : Business,
    "Engineering" : Engineering,
    "Science" : Science
  }
  return (
    <>
      {data.Maths.basicMaths.map((item, index) => {
        return (
          <div key={index}>
            <h1>{item}</h1>
          </div>
        );
      })}
    </>
  );
};

export default Categories;
