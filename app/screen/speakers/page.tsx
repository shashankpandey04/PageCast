// app/screen/speakers/page.tsx
"use client";

import React, { useState, useEffect } from "react";

// ─────────────────────────────────────────────────────────────
// 1️⃣ SPEAKER DATA
// Replace the placeholder entries below with YOUR real speaker
// details. For each speaker, fill in:
//   - name     → full name
//   - title    → job title + company
//   - bio      → short description (1–3 lines works best on TV)
//   - photoUrl → YOUR CDN link
// ─────────────────────────────────────────────────────────────
interface Speaker {
  name: string;
  title: string;
  bio: string;
  photoUrl: string;
}

const speakers: Speaker[] = [
  {
    name: "Abhishek Dhakad",
    title: "SDE-2, AWS",
    bio: "SDE-2 at AWS and a member of the AWS re:Invent Committee. An LPU alumnus ('23), he brings first-hand experience of building cloud services at scale.",
    photoUrl: "https://static.awslpu.in/Abhishek%20Dhakad.jpg",
  },
  {
    name: "Shrishti",
    title: "SDE-2, AWS",
    bio: "SDE-2 at Amazon and a member of the AWS re:Invent Committee, with hands-on experience building and shipping software at scale.",
    photoUrl: "https://static.awslpu.in/Shrishti.jpg",
  },
   {
    name: "Amandeep Singh Bajwa",
    title: "Full Stack Architect, TCS",
    bio: "Principal Engineer and Full Stack Architect at TCS, working with ReactJS, NextJS, GraphQL and NodeJS. He leads AWS User Group Punjab, organizes tech meetups and serves on the re:Invent Committee.",
    photoUrl: "https://static.awslpu.in/Amandeep_Sir.png",
  }, {
    name: "Karan Vichare",
    title: "Solutions Architect, Ganit Inc.",
    bio: "Solutions Architect at Ganit, an AWS Golden Jacket holder, AWS Ambassador and Community Builder, and 15x AWS certified. He specializes in data engineering and analytics workloads.",
    photoUrl: "https://static.awslpu.in/Karan%20Vichare.jpg",
  }, {
    name: "Srivathsan Srinivasan",
    title: "DevSecOps Engineer, Cloud & Infrastructure, Augrade",
    bio: "DevSecOps and cloud infrastructure engineer at Augrade (ex-Firecompass) and founder of Vyoogam and SubScope. He focuses on automation, cloud infrastructure and security.",
    photoUrl: "https://static.awslpu.in/Srivathsan%20Shrinivasan.jpg",
  }, {
    name: "Harshit Jain",
    title: "Founder, TechReferrals",
    bio: "Founder of TechReferrals.in and former Staff Engineer at Intuit, helping engineers find their next opportunity. He has an audience of 44K+ on LinkedIn and 59K+ on X.",
    photoUrl: "https://static.awslpu.in/Harshit%20Jain.jpg",
  }, {
    name: "Akshita Kejriwal",
    title: "Ex-Staff Software Engineer, Intuit India",
    bio: "Former Staff Software Engineer at Intuit India and an IGDTUW alumna, with deep experience building scalable software products.",
    photoUrl: "https://static.awslpu.in/Akshita%20Kejriwal.jpg",
  }, {
    name: "Hemant Pandey",
    title: "Senior Software Engineer, LinkedIn",
    bio: "Senior Software Engineer at LinkedIn (ex-Meta, Salesforce, Tesla), featured in Business Insider and on Times Square. He helps developers grow their careers, with 74K+ followers on LinkedIn.",
    photoUrl: "https://static.awslpu.in/Hemant%20Pandey.jpg",
  }, {
    name: "Hina Arora",
    title: "Founder, BrandBuilders",
    bio: "Founder of BrandBuilders and former Engineering Manager at Jio, with 10+ years in tech and AI. She helps tech leaders build their personal brand, with 328K+ LinkedIn followers.",
    photoUrl: "https://static.awslpu.in/Hina%20Arora.jpg",
  }, {
    name: "Shailja Mishra",
    title: "Data & Applied Scientist 2, Microsoft",
    bio: "Data and Applied Scientist 2 at Microsoft and a LinkedIn Top Data Science Voice, with 180K+ LinkedIn and 115K Instagram followers.",
    photoUrl: "https://static.awslpu.in/Shailja%20Mishra.jpg",
  }, {
    name: "Anurag Pandey",
    title: "Founding Engineer, Stamina",
    bio: "Founding Engineer at Stamina (ex-founder of Relio) and a 3x founding engineer, building customer-acquisition tools for B2B SMBs. He speaks on startup engineering and cloud infrastructure.",
    photoUrl: "https://static.awslpu.in/Anurag%20Pandey.jpg",
  }, {
    name: "Anubhav Jaiswal",
    title: "SDE, agasty.ai",
    bio: "SDE at agasty.ai, which is building a Guardian AI for schools, and former Executive Lead of AWS Student Builders Group. His focus areas are AI/ML, web and Android development, and community leadership.",
    photoUrl: "https://static.awslpu.in/Anubhav%20Jaiswal.jpg",
  }
];

// ─────────────────────────────────────────────────────────────
// 2️⃣ SCREEN COMPONENT
// ─────────────────────────────────────────────────────────────
export default function SpeakersScreen() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-advance to the next speaker every 10 seconds.
  // Change 10000 to any number of milliseconds you prefer.
  useEffect(() => {
    if (speakers.length === 0) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % speakers.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  if (speakers.length === 0) {
    return (
      <div className="h-screen w-screen flex items-center justify-center bg-neutral-950 text-white text-3xl">
        No speaker data available.
      </div>
    );
  }

  const speaker = speakers[currentIndex];

  return (
    <div className="h-screen w-screen overflow-hidden flex flex-col items-center justify-center bg-neutral-950 text-white p-12">
      {/* Photo */}
      <img
        src={speaker.photoUrl}
        alt={speaker.name}
        className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover mb-8 border-4 border-emerald-500 shadow-2xl"
      />

      {/* Name & Title */}
      <h1 className="text-5xl md:text-6xl font-bold mb-3 text-center tracking-tight">
        {speaker.name}
      </h1>
      <p className="text-2xl md:text-3xl text-emerald-400 mb-8 font-medium text-center">
        {speaker.title}
      </p>

      {/* Bio */}
      <p className="text-xl md:text-2xl text-center max-w-4xl text-neutral-300 leading-relaxed">
        {speaker.bio}
      </p>

      {/* Progress dots */}
      <div className="absolute bottom-12 flex gap-3">
        {speakers.map((_, idx) => (
          <div
            key={idx}
            className={`h-2 w-10 rounded-full transition-colors duration-300 ${
              idx === currentIndex ? "bg-emerald-500" : "bg-neutral-700"
            }`}
          />
        ))}
      </div>
    </div>
  );
}