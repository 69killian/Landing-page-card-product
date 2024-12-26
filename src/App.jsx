import React, { useState, useEffect } from 'react';
import Cards from './components/Cards.jsx';
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import Filters from './components/Filters.jsx';
import { DotPattern } from './components/dot-pattern';

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
    setFilteredCardData(filtered); // Maj des cartes filtrées
  }, [searchQuery, filter, cardData]); // Réagi aux changements de `searchQuery`, `filter` ou `cardData`

  return (
    <>
      <DotPattern
        width={20}
        height={20}
        cx={8}
        cy={8}
        cr={4}
        className="absolute top-0 left-0 w-full h-full z-0" 
      />

      <div className="App flex justify-center items-center">
        <div className="relative overflow-hidden pb-[150px]">
          <Header />
          <Filters 
            setSearchQuery={setSearchQuery}
            setFilter={setFilter}
          />
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
                  buttonText={card.buttonText}
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