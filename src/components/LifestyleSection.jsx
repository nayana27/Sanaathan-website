import React from 'react';
import FlipCard from './FlipCard';
import '../styles/main.css';

const LifestyleSection = () => {
  const lifestyleTips = [
    {
      title: "Drink Hot Water",
      content: "Wake up before sunrise. Slowly sip 2 glasses of hot water before brushing. This carries natural mouth microbes into the digestive system, cleansing the gut, stimulating bowel movement, healing ulcers, and boosting probiotics",
      image: "hot-water.jpg"
    },
    {
      title: "Brush Naturally",
      content: "Avoid chemical toothpastes. Use neem sticks, salt, mustard powder, or herbal blends like Kachika. Natural brushing keeps taste buds sharp so your body digests food correctly and prevents indigestion.",  image: "natural-brush.jpg"
    },
    {
      title: "Cold Water Bath",
      content: "Take a cold shower or bath. It burns excess fat, improves blood circulation, strengthens immunity, reduces pain, and balances cholesterol, blood pressure, and sugar.",
       image: "cold-bath.jpg"
    },
    {
      title: "Eat Right",
      content: " Eat two cooked meals a day with at least 7–8 hours between them. Take your second meal before sunset. Between meals, take seasonal fruits & buttermilk. Eat local, traditional foods your ancestors ate, chew slowly, and finish the day with warm water or milk for good sleep.",
      image: "healthy-food.jpg"
    }
  ];

  return (
    <section className="lifestyle-section">
      <h2 className="section-title">Sanaathan Jeevan Lifestyle</h2>
      <div className="cards-container">
        {lifestyleTips.map((tip, index) => (
          <FlipCard 
            key={index}
            title={tip.title}
            content={tip.content}
            image={tip.image}
          />
        ))}
      </div>
    </section>
  );
};

export default LifestyleSection;