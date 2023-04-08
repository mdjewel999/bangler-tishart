import React from 'react';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import Anti from '../Anti/Anti';
import './Grandpa.css'

const Grandpa = () => {
    return (
        <div className='grandpa'>
            <h1>Grandpa </h1>
           <section className='flex'>
           <Father></Father>
            <Uncle></Uncle>
            <Anti></Anti>
           </section>
        </div>
    );
};

export default Grandpa;