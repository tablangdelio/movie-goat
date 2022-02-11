import { Link } from "react-router-dom";
const Navbar = () => {

    return(
        <>
            <nav
                className={`
                    relative
                    w-full
                    flex
                    flex-wrap
                    items-center 
                    justify-between 
                    py-5
                    bg-neutral-900
                    text-gray-200 
                    shadow-lg 
                    navbar 
                    navbar-expand-lg 
                    navbar-light
                `}>
             <div className={`
                    container-fluid 
                    w-full 
                    flex 
                    flex-wrap 
                    items-center 
                    justify-between 
                    px-6`}>
                    
                <div className={`   
                        flex-grow 
                        items-center`}>
                        <Link class="text-xl text-white pr-2 font-semibold" to="/">Movie Goat</Link>
                </div>

                <div class="flex items-center relative">
                    <Link to="/about"> About </Link>
                </div>
             </div>

            </nav>
        </>
    );
}

export default Navbar;