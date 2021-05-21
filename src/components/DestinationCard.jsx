import React from 'react'
export default function DestinationCard({destination}) {
    return (
        <div className="card-container">
            <img src={destination.imageUrl} alt={destination.imageAlt} className="card-image" />
            <div className="card-content-wrapper">
                <h3 className="card-title">
                    {destination.city}
                </h3>
                <p className="text-gray-600">${destination.averagePrice} / night average</p>
                <div className="mt-4">
                    <a href="#" className="text-indigo-500 hover:text-indigo-400 font-semibold text-sm">
                        Explore {destination.propertyCount} properties
                    </a>
                </div>
            </div>
        </div>
    )
}