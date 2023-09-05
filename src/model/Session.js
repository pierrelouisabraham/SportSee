class SessionData {
    constructor(data) {
      const weekDays = [ 'L', 'M', 'M', 'J', 'V', 'S', 'D']
      console.log(data)
      data.data.sessions.forEach(session => {
        
        console.log(session.day, weekDays[session.day - 1])
          session.day = weekDays[session.day - 1];
     
  });

    this.data = data.data.sessions;
      
     



    }
  }
  
  module.exports = SessionData; 