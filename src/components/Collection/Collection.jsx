import React from 'react'
import './Collection.css'
const Collection = () => {
  return (
    <div className='collection'>
      <h1>our collection</h1>
      <div className="collection-wrapper">
        <div className="collection-card">
          <img src="src/assets/home/desktop/image-gran-espresso.png" alt="" />
          <h2 className='title'>Gran Expresso</h2>
          <div className="desc">Light and flavorful blend with cocoa and black pepper for an intense experience.</div>
        </div>
        <div className="collection-card">
          <img src="src/assets/home/desktop/image-planalto.png" alt="" />
          <h2 className='title'>Planalto</h2>
          <div className="desc">Brazilian dark roast with rich and velvety body, and hints of fruits and nuts.</div>
        </div>
        <div className="collection-card">
          <img src="src/assets/home/desktop/image-piccollo.png" alt="" />
          <h2 className='title'>Piccollo</h2>
          <div className="desc">Mild and smooth blend featuring notes of toasted almond and dried cherry.</div>
        </div>
        <div className="collection-card">
          <img src="src/assets/home/desktop/image-danche.png" alt="" />
          <h2 className='title'>Danche</h2>
          <div className="desc">Ethiopian hand-harvested blend densely packed with vibrant fruit notes.</div>
        </div>
      </div>
    </div>
  )
}

export default Collection