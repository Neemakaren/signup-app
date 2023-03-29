import React from 'react';
import Sidebar from '../components/Sidebar';
import Posts from '../components/Posts';
import Popular from '../components/Popular';


const Home = () => {
  return (
    <>
    <section className='featured-articles section section-header-offset'>
     <div className="featured-articles-container container d-grid">
 
 <div className="featured-content d-grid">
 
     <div className="headline-banner">
         <span className="headline-description">Check out all or Awesome Smoothie Recipes..... </span>
         <div className='search-input'>
         </div>
     </div>
 
     <a href="./categories" className="article featured-article featured-article-1">
         <img src="../images/featured/featured-5.jpg" alt="" className="article-image"/>
         <span className="article-category">Delicious</span>
 
         <div className="article-data-container">
 
             <div className="article-data">
                 <span>Dec 5th 2021</span>
                 <span className="article-data-spacer"></span>
                 <span>8 Min read</span>
             </div>
 
             <h3 className="title article-title">Fruity Flavor</h3>
 
         </div>
     </a>
 
     <a href="./post.html" className="article featured-article featured-article-2">
         <img src="../images/featured/featured-8.jpg" alt="" className="article-image"/>
         <span className="article-category">Tasty</span>
 
         <div className="article-data-container">
 
             <div className="article-data">
                 <span>Dec 6th 2021</span>
                 <span className="article-data-spacer"></span>
                 <span>4 Min read</span>
             </div>
 
             <h3 className="title article-title">Fine dining 101</h3>
 
         </div>
     </a>
 
     <a href="./post.html" className="article featured-article featured-article-3">
         <img src="../images/featured/featured-7.jpg" alt="" className="article-image"/>
         <span className="article-category">Healthy</span>
 
         <div className="article-data-container">
 
             <div className="article-data">
                 <span>Dec 5th 2021</span>
                 <span className="article-data-spacer"></span>
                 <span>5 Min read</span>
             </div>
 
             <h3 className="title article-title">Natural fat burner</h3>  
 
         </div>
     </a>
 
 </div>
 
 <Sidebar />
 

 </div>
    </section>
    <Posts />
    <Popular />
    </>
  )
}

export default Home