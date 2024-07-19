import React from "react";
import { createRoot } from 'react-dom/client';

import 'bootstrap/dist/css/bootstrap.min.css';
import {RouterProvider } from "react-router-dom";
import router from "./Router";

createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}/>
);