import React from "react";
import SharedComponents from "../SharedComponents";

import "./helpCenter.css";
const HelpCenter = () => {
  const config = [
    {
      title: "Community guidelines",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      link: "",
    },
    {
      title: "Community guidelines",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      link: "",
    },
    {
      title: "Community guidelines",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      link: "",
    },
    {
      title: "Community guidelines",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      link: "",
    },
    {
      title: "Community guidelines",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      link: "",
    },
    {
      title: "Community guidelines",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      link: "",
    },
  ];
  return (
    <SharedComponents>
      <div className="helpCenter__container">
        <div className="helpCenter__container--top">
          <h1 className="helpCenter__container--h1">How can we help ?</h1>
          <div
            className="top"
          >
            <input
              className="helpCenter__container--input"
              type="text"
              placeholder="Enter something..."
              autoFocus
            />
            <div className="helpCenter__container--circle" />
          </div>
        </div>
        <div className="helpCenter__container--bottom">
            {
                config.map((data, index) => {
                    return (
                        <div className="helpCenter__container--card" key={index}>
                            <div className='card_div'></div>
                            <div className="tile_container">
                            <h1 className="card__title">{data.title}</h1>
                            <p className="card__description">{data.description}</p>
                            </div>
                         </div>   
                    )
                })
            }
        </div>
      </div>
    </SharedComponents>
  );
};

export default HelpCenter;
