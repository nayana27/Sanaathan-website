import React from 'react';
import '../styles/main.css';

const InitiativesSection = () => {
  const initiatives = [
    {
      id: "education",
      title: "Education",
      image: "education.jpg",
      alt: "Traditional wellness education session",
      fullContent: `Modern healthcare often relies on standardized parameters like blood pressure, sugar levels, and BMI. While useful, these one-size-fits-all standards ignore individual differences shaped by genetics, birthplace, lifestyle, and environment.

At Sanaathan Jeevan Trust, we emphasize personalized health and wellness. Using the Hereditary Medical System, we diagnose through pulse reading and design lifestyle modifications, dietary adjustments, and natural supplements tailored to each individual. This holistic approach addresses physical, mental, and social well-being.

We offer 3-day interactive sessions for people who wish to learn more about ancient sciences, wellness practices, and sustainable living. These classes blend theory and practice, allowing participants to experience traditional methods first-hand.

We also support underprivileged but gifted students through educational sponsorships. By investing in their future, we aim to empower the next generation to carry forward both modern education and traditional wisdom.`,
      features: [
        "3-day interactive wellness sessions",
        "Hereditary Medical System training", 
        "Educational sponsorships for students",
        
      ],
    //  stats: { "Students": "500+", "Sessions": "50+", "Communities": "25+" }
    },
    {
      id: "gosala",
      title: "Gosala",
      image: "gosala.jpg", 
      alt: "Peaceful cow shelter with happy cows",
      fullContent: `Our Gosala is home to over 350 cows and bulls, each nurtured with love and respect. The animals are treated not as resources but as family members—each one is given a name and responds warmly when called.

We ensure they receive their mother's milk, a balanced diet, and herbal immunity boosters. They graze freely under the sun, enjoy fresh pastures, and live in a stress-free environment. The Gosala not only provides nourishment and cow-based produce but also stands as a living example of compassion and harmony with nature. Visitors often find it to be a place of peace.`,
      features: [
        "350+ cows and bulls cared for",
        "Natural grazing pastures", 
        "Herbal immunity programs",
        "Stress-free environment"
      ],
    //   stats: { "Cows": "300+", "Bulls": "100+", "Years": "5+" }
    },
    {
      id: "free-medicine",
      title: "Free Medicine Distribution",
      image: "medicine.jpg",
      alt: "Traditional medicine preparation and distribution",
      fullContent: `Healthcare is a fundamental right, yet many cannot afford even basic treatment. At Sanaathan Jeevan Trust, we provide free medicines to underprivileged individuals and families.

Our medicines are prepared using traditional formulations passed down for generations. Many of these remedies are cow-based or herb-based, designed to address root causes rather than just symptoms. By offering this service, we aim to bring accessible, affordable, and effective healthcare to those who need it the most.`,
      features: [
        "Traditional formulations",
        // "Cow-based and herb-based remedies", 
        "Free distribution to underprivileged",
        "Addressing root causes not just symptoms"
      ],
    //   stats: { "Recipients": "1000+", "Formulations": "50+", "Villages": "30+" }
    },
    {
      id: "food-services",
      title: "Food Services",
      image: "food.jpg",
      alt: "Wholesome sattvic meals being served",
//       fullContent: `We believe food is not just nourishment for the body but also for the soul. At our Trust, every visitor is treated as an honored guest and served wholesome, sattvic meals prepared with love.

// Our food is cooked using traditional methods, free from chemical additives, and sourced from organic produce wherever possible. Sharing a meal here is more than just eating—it is an experience of warmth, community, and spiritual hospitality.`,
 fullContent: 'We believe food is not only a source of nourishment but also an important part of well-being. At our Trust, every visitor is welcomed with care and served meals prepared with attention to quality and hygiene. Our food is made using traditional methods, free from chemical additives, and wherever possible, sourced from fresh and organic produce. Sharing a meal here is designed to provide not just nutrition, but also a sense of comfort, community, and hospitality.',
features: [
        // "Sattvic meals prepared with love",
        "Traditional cooking methods", 
        "Organic produce",
        "Chemical-free ingredients"
      ],
    //   stats: { "Meals Served": "5000+", "Visitors": "1000+", "Years": "3+" }
    },
    {
      id: "health-camps",
      title: "Health Camps",
      image: "health-camp.jpg",
      alt: "Community health camp in progress",
      fullContent: `To extend our service beyond the Trust, we conduct regular health camps and awareness programs across Andhra Pradesh and Telangana. These camps educate people about ancient wellness practices, provide free pulse diagnosis, and suggest sastric medicines.

Through public meetings, we also encourage people to adopt lifestyle changes rooted in tradition, helping communities to build resilience and long-term health. These initiatives have touched the lives of thousands, spreading awareness about natural and holistic living.`,
      features: [
        "Free pulse diagnosis",
        "Natural medicine distribution", 
        "Wellness awareness programs",
        "Community health education"
      ],
    //   stats: { "Camps": "75+", "People Reached": "5000+", "Villages": "50+" }
    },
    {
      id: "cow-medicine",
      title: "Cow-based Medicine Manufacturing",
      image: "cow-medicine.jpg",
      alt: "Traditional cow-based medicine preparation",
      fullContent: `The cow has been revered for centuries as a source of nourishment, medicine, and well-being. At the Trust, we prepare a wide variety of cow-based products, including buttermilk, ghee, Maha Panchagavya and Maha Triphala Grutham and Katchika (a blend of cow dung ash, clove, and salt) for natural oral hygiene.

These products are prepared with strict adherence to traditional methods, ensuring purity and effectiveness.`,
      features: [
        "Maha Panchagavya for immunity",
        "Katchika for oral hygiene", 
        "Traditional preparation methods",
        "Purity and effectiveness"
      ],
    //   stats: { "Products": "15+", "Recipients": "2000+", "Years": "4+" }
    },
    {
      id: "manuscripts",
      title: "Palm Leaf Manuscript Digitisation",
      image: "manuscripts.jpg",
      alt: "Ancient palm leaf manuscripts being digitized",
      fullContent: `Ancient manuscripts hold vast treasures of knowledge in medicine, philosophy, agriculture, and spirituality. Sadly, many were destroyed in invasions, while others are slowly deteriorating.

To safeguard this heritage, Sanaathan Jeevan Trust has initiated a major digitisation project. With high-end scanners imported from France, our trained staff carefully clean, scan, translate, and preserve palm leaf manuscripts.

So far, we have successfully conserved 7,87,259 folios—a milestone in cultural preservation. This initiative ensures that the wisdom of our ancestors remains alive and accessible for future generations.`,
      features: [
        "High-end scanning technology",
        "Careful cleaning and preservation", 
        "Translation of ancient texts",
        "Cultural heritage conservation"
      ],
      stats: { "Palmleaf Folios": "787,259+", "Palmleaf Manuscripts": "787,259+", "Papers": "169,358+" }
    },
    {
      id: "agriculture",
      title: "Hereditary Organic Agricultural Practices ",
      image: "agriculture.jpg",
      alt: "Organic farming training session",
      fullContent: `We practice and promote traditional organic agriculture, where the focus is on quality over quantity. Our methods include enriching soil with natural products, strengthening crops and avoiding chemical fertilizers and pesticides entirely.

Through workshops and training programs, we encourage farmers, students, and enthusiasts to adopt these sustainable practices. Participants not only learn techniques but also gain a deeper respect for the environment and the cycle of life.`,
      features: [
        "Soil enrichment with natural products",
        "Crop strengthening with Fermented Buttermilk", 
        "Chemical-free farming",
        "Sustainable agriculture training"
      ],
    //   stats: { "Farmers Trained": "300+", "Acres": "50+", "Workshops": "40+" }
    }
  ];

  const initiativeTags = [
    { id: "education", name: "Education" },
    { id: "gosala", name: "Gosala" },
    { id: "free-medicine", name: "Free Medicine" },
    { id: "food-services", name: "Food Services" },
    { id: "health-camps", name: "Health Camps" },
    { id: "cow-medicine", name: "Cow Medicine" },
    { id: "manuscripts", name: "Manuscripts" },
    { id: "agriculture", name: "Agriculture" }
  ];

  const scrollToInitiative = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="initiatives-section">
      <h2 className="section-title">Our Initiatives</h2>
      
      <div className="initiatives-list">
        <div className="initiatives-grid">
          {initiativeTags.map((tag, index) => (
            <a
              key={index}
              className="initiative-tag"
              onClick={() => scrollToInitiative(tag.id)}
              href={`#${tag.id}`}
            >
              <div className="initiative-tag-content">{tag.name}</div>
            </a>
          ))}
        </div>
      </div>

      <div className="initiatives-container">
        {initiatives.map((initiative, index) => (
          <div key={index} id={initiative.id} className="initiative-item">
            <h3 className="initiative-title">{initiative.title}</h3>
            
            <div className={`initiative-header ${index % 2 === 0 ? 'image-left' : 'image-right'}`}>
              <div className="initiative-image">
                <img 
                  src={`${process.env.PUBLIC_URL}/images/initiatives/${initiative.image}`}
                  alt={initiative.alt}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextElementSibling.style.display = 'block';
                  }}
                />
                <div className="image-placeholder" style={{display: 'none'}}>
                  <span>{initiative.alt}</span>
                </div>
              </div>
              
              <div className="initiative-content">
                <div className="initiative-text">
                  {initiative.fullContent}
                </div>
              </div>
            </div>
            
            {/* Render features only if present */}
            {initiative.features?.length > 0 && (
              <div className="feature-list">
                {initiative.features.map((feature, idx) => (
                  <div key={idx} className="feature-item">
                    {/* <span className="feature-icon">•</span> */}
                    <span className="feature-text">{feature}</span>
                  </div>
                ))}
              </div>
            )}
            
            {/* Render stats only if present */}
            {initiative.stats && Object.keys(initiative.stats).length > 0 && (
              <div className="initiative-stats">
                {Object.entries(initiative.stats).map(([key, value]) => (
                  <div key={key} className="stat-item">
                    <span className="stat-number">{value} </span>
                    <span className="stat-label">{key}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default InitiativesSection;