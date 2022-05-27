import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <div className='container' align='center'>
                <h1>Very Useless Functions</h1>
                <div className='container' style={btnStyle} >
                    <div>
                        <Link to='/factorial' className='btn btn-white btn-lg my-1'>Factorial</Link>
                    </div>
                    <div>
                        <Link to='/converter' className='btn btn-white btn-lg my-1'>Convert °T</Link>
                    </div>
                    <div>
                        <Link to='/changecolor' className='btn btn-white btn-lg my-1'>Color tab</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

const btnStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(1,1fr)',
    gridGap: '1rem'
}

export default Home; 
