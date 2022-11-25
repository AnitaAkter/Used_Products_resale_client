import React from 'react';

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
                <div id="item4" className="carousel-item w-full">
                    <img src={a4} alt="" className="w-full" />
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