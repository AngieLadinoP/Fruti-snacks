import React from 'react'

const CardDetails = (props) => {
/*     const {image, name, price, color, shape, flavor, servings, measurements, size, ingredients } = props; */
const {data}=props
  return (
    <div className="product-details">
        <div className="card-details" style={{ backgroundColor: `${data.color}` }}>
            <img src={data.image} alt={data.name} className="card-details__img" />
            <h2 className="card-details__name subtitle">{data.name}</h2>
            <p className="card-details__price">{`$ ${data.price} UND`}</p>
        </div>
        <div>
        <h2 className="subtitle"> Especificaciones </h2>
        <p>{`Forma: ${data.shape}`}</p>
         <p>{`Sabor: ${data.flavor}`}</p>
          <p>{`Porciones: ${data.servings}`}</p>
          <p>{`Tamaño: ${data.size}`}</p>
          <h3> Medidas </h3>
          <ul>
          <li>{`Largo: ${data.measurements.length} cm`}</li>
          <li>{`Ancho: ${data.measurements.width} cm`}</li>
          <li>{`Alto: ${data.measurements.height} cm`}</li>
          </ul>
          <h3>Ingredientes</h3>
          <ul>
            <li>{`${data.ingredients}`}</li>
          </ul>
        </div>
    </div>
  )
}

export default CardDetails
