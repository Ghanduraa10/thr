import { Link } from "react-router-dom";
import Footer from "../components/footer";
Footer


function Home(){
    return (
       <section className="bg-white-800 text-black"> 
             <div className="container mx-auto grid md:grid-cols-2 items-center md:justify-between">
                <div className="hero-info">
                    <h1 className="lg:text-6xl" style={{fontFamily:"Pacifico,cursive"}}>
                        Hi, <br />I am <span className="text-accent">G</span>handur  <br />
                        Webdeveloper
                    </h1>
                    <p className="py-7">I am profiecient in Back-end Web Development and React.js</p>
                    <Link to={'/about-me'} type="Button" class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">About-Me</Link>
                    <Link to={'/portofolio'} type="Button" class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">My Portofolio</Link>
                    </div>
                <div className="hero-img">
                    <img src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"  alt="coding" className="w-[80%] ml-auto mt-5"></img>
                </div> 
            </div>
       </section>
    )
}

export default Home;