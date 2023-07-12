import {GiHamburgerMenu} from "react-icons/gi";

const Header = () => {
    return (
        <header className="flex bg-black fixed top-0 left-0 right-0  ">
            {/* Parte izquierda: Logo */}
            <div className="w-3/12 flex justify-center items-center sm:ml-3 md:ml-2 lg:ml1 ">
                <img src="/logoRickAndMorty.png" alt="logoRickAndMorty" className="md:w-10/12 lg:6/12" />
            </div>

            {/* Parte central: Buscador */}
            <div className="w-6/12 py-4 px-6 flex flex-col md:m-4 lg:m-6">
                <div className="flex sm:w-full ">
                    <form className={'w-full grid grid-cols-2 flex justify-center items-center'}>
                        <input
                            className="w-full rounded pl-3 md:py-1 lg:py-1"
                            type="text"
                            placeholder="Buscar..."
                        />
                        <button type="submit" className={'text-white hover:text-black bg-primary rounded ml-4 md:py-1 lg:p-1 sm:w-5/12 md:w-6/12 lg:w-4/12 '}>Buscar</button>
                    </form>
                </div>
            </div>

            {/* Parte derecha: Historia */}
            <div className={'w-3/12'}>
                <nav>
                    <ul className="mt-4">
                        <li className="py-2">
                            <a href="@/components/layout/SideBar#" className="text-white hover:text-primary">
                                Historia
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>

        </header>
    );
}

export default Header;