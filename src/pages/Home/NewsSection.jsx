import React from 'react';
import { Link } from 'react-router-dom';
import './NewsSection.css';

const NewsSection = () => {
  const newsItems = [
    {
      id: 1,
      title: 'Bed Wars Update - New Maps, and Bug Fixes',
      content: 'Hello! Today we are bringing a small update to Sheep Wars with 8 new maps, some Layout Editor improvements, a couple QoL changes, and several bug fixes!',
      image: '/images/img_bedwars.png',
      author: 'LootCore team',
      date: '9:18 PM'
    },
    {
      id: 2,
      title: 'Murder Mystery - Descent Into Madness Update',
      content: 'Hello! Today we are bringing a small update to Sheep Wars with 8 new maps, some Layout Editor improvements, a couple QoL changes, and several bug fixes!',
      image: '/images/img_murdermystery.png',
      author: 'LootCore team',
      date: '9:18 PM'
    },
    {
      id: 3,
      title: 'Bug Fixes - October 2025',
      content: '',
      image: '',
      author: '',
      date: ''
    }
  ];

  return (
    <div className="news-container">
      {newsItems.map((item) => (
        <div key={item.id} className="news-item">
          <div className="news-header">
            <h2 className="news-title">
              {item.title}
            </h2>
          </div>

          {item.image && (
            <div className="news-content">
              <img 
                src={item.image} 
                alt={item.title} 
                className="news-image"
              />

              <p className="news-text">
                {item.content}
              </p>
            </div>
          )}

          {item.author && (
            <div className="news-footer">
              <p className="news-author">
                by {item.author} at {item.date}
              </p>
              <Link 
                to={`/news/${item.id}`} 
                className="read-more"
              >
                Continue reading..
              </Link>
            </div>
          )}
        </div>
      ))}

      {/* Pagination */}
      <div className="pagination">
        {[1,2,3,4].map((page) => (
          <Link 
            key={page} 
            to={`/?page=${page}`} 
            className="page-link"
          >
            <span className="page-number">{page}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NewsSection;