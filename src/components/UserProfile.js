import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DailyExercises from './DailyExercises.jsx'
import RadarChartPerformance from '../components/Performance.jsx'
import Headers from './Header.jsx';
import SideBar from './SideBar.jsx';
import "../style/Main.scss"
import CaloriesCount from './CaloriesCount.jsx';
import SessionsEvolution from './Sessions.jsx';
import ProteinsCount from './Proteins.jsx';
import GlucidesCount from './Glucides.jsx';
import LipidesCount from './Lipides.jsx';
import TodaysScoreRadarChart from './PieChart.jsx'
import ActivityData from '../model/Activity.js';
import PerformanceData from '../model/Performance.js';
import { PieChart } from 'recharts';

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
        setActivityData(new ActivityData(activityResponse.data));

        console.log('Fetching activity data...');
        const performanceResponse = await axios.get(`http://localhost:${PORT}/user/${userId}/performance`);
        console.log('Performance data response:', performanceResponse.data);
        setPerformanceData(new PerformanceData(performanceResponse.data));

        console.log('Fetching activity data...');
        const sessionsData = await axios.get(`http://localhost:${PORT}/user/${userId}/average-sessions`);
        console.log('Session data response:', sessionsData.data);
        setSessionsData(sessionsData.data);   
        

      } catch (error) {
        console.error('Fetch error:', error);
      }
    };

    fetchData();
  }, [userId]);


  if (!userData || !activityData || !performanceData || !sessionsData) {
    return <div className="loader"></div>;
  }

  const { userInfos, todayScore, keyData } = userData;
  console.log(todayScore)
  return (
    <div>
      <Headers/>
      <SideBar/>
      <div className='Page'>
      <div className="profile-header">
            <span>Bonjour </span>
            <span>{userInfos.firstName}</span>
            <div>Félicitation ! Vous avez explosé vos objectifs hier 👏</div>
            </div>
        <div className='content'>
         

              <div className='allchart'>
                <DailyExercises data={activityData}/>
              <div className='otherChart'>
                <RadarChartPerformance data={performanceData}/>
                <SessionsEvolution data={sessionsData} />
                <TodaysScoreRadarChart todayScoreData={todayScore}/>
              </div>
            </div>
            <div className='energy'>
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