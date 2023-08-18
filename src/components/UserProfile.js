import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DailyExercises from './DailyExercises.jsx'
import RadarChartPerformance from '../components/Performance.jsx'
import Headers from './Header.jsx';
import SideBar from './SideBar.jsx';
import "../style/Main.css"
import CaloriesCount from './CaloriesCount.jsx';

const UserProfile = ({ userId }) => {
  const [userData, setUserData] = useState(null);
  const [activityData, setActivityData] = useState(null);
  const [performanceData, setPerformanceData] = useState(null);

  const PORT = process.env.REACT_APP_ENVIRONMENT === 'mockApi' ? '3001' : '3000'

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log('Fetching user data...');
        const userResponse = await axios.get(`http://localhost:${PORT}/user/${userId}`);
        console.log('User data response:', userResponse.data);
        setUserData(userResponse.data.data);

        console.log('Fetching activity data...');
        const activityResponse = await axios.get(`http://localhost:${PORT}/user/${userId}/activity`);
        console.log('Activity data response:', activityResponse.data);
        setActivityData(activityResponse.data.data);

        console.log('Fetching activity data...');
        const performanceResponse = await axios.get(`http://localhost:${PORT}/user/${userId}/performance`);
        console.log('Activity data response:', performanceResponse.data);
        setPerformanceData(performanceResponse.data.data);

      } catch (error) {
        console.error('Fetch error:', error);
      }
    };

    fetchData();
  }, [userId]);


  if (!userData || !activityData || !performanceData) {
    return <p>Loading user profile and activity data...</p>;
  }

  const { userInfos, todayScore, keyData } = userData;

  return (
    <div>
      <Headers/>
      <div className='MainContent'>
      <div className='sidebar'>
        <SideBar/>
      </div>
      <div>
        <p>Bonjour</p>
        <p className='firstname'> {userInfos.firstName}</p>
        <p>Age: {userInfos.age}</p>
      <p>Today's Score: {todayScore}</p>
      <h3>Key Data</h3>
      <p>Calorie Count: {keyData.calorieCount}</p>
      <p>Protein Count: {keyData.proteinCount}</p>
      <p>Carbohydrate Count: {keyData.carbohydrateCount}</p>
      <p>Lipid Count: {keyData.lipidCount}</p>
      <DailyExercises data={activityData}/>
      <CaloriesCount data={keyData.calorieCount}/>
      </div>
      </div>



    
    </div>
  );
};

export default UserProfile;