import { createBrowserRouter } from "react-router-dom";

import Layout from "./layouts/Layout";
import Index from "./views/Index";

const router = createBrowserRouter([
    {
        path:'casa',
        element:<Layout/>,
        errorElement: "Error",
        children: [
            {   
                index: true,
                element: <Index/>
            },
        ]
    },
    // {
    //     path:'dashboard',
    //     element:<Layout/>,
    //     children: [
    //         {
    //             index: true,
    //             element: <Dashboard/>
    //         },
    //     ]
    // },  
])

export default router;