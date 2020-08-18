import React from 'react';


import { Container } from './styles';

const FoodInfo = ({ food }) => {


  return (
    <Container available={food.available}>
      <section className="image">
        <img src={food.image} alt={food.name} />
      </section>
      <section className="body">
        <h2>{food.name}</h2>
        <p>{food.description}</p>
        <p>Tempo de cozinhamento: {food.timeToCook}</p>
        <p>Estoque: {food.quantity}</p>
        <p>{food.available ? 'Disponível' : 'Indisponível'}</p>
        <p className="price">
          R$ <b>{food.price}</b>
        </p>
      </section>
    </Container>
  );
};

export default FoodInfo;
