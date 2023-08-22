import React, { useState } from 'react'
import { Helmet } from 'react-helmet';
import ProgressPassword from '../Indicators/ProgressPassword';
import LoginDesign from '../../Assets/LoginDesign.svg';
import "../../styles/Sheets/Login.css"
import axios from 'axios'
import {useEffect} from 'react';

function getUsernameDOB(){
    return(
        <form method="post" action="/">
    <label for="Username">Username: </label>
    <input type="text" name="Username" /><br />
    <label for="dob">DOB:</label>
    <input type="text" name="dob" /><br />
    <input type="submit" />
</form>
    )
}