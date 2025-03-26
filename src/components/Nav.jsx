import React from 'react';

const Nav = () => {
    return (
        <nav className="bg-black-600 text-white shadow-md fixed top-0 left-0 w-full z-50" style={{ height: '60px' }}>
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                <div className="text-lg font-bold">MyApp</div>
                <ul className="flex space-x-4">
                    <li>
                        <a href="/" className="hover:text-gray-200">
                            Calculadora
                        </a>
                    </li>
                    <li>
                        <a href="/tareas" className="hover:text-gray-200">
                            Tareas
                        </a>
                    </li>
                    <li>
                        <a href="/componentes" className="hover:text-gray-200">
                            Componentes
                        </a>
                    </li>
                    <li>
                        <a href="/yo" className="hover:text-gray-200">
                            Yo
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Nav;