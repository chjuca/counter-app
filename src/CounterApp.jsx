import PropTypes from 'prop-types';
import { useState } from 'react';

const CounterApp = ({value}) => {

    const [counter, setCounter] = useState(value)

    const handleAdd = () => {
        setCounter(counter + 1)
    }

    const handleSubtract = () => {
        setCounter(counter - 1)
    }

    const handleReset = () => {
        setCounter(value)
    }

    return <>
        <h1>CounterApp</h1>
        <p>{counter}</p>

        <button aria-label="btn-increment" onClick={handleAdd}> +1 </button>
        <button aria-label="btn-decrement" onClick={handleSubtract }> -1 </button>
        <button aria-label="btn-reset" onClick={handleReset}> Reset </button>
    </>
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired,
}

// CounterApp.defaultProps = {
//     value: 5
// }

export default CounterApp