import React from 'react'
import { Link } from 'react-router-dom'
import "../components/aboutMe.css"
const AboutMe = () => {
  return (
    <div>
        <h1 className='title-about-page'>About</h1>
    <div className='flex'>
        <div>
            <br/>
            <br/>
            <br/>
            <br/>
    
            <p>Bun venit pe blogul meu,</p>

            <p>Un spațiu în care pasiunea pentru frontend web development se împletește armonios cu un interes profund pentru business, marketing și branding. Sunt o iubitoare de libertate și creativitate, două elemente care stau la baza fiecărui proiect pe care îl dezvolt. </p>
          
            <p>Crearea unei experiențe utilizator unice prin linii de cod atent gândite și optimizarea acestora pentru o prezență digitală remarcabilă sunt lucruri care mă motivează și mă inspiră.</p>
            
            <p>Îmi place să explorez tendințele actuale în tehnologie și afaceri, să găsesc soluții inovatoare și să împărtășesc aceste descoperiri cu cititorii mei. Blogul meu este o platformă dedicată nu doar celor pasionați de dezvoltarea web, ci și celor care doresc să-și dezvolte afacerea sau să-și consolideze identitatea de brand în era digitală. În articolele mele, vei găsi analize aprofundate, strategii creative și sfaturi practice pentru a naviga cu succes în lumea complexă a business-ului modern.</p>
          
            <p>Scopul meu este să te ajut să îți îndeplinești obiectivele profesionale, fie că ești la început de drum sau cauți să te reinventezi. Prin combinarea cunoștințelor tehnice cu înțelegerea profundă a pieței, te voi ghida în crearea unor experiențe digitale memorabile și în construirea unei prezențe online care să vorbească cu adevărat despre tine și valorile tale.</p>
            
            <p>Te invit să descoperim împreună secretele succesului în dezvoltarea web și business, într-o călătorie în care fiecare articol este o nouă sursă de inspirație și cunoaștere.</p>
           <br/>
            <Link to="/"style={{ textDecoration: "none", color: "#1c9267" }}><strong>Incepe de aici..</strong></Link>
        </div>

        <div>
            <img src="https://images.pexels.com/photos/6531738/pexels-photo-6531738.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="avatar-about" />
        </div>
      
    </div>
    </div>
  )
}

export default AboutMe
