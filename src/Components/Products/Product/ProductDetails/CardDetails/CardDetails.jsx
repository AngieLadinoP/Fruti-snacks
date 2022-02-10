import React from "react";
import Button from "../../../../Button/Button";
import "./CardDetails.css";
const CardDetails = (props) => {
  const { data, addToCart } = props;
  const {
    color,
    image,
    name,
    price,
    id,
    shape,
    flavor,
    servings,
    size,
    measurements,
    ingredients,
  } = data;
  return (
    <div className="card-details">
      <div
        className="card-details__product"
        style={{ backgroundColor: `${color}` }}
      >
        <img src={image} alt={name} className="card-details__product--img" />
        <h2 className="card-details__product--name subtitle">{name}</h2>
        <p className="card-details__product--price">{`$ ${new Intl.NumberFormat(
          "de-DE"
        ).format(price)} UND`}</p>
      </div>

      <div className="card-details__button">
        <Button
          name="Añadir al carrito"
          styleButton="black-button"
          onClick={() => addToCart(id)}
        />
      </div>
      <div className="card-details__info">
        <h2 className="card-details__info--title subtitle">Especificaciones</h2>
        <div className="card-details__info--text">
          <p>
            <span className="bold">Forma:</span> {shape}
          </p>
          <p>
            <span className="bold">Sabor:</span> {flavor.toString()}
          </p>
          <p>
            <span className="bold">Porciones:</span> {servings}
          </p>
          <p>
            <span className="bold">Tamaño:</span> {size}
          </p>
          <p className="bold"> Medidas:</p>
          <p>
            <span className="bold">- Largo:</span> {measurements.length} cm
          </p>
          <p>
            <span className="bold">- Ancho:</span> {measurements.width} cm
          </p>
          <p>
            <span className="bold">- Alto:</span> {measurements.height} cm
          </p>
          <p className="bold">Ingredientes</p>
          <p>
            {ingredients.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
