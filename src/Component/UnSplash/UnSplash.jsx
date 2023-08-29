import React, { createContext, useState } from "react";
import Jumbutron from "./Jumbutron";
import SearchField from "./SearchField";
import Images from "./Images";
import useAxios from "../hooks/useAxios";

//Create context
export const ImageContext = createContext();

const UnSplash = ({setFile, setState, setImage}) => {
  const { response, isLoading, error, fetchData } = useAxios(
    `search/photos?page=1&query=pussy&client_id=DvYlTKQ_ADiGY_WeuKA5qsmvz3UndBXspjxkEh9LL6I`
  );
  console.log(response);
  const [searchImage, setSearchImage] = useState("");
  const value = {
    response,
    isLoading,
    error,
    fetchData,
    searchImage,
    setSearchImage,
  };

  return (
    <>
      <ImageContext.Provider value={value}>
        <Jumbutron>
          <SearchField></SearchField>
        </Jumbutron>
        <Images setFile = {setFile} setState = {setState} setImage = {setImage}/>
      </ImageContext.Provider>
    </>
  );
};

export default UnSplash;
