import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DailyExercises from './DailyExercises.jsx'
import RadarChartPerformance from '../components/Performance.jsx'
import Headers from './Header.jsx';
import SideBar from './SideBar.jsx';
import "../style/Main.css"
import CaloriesCount from './CaloriesCount.jsx';
import SessionsEvolution from './Sessions.jsx';
import ProteinsCount from './Proteins.jsx';
import GlucidesCount from './Glucides.jsx';
import LipidesCount from './Lipides.jsx';
import TodaysScoreRadarChart from './PieChart.jsx'

const UserProfile = ({ userId }) => {
  const [userData, setUserData] = useState(null);
  const [activityData, setActivityData] = useState(null);
  const [performanceData, setPerformanceData] = useState(null);
  const [sessionsData, setSessionsData] = useState(null);

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

        console.log('Fetching activity data...');
        const sessionsData = await axios.get(`http://localhost:${PORT}/user/${userId}/average-sessions`);
        console.log('Activity data response:', sessionsData.data);
        setSessionsData(sessionsData.data);   
        

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
      <div>
        <p>Bonjour</p>
        <p className='firstname'> {userInfos.firstName}</p>
      </div>
      <div className='allchart'>
      <div className='mainChart'>
        <DailyExercises data={activityData}/>
      </div>
      <div className='otherChart'>
      <RadarChartPerformance data={performanceData}/>
      <SessionsEvolution data={sessionsData} />
      <TodaysScoreRadarChart data={todayScore}/>
      </div>
     </div>
     <div>
      <CaloriesCount data={keyData.calorieCount}/>
      <GlucidesCount data={keyData.carbohydrateCount}/>
      <ProteinsCount data={keyData.proteinCount}/>
      <LipidesCount data={keyData.lipidCount}/>
      
 
      </div>
      </div>



      </div>
    </div>
  );
};

export default UserProfile;