import React from 'react';
import styles from './Formulario.module.css'


const Formulario = () => {
    return ( 
        <div className={`${styles.buscador} row`}>
            <div className="col s12 m8 off-set-m2">
                <form>
                    <h2 className={styles.heading}>Encuentra Noticias por Categoria</h2>
                    <div className="imput-fild col s12 ">
                        <input 
                        tipe="submit"
                        className={`${styles.btn_block} btn-large amber darken-2`}
                        value="Buscar"
                        />
                    </div>
                </form>
            </div>
        </div>

     );
}
 
export default Formulario;