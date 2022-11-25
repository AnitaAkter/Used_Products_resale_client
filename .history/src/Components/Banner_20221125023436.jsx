import React from 'react';
import a1 from '../assets/a1';
import a2 from '../assets/a2';
import a3 from '../assets/a3';

const Banner = () => {
    return (
        <div>
            <div className="carousel h-80">
                <div id="item1" className="carousel-item w-full">
                    <img src={a1} alt="" className="w-full" />
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img src={a2} alt="" className="w-full" />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img src={a3} alt="" className="w-full" />
                </div>

            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
                <a href="#item4" className="btn btn-xs">4</a>
            </div>
        </div>
    );
};

export default Banner;