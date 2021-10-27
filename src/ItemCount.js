import {useState,Fragment} from 'react';

const stock = 5;  
const Contador = () => {
    const [numero, setNumero] = useState(1);
    
    const aumentar = () => {
        if(numero < stock){
            setNumero(numero+1)
        }
    }
    const restar = () => {
        if(numero > 0) {
            setNumero(numero-1)
        }
    }
    return(
        <Fragment>
            <div className="card position-absolute">
                <div className="card-body">
                    <h3>Producto</h3>
                    <div className="d-flex justify-content-between align-items-center">
                            <button className="btn btn-light" onClick ={restar}>-</button>
                            <h3>{numero}</h3>
                            <button className="btn btn-light" onClick ={aumentar}>+</button>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default Contador;