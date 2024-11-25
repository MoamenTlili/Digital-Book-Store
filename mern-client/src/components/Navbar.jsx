import React, {useContext, useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import { FaBlog, FaXmark } from "react-icons/fa6";
import { FaBarsStaggered } from "react-icons/fa6";
import { AuthContext } from '../context/AuthProvider';
import { getAuth, signOut } from "firebase/auth";


const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen]=useState(false);
    const [isSticky, setIsSticky] = useState(false);
    const [showLogoutDropdown, setShowLogoutDropdown] = useState(false);

    const {user} = useContext(AuthContext);
    console.log(user);


    //toggle menu
    const toggleMenu = ()=>{
        setIsMenuOpen(!isMenuOpen);
    }

    useEffect(()=>{
        const handleScroll = ()=>{
            if(window.scrollY > 100){
                setIsSticky(true);
            }
            else{
                setIsSticky(false);
            }
        }
        window.addEventListener("scroll", handleScroll);
        return ()=>{
             window.removeEventListener("scroll", handleScroll);
                }
    }, [])


    // Handle logout
    const handleLogout = () => {
        const auth = getAuth();
        signOut(auth)
            .then(() => {
                console.log("User signed out successfully.");
            })
            .catch((error) => {
                console.error("Error signing out:", error);
            });
    };

    
    //navItems
    const navItems=[
        {link:"Home", path:"/"},
        {link:"About", path:"/about"},
        {link:"Shop", path:"/shop"},
        {link:"Admin Panel", path:"/admin/dashboard"},
        {link:"Blog", path:"/blog"},
        ...(user ? [] : [
            { link: "Login", path: "/login" },
            { link: "Register", path: "/sign-up" },
        ])
    ]


    const toggleLogoutDropdown = () => {
        setShowLogoutDropdown(!showLogoutDropdown);
    }
    

      return (

        

    <header className='w-full bg-transparent fixed top-0 left-0 right-0 transition-all ease-in duration-300'>
        <nav className={`py-4 lg:px-24 px-4 ${isSticky ? "sticky top-0 left-0 right-0 bg-blue-300" : ""}`}>
            <div className='flex justify-between items-center text-base gap-8'>
                <Link to= "/" className='text-2xl font-bold text-blue-700 flex items-center gap-2'><FaBlog className='inline-block'/>Bookshelf</Link>
                {/*nav items for large devices */}
                <ul className='md:flex space-x-12 hidden'>
                    {navItems.map(({ link, path }) => (
                        <li key={path}>
                            <Link to={path} className='block text-base text-black uppercase cursor-pointer hover:text-blue-700'>{link}</Link>
                        </li>
                    ))}
                </ul>
                

                {/* User account dropdown */}
                <div className="space-x-12 hidden lg:flex items-center relative">
                        {user && (
                            <div className="relative">
                                <button className="text-black" onClick={toggleLogoutDropdown}>{user.email}</button>
                                {showLogoutDropdown && ( 
                                    <ul className="absolute top-full left-0 bg-white shadow-md rounded-md mt-2 py-2 w-36">
                                        <li>
                                            <button onClick={handleLogout} className="block w-full text-left px-4 py-2 hover:bg-gray-100">Logout</button>
                                        </li>
                                    </ul>
                                )}
                            </div>
                        )}
                </div>



                {/*button for large devices */}
                <div className='space-x-12 hidden lg:flex items-center'>
                    <button><FaBarsStaggered className='w-5 hover:text-blue-700'/></button>
                    
                    {/*display user email on navbar */}
                    {   /* {
                        user? user.email:""
                        } */                          }
                    

                </div>

                {/*menu button for mobile devices */}
                <div className='md:hidden'>
                    <button onClick={toggleMenu} className='text-black focus:outline-none'>
                        {
                            
                            isMenuOpen? 
                            <FaXmark className='h-5 w-5 text-black'/> : <FaBarsStaggered className='h-5 w-5 text-black'/>
                        }
                    </button>
                </div>
            </div>

            {/*nav items for small devices*/}
            <div className={`space-y-4 px-4 mt-16 py-7 bg-blue-700 ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}> 
                {      
                    navItems.map(({ link, path }) => <Link key={path} to={path} className='block text-base text-white uppercase cursor-pointer hover:text-blue-700'>{link} </Link>)
                }
            </div>

        </nav>
    </header>
  )
}

export default Navbar