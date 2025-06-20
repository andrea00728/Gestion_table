import React from "react";
import { createBrowserRouter, Navigate, Router } from "react-router-dom";
import DefaultLayout from "../layouts/DefaultLayout";
import GuestLayout from "../layouts/GuestLayout";
// import Accueil from "../pages/Accueil";
// import Evenement from "../pages/Evenement";
// import Apropos from "../pages/Apropos";
import Notfound from "../pages/Notofoundpage";
// import Pageconnexion from "../pages/Pageconnexion";
import AdminLayout from "../layouts/AdminLayout";
import Test from "../layouts/test";
// import Connexionorganisateur from "../pages/Connexionorganisateur";
const router=createBrowserRouter([
     {
        path:"/",
        element:<Test/>,
        children:[
            // {
            //     path:"/",
            //     element:<Navigate to="/accueil"/>
            // },{
            //     path:"/accueil",
            //     element:<Accueil/>
            // },
            // {
            //     path:"/evenement",
            //     element:<Evenement/>
            // },
            // {
            //     path:"/apropos",
            //     element:<Apropos/>
            // }
        ]
    },
    {
        path:"/",
        element:<DefaultLayout/>,
        children:[
            // {
            //     path:"/",
            //     element:<Navigate to="/accueil"/>
            // },{
            //     path:"/accueil",
            //     element:<Accueil/>
            // },
            // {
            //     path:"/evenement",
            //     element:<Evenement/>
            // },
            // {
            //     path:"/apropos",
            //     element:<Apropos/>
            // }
        ]
    },
     {
        path:"/",
        element:<AdminLayout/>,
        children:[
            // {
            //     path:"/",
            //     element:<Navigate to="/AdminAccueil"/>
            // },{
            //     path:"/AdminAccueil",
            //     element:<Adminaccueil/>
            // },
        ]
    },
    {
        path:"/",
        element:<GuestLayout/>,
        children:[
            // {
            //     path:"/",
            //     element:<Navigate to="/pageconnexion" />
            // },
            // {
            //     path:"/pageconnexion",
            //     element:<Pageconnexion/>
            // },
            // {
            //     path:"/connexion",
            //     element:<Connexionorganisateur/>
            // },
            // {
            //     path:"/inscription",
            //     element:<Inscription/>
            // }
        ]
    },
    {
        path:"*",
        element:<Notfound/>
    }
    
]);

export default router;