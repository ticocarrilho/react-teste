import React, { useState, useEffect } from 'react';

import Header from '../../components/Header';

import api from '../../services/api';

import Food from '../../components/Food';
import ModalAddFood from '../../components/ModalAddFood';
import ModalEditFood from '../../components/ModalEditFood';

import { FoodsContainer } from './styles';

const Dashboard = () => {
  const [foods, setFoods] = useState([]);
  const [editingFood, setEditingFood] = useState();
  const [modalOpen, setModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);

  useEffect(() => {
    const getFoods = async () => {
      const result = await api.get('/foods')
      setFoods(result.data)
    }
    getFoods();
  }, [])

  async function handleAddFood(food) {
    try {
      await api.post('/foods', food)

      //adiciona a comida ao estado Foods
      setFoods([...foods, food])
    } catch (err) {
      console.log(err);
    }
  }

  async function handleUpdateFood(newFood) {
    try {
      await api.put(`/foods/${newFood.id}`, newFood)

      //atualiza o estado Foods com as alterecoes
      setFoods(foods.map(food => food.id === newFood.id ? newFood : food))
    } catch (error) {
      console.log(error)
    }
  }

  async function handleDeleteFood(id) {
    try {
      await api.delete(`/foods/${id}`)

      //atualiza o estado Foods
      setFoods(foods.filter(food => food.id !== id))
    } catch (error) {
      console.log(error)
    }
  }

  function toggleModal() {
    setModalOpen(!modalOpen);
  }

  function toggleEditModal() {
    setEditModalOpen(!editModalOpen);
  }

  function handleEditFood(food) {
    setEditingFood(food)
    toggleEditModal()
  }

  return (
    <>
      <Header openModal={toggleModal} />
      <ModalAddFood
        isOpen={modalOpen}
        setIsOpen={toggleModal}
        handleAddFood={handleAddFood}
      />
      <ModalEditFood
        isOpen={editModalOpen}
        setIsOpen={toggleEditModal}
        editingFood={editingFood}
        handleUpdateFood={handleUpdateFood}
      />

      <FoodsContainer data-testid="foods-list">
        {foods &&
          foods.map(food => (
            <Food
              key={food.id}
              food={food}
              handleDelete={handleDeleteFood}
              handleEditFood={handleEditFood}
              handleUpdateFood={handleUpdateFood}
            />
          ))}
      </FoodsContainer>
    </>
  );
};

export default Dashboard;
