import React, { useState, useEffect } from 'react';
import Cards from './components/Cards.jsx';
import Footer from './components/Footer.jsx';
import Hero from './components/Hero.jsx';
import Filters from './components/Filters.jsx';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState('All Challenges');
  const [cardData, setCardData] = useState([]);
  const [filteredCardData, setFilteredCardData] = useState([]);

  // Charge les données depuis le fichier JSON
  useEffect(() => {
    fetch("cardData.json")
      .then(response => response.json())
      .then(data => {
        setCardData(data.cardData); // Charge toutes les données
        setFilteredCardData(data.cardData); // Applique les données initiales pour l'affichage
      })
      .catch(error => console.log(error));
  }, []);

  // Applique les filtres et la recherche
  useEffect(() => {
    const filtered = cardData.filter(card => {
      if (!card.title) return false; 
      const matchesSearch = card.title.toLowerCase().includes(searchQuery.toLowerCase()); 
      const matchesFilter =
        filter === 'All Challenges' ||
        (filter === 'Premium' && card.premium) ||
        (filter === 'Free' && !card.premium);
      return matchesSearch && matchesFilter;
    });
    setFilteredCardData(filtered); // Met à jour les cartes filtrées
  }, [searchQuery, filter, cardData]);

  return (
    <>
      {/* Pass searchQuery and setSearchQuery to Hero */}
      <div className="flex justify-center items-center">
        <Hero 
          searchQuery={searchQuery} 
          setSearchQuery={setSearchQuery} 
        />
      </div>

      <div className="App flex justify-center items-center">
        <div className="relative overflow-hidden pb-[150px] px-10">
          <Filters setSearchQuery={setSearchQuery} setFilter={setFilter} />
          {filteredCardData.length === 0 ? (
            <div className="text-center mt-20 mb-20 text-[40px]">
              <p>Sorry :/ <br /> We don't have this challenge</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-[14.74px] mt-10 px-4">
              {filteredCardData.map((card) => (
                <Cards 
                  key={card.id}
                  cardId={card.id}
                  cardImage={card.cardImage}
                  cardImageAlt={card.cardImageAlt}
                  title={card.title}
                  description={card.description}
                  premium={card.premium}
                  free={card.free}
                />
              ))}
            </div>
          )}
          <Footer />
        </div>
      </div>
    </>
  );
}
