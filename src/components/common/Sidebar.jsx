import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  const threads = [
    {
      id: 1,
      title: 'За что меня забанили?',
      author: 'DemankRus',
      date: 'Today at 8:14 PM'
    },
    {
      id: 2,
      title: 'За что меня забанили?',
      author: 'DemankRus',
      date: 'Today at 8:14 PM'
    },
    {
      id: 3,
      title: 'За что меня забанили?',
      author: 'DemankRus',
      date: 'Today at 8:14 PM'
    }
  ];

  return (
    <div className="sidebar">
      {/* VIP Store Promo */}
      <div className="vip-promo">
        <img 
          src="/images/img_ayellowcardwiththeinscriptionvip_1.png" 
          alt="VIP Card" 
          className="vip-card-image"
        />
        <Link 
          to="/store" 
          className="store-link"
        >
          Open Store
        </Link>
      </div>

      {/* Threads Section */}
      <div className="threads-section">
        <div className="threads-header">
          <h3 className="threads-title">
            Threads
          </h3>
        </div>

        {/* Thread List */}
        <div className="thread-list">
          {threads.map(thread => (
            <div
              key={thread.id}
              className="thread-item"
            >
              <div className="thread-content">
                <p className="thread-title">
                  {thread.title}
                </p>
                <p className="thread-meta">
                  by {thread.author}, {thread.date}
                </p>
              </div>
              <div className="thread-decoration"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;