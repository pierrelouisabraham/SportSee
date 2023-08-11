import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserProfile = ({ userId }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log('Fetching data...');
        const response = await axios.get(`/api/user/${userId}`);
        console.log('Data response:', response);
        setUserData(response.data);
      } catch (error) {
        console.error('Fetch error:', error);
      }
    };
  
    fetchData();
  }, [userId]);


  if (!userData) {
    return <p>Loading user profile...</p>;
  }

  const { userInfos, todayScore, keyData } = userData;

  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {userInfos.firstName} {userInfos.lastName}</p>
      <p>Age: {userInfos.age}</p>
      <p>Today's Score: {todayScore}</p>
      <h3>Key Data</h3>
      <p>Calorie Count: {keyData.calorieCount}</p>
      <p>Protein Count: {keyData.proteinCount}</p>
      <p>Carbohydrate Count: {keyData.carbohydrateCount}</p>
      <p>Lipid Count: {keyData.lipidCount}</p>
    </div>
  );
};

export default UserProfile;