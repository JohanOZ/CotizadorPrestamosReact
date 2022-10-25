function Header () {

    return (
        <nav className="bg-fondo border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
                <a className="flex items-center">
                    <img src="https://flowbite.com/docs/images/logo.svg" alt="Logo" className="mr-3 h-6 sm:h-9"/>
                    <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Te Damos Lana</span>
                </a>
            </div>
        </nav>
    )
}

export default Header;