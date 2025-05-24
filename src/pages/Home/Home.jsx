import React from 'react';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import Sidebar from '../../components/common/Sidebar';
import NewsSection from './NewsSection';
import './Home.css';

const HomePage = () => {
  return (
    <div className="home-container">
      <Header />

      <main className="main-content">
        <div className="content-wrapper">
          {/* Main Content (новости) — сдвигаем вправо */}
          <div className="news-container">
            <div className="news-section">
              <NewsSection />
            </div>
          </div>

          {/* Sidebar — оставляем на месте */}
          <div className="sidebar-container">
            <div className="news-section">
            <Sidebar />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;