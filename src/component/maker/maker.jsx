import React from 'react';
import { useHistory } from 'react-router';

const Maker = (props) => {
    const history = useHistory();
    
    return (
    <h1>{history.location.state.name}</h1>
)

}

export default Maker;