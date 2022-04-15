import React from 'react';
import Latest from './ui/latest';
import Best from './ui/best';
import Toprated from './ui/topRated';

const Bestselling = ({Lgames, Pgames, Tgames}) => {
    return (
        <div className='row'>
           <div className="bestSelling__wrapper">
               <Latest games={Lgames}/>
               <Best games={Pgames}/>
               <Toprated games={Tgames}/>
            </div> 
        </div>
    );
}

export default Bestselling;
