import React, { useState } from 'react';

import Componente1 from '.././components/components20/componente1.jsx';
import Componente2 from '.././components/components20/componente2.jsx';
import Componente3 from '.././components/components20/componente3.jsx';
import Componente4 from '.././components/components20/componente4.jsx';
import Componente5 from '.././components/components20/componente5.jsx';
import Componente6 from '.././components/components20/componente6.jsx';
import Componente7 from '.././components/components20/componente7.jsx';
import Componente8 from '.././components/components20/componente8.jsx';
import Componente9 from '.././components/components20/componente9.jsx';
import Componente10 from '.././components/components20/componente10.jsx';
import Componente11 from '.././components/components20/componente11.jsx';
import Componente12 from '.././components/components20/componente12.jsx';
import Componente13 from '.././components/components20/componente13.jsx';
import Componente14 from '.././components/components20/componente14.jsx';
import Componente15 from '.././components/components20/componente15.jsx';
import Componente16 from '.././components/components20/componente16.jsx';
import Componente17 from '.././components/components20/componente17.jsx';
import Componente18 from '.././components/components20/componente18.jsx';
import Componente19 from '.././components/components20/componente19.jsx';
import Componente20 from '.././components/components20/componente20.jsx';

const Componentes = () => {
    return (
        <div className="main-content">
            <h1>Lista de 20 Componentes</h1>
            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)', // 3 columnas para distribuir los componentes
                    gap: '20px',
                }}
            >
                <Componente1 />
                <Componente2 />
                <Componente3 />
                <Componente4 />
                <Componente5 />
                <Componente6 />
                <Componente7 />
                <Componente8 />
                <Componente9 />
                <Componente10 />
                <Componente11 />
                <Componente12 />
                <Componente13 />
                <Componente14 />
                <Componente15 />
                <Componente16 />
                <Componente17 />
                <Componente18 />
                <Componente19 />
                <Componente20 />
            </div>
        </div>
    );
};

export default Componentes;