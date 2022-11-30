import React from 'react';

const SingleProduct = () => {
    return (
        <div>
            <div className="rounded-md shadow-md sm:w-96 dark:bg-gray-900 dark:text-gray-100">
                <div className="flex items-center justify-between p-3">
                    <div className="flex items-center space-x-2">
                        <img src="https://source.unsplash.com/50x50/?portrait" alt="" className="object-cover object-center w-8 h-8 rounded-full shadow-sm dark:bg-gray-500 dark:border-gray-700" />
                        <div className="-space-y-1">
                            <h2 className="text-sm font-semibold leading-none">leroy_jenkins72</h2>
                            <span className="inline-block text-xs leading-none dark:text-gray-400">Somewhere</span>
                        </div>
                    </div>
                    <button title="Open options" type="button">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
                            <path d="M256,144a64,64,0,1,0-64-64A64.072,64.072,0,0,0,256,144Zm0-96a32,32,0,1,1-32,32A32.036,32.036,0,0,1,256,48Z"></path>
                            <path d="M256,368a64,64,0,1,0,64,64A64.072,64.072,0,0,0,256,368Zm0,96a32,32,0,1,1,32-32A32.036,32.036,0,0,1,256,464Z"></path>
                            <path d="M256,192a64,64,0,1,0,64,64A64.072,64.072,0,0,0,256,192Zm0,96a32,32,0,1,1,32-32A32.036,32.036,0,0,1,256,288Z"></path>
                        </svg>
                    </button>
                </div>
                <img src="https://source.unsplash.com/301x301/?random" alt="" className="object-cover object-center w-full h-72 dark:bg-gray-500" />
                <div className="p-3">
                    <div className="flex items-center justify-between">
                        <button type="button" title="Bookmark post" className="flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
                                <path d="M424,496H388.75L256.008,381.19,123.467,496H88V16H424ZM120,48V456.667l135.992-117.8L392,456.5V48Z"></path>
                            </svg>
                        </button>
                    </div>
                    <div className="flex flex-wrap items-center pt-3 pb-1">
                        <div className="flex items-center space-x-2">
                            <div className="flex -space-x-1">
                                <img alt="" className="w-5 h-5 border rounded-full dark:bg-gray-500 dark:border-gray-800" src="https://source.unsplash.com/40x40/?portrait?1" />
                                <img alt="" className="w-5 h-5 border rounded-full dark:bg-gray-500 dark:border-gray-800" src="https://source.unsplash.com/40x40/?portrait?2" />
                                <img alt="" className="w-5 h-5 border rounded-full dark:bg-gray-500 dark:border-gray-800" src="https://source.unsplash.com/40x40/?portrait?3" />
                            </div>
                            <span className="text-sm">Liked by
                                <span className="font-semibold">Mamba UI</span>and
                                <span className="font-semibold">86 others</span>
                            </span>
                        </div>
                    </div>
                    <div className="space-y-3">
                        <p className="text-sm">
                            <span className="text-base font-semibold">leroy_jenkins72</span>Nemo ea quasi debitis impedit!
                        </p>
                        <input type="text" placeholder="Add a comment..." className="w-full py-0.5 dark:bg-transparent border-none rounded text-sm pl-0 dark:text-gray-100" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;