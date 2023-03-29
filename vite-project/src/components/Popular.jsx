import React from 'react'

const Popular = () => {
  return (
    <>
        <section className="popular-tags section">
           

<div className="container">

    <h2 className="title section-title" data-name="Popular tags">Popular tags</h2>

    <div className="popular-tags-container d-grid">

        <a href="#" className="article">
            <span className="tag-name">#Yummy</span>
            <img src="../images/tags/image_1.jpg" alt="" className="article-image"/>
        </a>

        <a href="#" className="article">
            <span className="tag-name">#Awesome</span>
            <img src="../images/tags/image_2.jpg" alt="" className="article-image"/>
        </a>

        <a href="#" className="article">
            <span className="tag-name">#Taasty</span>
            <img src="../images/tags/image_3.jpg" alt="" className="article-image"/>
        </a>

        <a href="#" className="article">
            <span className="tag-name">#Fitness</span>
            <img src="../images/tags/image_4.png" alt="" className="article-image"/>
        </a>

        <a href="#" className="article">
            <span className="tag-name">#Natural</span>
            <img src="../images/tags/image_5.jpg" alt="" className="article-image"/>
        </a>

        <a href="#" className="article">
            <span className="tag-name">#Health</span>
            <img src="../images/tags/image_6.jpg" alt="" className="article-image"/>
        </a>

    </div>

</div>
</section>
    </>
  )
}

export default Popular