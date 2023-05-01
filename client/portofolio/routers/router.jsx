import { createBrowserRouter } from "react-router-dom";
import AboutMe from "../src/pages/aboutMe";
import Portofolio from "../src/pages/portofolio";
import Layout from "../src/components/layout";
import Home from "../src/pages/home";
import DetailPage from "../src/pages/detailPages";


const router = createBrowserRouter([
    {
        element : <Layout />,
        children : [
            {
                path : '/',
                element : <Home />
            },
            {
                path : '/portofolio',
                element : <Portofolio />
            },
            {
                path : '/about-me',
                element : <AboutMe />
            },
            {
                path : '/detail/:id',
                element : <DetailPage />
            },
        ]
    }
])

export default router