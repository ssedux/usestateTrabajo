import React, { useState } from 'react';
import '.././App.css';
import PersonalCard from '.././components/PersonalCard.jsx';

function Yo() {
  // Datos personales que serán pasados como props
  const personalInfo = {
    name: "Eduardo Sanchez",
    profession: "Desarrollador Web",
    email: "christhiansanchez2409@example.com",
    phone: "+503 35325243",
    location: "Mi casa",
    avatar: "/profile-picture.jpg", // Coloca una imagen en la carpeta public
    bio: "yo soy yo y soy programador dos puntos parentecis cerrado",
    skills: ["React", "JavaScript", "HTML", "CSS", "Node.js"],
    social: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com"
    }
  };

  return (
    <div className="main-content">
      <PersonalCard 
        name={personalInfo.name}
        profession={personalInfo.profession}
        email={personalInfo.email}
        phone={personalInfo.phone}
        location={personalInfo.location}
        avatar={personalInfo.avatar}
        bio={personalInfo.bio}
        skills={personalInfo.skills}
        social={personalInfo.social}
      />
    </div>
  );
}

export default Yo;