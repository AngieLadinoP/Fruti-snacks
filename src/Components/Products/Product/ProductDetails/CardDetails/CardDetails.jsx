import React from 'react'

const CardDetails = (props) => {
/*     const {image, name, price, color, shape, flavor, servings, measurements, size, ingredients } = props; */
const {data}=props
  return (
    <div className="product-details">
        <div className="product-details__card" style={{ backgroundColor: `${data.color}` }}>
            <img src={data.image} alt={data.name} className="product-details__card--img" />
            <h2 className="product-details__card--name subtitle">{data.name}</h2>
            <p className="product-details__card--price">{`$ ${data.price} UND`}</p>
        </div>
        <div className="product-details__info">
          <h2 className="product-details__info--title subtitle"> Especificaciones </h2>
          <p><span className="bold">Forma:</span> {data.shape}</p> 
          <p><span className="bold">Sabor:</span> {data.flavor} </p> 
          <p><span className="bold">Porciones:</span> {data.servings}</p>
          <p><span className="bold">Tamaño:</span> {data.size}</p>
          <p className="bold"> Medidas:</p>
          <p><span className="bold">- Largo:</span> {data.measurements.length} cm</p>
          <p><span className="bold">- Ancho:</span> {data.measurements.width} cm</p>
          <p><span className="bold">- Alto:</span> {data.measurements.height} cm </p>
          <p className="bold">Ingredientes</p>
          <p>{data.ingredients.map((item,index)=>
          <li key={index}>{item}</li>
          )}</p>
        </div>
    </div>
  )
}

export default CardDetails
