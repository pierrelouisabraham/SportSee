import React, { useState, useEffect } from 'react';
import DailyExercises from './DailyExercises.jsx'
import RadarChartPerformance from '../components/Performance.jsx'
import CaloriesCount from './CaloriesCount.jsx';
import SessionsEvolution from './Sessions.jsx';
import ProteinsCount from './Proteins.jsx';
import GlucidesCount from './Glucides.jsx';
import LipidesCount from './Lipides.jsx';
import TodaysScoreRadarChart from './PieChart.jsx'
import { getUserData, getActivityData, getPerformanceData, getSessionData } from '../utils/apiHandler.js'

const UserProfile = ({ userId }) => {
  const [userData, setUserData] = useState(null);
  const [userDataError, setUserDataError] = useState(false);
  const [activityData, setActivityData] = useState(null);
  const [activityDataError, setActivityDataError] = useState(false);
  const [performanceData, setPerformanceData] = useState(null);
  const [performanceDataError, setPerformanceDataError] = useState(false);
  const [sessionsData, setSessionsData] = useState(null);
  const [sessionDataError, setSessionDataError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userResponse = await getUserData(userId)
          .catch(error => setUserDataError(true));
        setUserData(userResponse.data.data);

        const activityResponse = await getActivityData(userId)
          .catch(error => setActivityDataError(true));
        setActivityData(activityResponse)

        const performanceResponse = await getPerformanceData(userId)
          .catch(error => setPerformanceDataError(true));
        setPerformanceData(performanceResponse)

        const sessionResponse = await getSessionData(userId)
          .catch(error => setSessionDataError(true));
        setSessionsData(sessionResponse)
      } catch (error) {
        console.error('Fetch error:', error);
      }
    };

    fetchData();
  }, [userId]);

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