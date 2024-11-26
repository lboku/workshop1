import React from 'react';
import './App.css';

const ShoppingItem = ({ title, stock, rating, badges }) => {
  return (
    <div className="shopping-item">
      <h3>{title}</h3>
      <img
        src="https://images.unsplash.com/photo-1493612276216-ee3925520721?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHJhbmRvbXxlbnwwfHwwfHx8MA%3D%3D"
        alt="Product"
      />
      <div className="description">
        <span>{stock}</span>
        <span>{rating}/5</span>
      </div>
      <div className="badges">
        {badges.map((badge, index) => (
          <span key={index} className={`badge-${index + 1}`}>
            {badge}
          </span>
        ))}
      </div>
      <button>Add To Cart</button>
    </div>
  );
};

const App = () => {
  const shoppingItems = [
    { title: 'Lorem, ipsum dolor', stock: 'In Stock', rating: 1.5, badges: ['sport', 'lifestyle'] },
    { title: 'Lorem, ipsum dolor', stock: 'Out of Stock', rating: 3.4, badges: ['Casual', 'lifestyle'] },
    { title: 'Lorem, ipsum dolor', stock: 'Out of Stock', rating: 0.5, badges: ['sport', 'lifestyle'] },
    { title: 'Lorem, ipsum dolor', stock: 'In Stock', rating: 1, badges: ['Casual', 'lifestyle'] },
    { title: 'Lorem, ipsum dolor', stock: 'In Stock', rating: 2.5, badges: ['Casual', 'lifestyle'] },
    { title: 'Lorem, ipsum dolor', stock: 'Out of Stock', rating: 4.9, badges: ['sport', 'lifestyle'] },
  ];

  return (
    <div>
      <main className="container">
        {shoppingItems.map((item, index) => (
          <ShoppingItem
            key={index}
            title={item.title}
            stock={item.stock}
            rating={item.rating}
            badges={item.badges}
          />
        ))}
      </main>

      <section className="container">
        <div className="block-listing">
          <span className="badge-1">Random 1</span>
          <span className="badge-2">Random 2</span>
          <span className="badge-3">Random 3</span>
          <span className="badge-4">Random 4</span>
        </div>
        <div className="banner"></div>
      </section>
    </div>
  );
};

export default App;
// ბოლომდე ჩემი დაწერილი არაა ai დავიხმარე მთლად სწორად ვერ გავანალიზე ყველაფერი. ხვალაც გადავხედავ იმედია გავიგებ :)
