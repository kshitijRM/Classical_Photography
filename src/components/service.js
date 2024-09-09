import React from 'react';
import Navbar from './Navbar';
import './Services.css';
import Footer from './footer';
const servicesList = [
    {
        title: "Wedding Photography",
        description: "Capture the special moments of your wedding day with our professional wedding photography services.",
        imageUrl: "https://josephkingphotography.in/wp-content/uploads/2022/08/Best-wedding-Photographer-Indore-Joseph-King-Photography3.jpg",
        price: "₹50,000",
        rating: 4.9,
        specialOffer: "10% off for June weddings!"
    },
    {
        title: "Portrait Photography",
        description: "High-quality portrait photography to capture your personality and style.",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlIqjBvIq4q6L-LkJQxz7DHhPapWub62TTcgWS7Zn6P_59jmMYI3SpM8WO6Jo-znNWUyw&usqp=CAU",
        price: "₹500",
        rating: 4.5,
        specialOffer: "Book two sessions, get one free!"
    },
    {
        title: "Event Photography",
        description: "Professional photography services for all types of events, big or small.",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFOP7CLHGC5QK2PGW4RuskVpHvQ61FouDm-g&s",
        price: "₹4,000",
        rating: 4.8,
        specialOffer: "15% off for corporate events!"
    },
    {
        title: "Family Photography",
        description: "Beautiful family portraits that you will cherish forever.",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSss2ewjs5Y43-BXrmqUZM5Z-vbDwSWbPr34Q&s",
        price: "₹1,500",
        rating: 4.6,
        specialOffer: "Holiday special: ₹500 off!"
    },
    {
        title: "Nature Photography",
        description: "Explore the beauty of nature with our stunning nature photography sessions.",
        imageUrl: "https://i.pinimg.com/736x/70/be/82/70be82a2455e89c6ed29587df1b3236b.jpg",
        price: "₹7,000",
        rating: 4.7,
        specialOffer: "Free canvas print with every session!"
    },
    {
        title: "Fashion Photography",
        description: "Capture your style and personality with our professional fashion photography services.",
        imageUrl: "https://live.staticflickr.com/65535/49586971678_2611070c81_z.jpg",
        price: "₹5,000",
        rating: 4.9,
        specialOffer: "Complimentary wardrobe consultation included!"
    },
    {
        title: "Pet Photography",
        description: "Celebrate your furry friends with our adorable pet photography sessions.",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgocAIrxPLNGT-IGEttkOTnmDguhRdJkufiA&s",
        price: "₹500",
        rating: 4.5,
        specialOffer: "Bring a friend's pet and get 50% off your session!"
    },
    {
        title: "Drone Photography",
        description: "Capture unique aerial perspectives with our drone photography services.",
        imageUrl: "https://masterbundles.com/wp-content/uploads/2023/04/c-37.jpg",
        price: "₹70,000",
        rating: 4.8,
        specialOffer: "Discounted rates for multiple locations!"
    },
];

const ServiceItem = ({ title, description, imageUrl, price, rating, specialOffer }) => (
    <div className="service-item">
        <img src={imageUrl} alt={title} className="service-image"/>
        <h3 className="service-title">{title}</h3>
        <p className="service-description">{description}</p>
        <p className="service-price">{price}</p>
        <p className="service-rating">Rating: {rating} ⭐</p>
        {specialOffer && <p className="service-special-offer">{specialOffer}</p>}
    </div>
);

const Services = () => {
    return (
        <div>
            <Navbar />
            <div className="services-container">
                <h2>Our Photography Services</h2>
                <div className="services-list">
                    {servicesList.map((service, index) => (
                        <ServiceItem 
                            key={index}
                            title={service.title}
                            description={service.description}
                            imageUrl={service.imageUrl}
                            price={service.price}
                            rating={service.rating}
                            specialOffer={service.specialOffer}
                        />
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Services;
