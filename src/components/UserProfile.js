import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DailyExercises from './DailyExercises.jsx'
import RadarChartPerformance from '../components/Performance.jsx'
import CaloriesCount from './CaloriesCount.jsx';
import SessionsEvolution from './Sessions.jsx';
import ProteinsCount from './Proteins.jsx';
import GlucidesCount from './Glucides.jsx';
import LipidesCount from './Lipides.jsx';
import TodaysScoreRadarChart from './PieChart.jsx'
import ActivityData from '../model/Activity.js';
import PerformanceData from '../model/Performance.js';
import SessionData from '../model/Session.js';

const UserProfile = ({ userId }) => {
  const [userData, setUserData] = useState(null);
  const [userDataError, setUserDataError] = useState(false);
  const [activityData, setActivityData] = useState(null);
  const [activityDataError, setActivityDataError] = useState(false);
  const [performanceData, setPerformanceData] = useState(null);
  const [performanceDataError, setPerformanceDataError] = useState(false);
  const [sessionsData, setSessionsData] = useState(null);
  const [sessionDataError, setSessionDataError] = useState(false);

  const PORT = process.env.REACT_APP_ENVIRONMENT === 'mockApi' ? '3001' : '3000'

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log('Fetching user data...');
        const userResponse = await axios.get(`http://localhost:${PORT}/user/${userId}`)
          .then(data => data)
          .catch(error => setUserDataError(true));
        console.log('User data response:', userResponse.data);
        setUserData(userResponse.data.data);

        console.log('Fetching activity data...');
        const activityResponse = await axios.get(`http://localhost:${PORT}/user/${userId}/activity`)
          .then(data => data)
          .catch(error => setActivityDataError(true));
        console.log('Activity data response:', activityResponse.data);
        setActivityData(new ActivityData(activityResponse.data));

        console.log('Fetching activity data...');
        const performanceResponse = await axios.get(`http://localhost:${PORT}/user/${userId}/performance`)
          .then(data => data)
          .catch(error => setPerformanceDataError(true));
        console.log('Performance data response:', performanceResponse.data);
        setPerformanceData(new PerformanceData(performanceResponse.data));

        console.log('Fetching activity data...');
        const sessionsData = await axios.get(`http://localhost:${PORT}/user/${userId}/average-sessions`)
          .then(data => data)
          .catch(error => setSessionDataError(true));
        console.log('Session data response:', sessionsData.data);
        setSessionsData(new SessionData(sessionsData.data));


      } catch (error) {
        console.error('Fetch error:', error);
      }
    };

    fetchData();
  }, [PORT, userId]);

  if (userDataError || activityDataError || performanceDataError || sessionDataError) {
    return <section>Oups il y a eu un problème</section>;
  }

  if (!userData || !activityData || !performanceData || !sessionsData) {
    return <div className="loader"></div>;
  }

  const { userInfos, keyData } = userData;

  let scoreData = userData.todayScore || userData.score;


  return (
    <>
      <div className="profile-header">
        <span>Bonjour </span>
        <span>{userInfos.firstName}</span>
        <div>Félicitation ! Vous avez explosé vos objectifs hier 👏</div>
      </div>
      <div className='content'>
        <div className='allchart'>
          <DailyExercises data={activityData} />
          <div className='otherChart'>
            <SessionsEvolution data={sessionsData} />
            <RadarChartPerformance data={performanceData} />
            <TodaysScoreRadarChart todayScoreData={scoreData} />
          </div>
        </div>
        <div className='energy'>
          <CaloriesCount data={keyData.calorieCount} />
          <GlucidesCount data={keyData.carbohydrateCount} />
          <ProteinsCount data={keyData.proteinCount} />
          <LipidesCount data={keyData.lipidCount} />
        </div>
      </div>
    </>
  );
};

export default UserProfile;