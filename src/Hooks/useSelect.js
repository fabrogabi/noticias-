import React from 'react';

const useSelect = ({steteInicial,opciones}) => {


    const SelecNoticias = ()=>(
        <select
        className="browser-default"
        >
            <option value="">Seleccione</option>

        </select>
    )
    return[select,SelecNoticias];
}
 
export default useSelect;