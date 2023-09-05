class ActivityData {
    constructor(data) {
      console.log(data)
      data.data.sessions.forEach((session, index) => {
        session.day = (index + 1).toString();
    });

      this.data = data.data.sessions;
    
    }
  

  }
  
  module.exports = ActivityData; 