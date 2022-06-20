import React, {useState} from 'react';
import PropTypes from 'prop-types';


const Greetinff = (props) => {

    const [age, setage] = useState(29);

    const sumaAño = () => {
        setage(age + 1)
    }

    return (
        <div>
            <h1>Hey {props.name} desde componentes funcion</h1>
            <h2>Tu edad es {age} </h2>
            <div>
                <button onClick={sumaAño}>Suma año</button>
            </div>
        </div>
    );
};


Greetinff.propTypes = {
    name: PropTypes.string,
};


export default Greetinff;
