import React, { useState } from 'react'
import MenuBar from '../MenuBar'

import { MainBar, TopNavBar } from '../Constants'
import { createContext } from 'react'
import { useCookies } from 'react-cookie';
import HiddenComponent from '../Pages/HiddenComponent';
import UploadMainBar from './UploadMainBar';
import SharedComponents from '../SharedComponents';
export const ThemeContext = createContext(null)
function UploadBlog() {
  const [theme, setTheme] = useState("light")
 const [cookies, setCookie] = useCookies(['state']);
  return (
    
    <SharedComponents>
        <UploadMainBar />
    </SharedComponents>
  )
}

export default UploadBlog