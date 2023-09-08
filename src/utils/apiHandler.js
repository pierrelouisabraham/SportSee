import axios from 'axios';
import ActivityData from '../model/Activity';
import PerformanceData from '../model/Performance';
import SessionData from '../model/Session';

const PORT = process.env.REACT_APP_ENVIRONMENT === 'mockApi' ? '3001' : '3000'

export const getUserData = userId => axios.get(`http://localhost:${PORT}/user/${userId}`).then(data => data)

export const getActivityData = userId => axios.get(`http://localhost:${PORT}/user/${userId}/activity`)
    .then(data => new ActivityData(data.data))

export const getPerformanceData = userId => axios.get(`http://localhost:${PORT}/user/${userId}/performance`)
    .then(data => new PerformanceData(data.data))

export const getSessionData = userId => axios.get(`http://localhost:${PORT}/user/${userId}/average-sessions`)
    .then(data => new SessionData(data.data))