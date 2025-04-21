import React from 'react';
import bannerImage from '../../assets/books.jpg'
const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                    src={bannerImage}
                    className="max-w-sm rounded-lg shadow-2xl"
                />
                <div>
                    <h2 className="text-4xl font-bold">Your Next Chapter Starts Here.</h2>
                    <p className="py-6">
                        Discover your next literary obsession and add a fresh spark to your bookshelf. Your adventure in reading begins now.

                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;