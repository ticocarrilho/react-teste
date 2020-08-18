import React, { useState, useEffect } from 'react';

import Header from '../../components/Header';

import api from '../../services/api';

import { FoodContainer } from './styles'
import FoodInfo from '../../components/FoodInfo';

const FoodPage = ({ match: { params } }) => {
  const [food, setFood] = useState({})
  useEffect(() => {
    const getFood = async () => {
      const result = await api.get(`/foods/${params.id}`)
      setFood(result.data)
    }
    getFood();
  }, [])
  return (
    <>
      <Header />
      <FoodContainer>
        {food ? <FoodInfo food={food} /> : <p>Carregando</p>}
      </FoodContainer>
    </>
  );
};

export default FoodPage;
