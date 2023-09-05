class PerformanceData  {
    constructor(data) {
      const dataKind = {
          1:'Cardio',
          2:'Energie',
          3:'Endurance',
          4:'Force',
          5:'Vitesse',
          6:'Intensité'
      }
      
        const radarData = data.data.data.map(item => {
            console.log('Item:', item);
            
            const kindValue = dataKind[parseInt(item.kind)];
            console.log('Kind Value:', dataKind);
            
            const transformedItem = {
              kind: kindValue,
              value: item.value.toString(),
            };
            console.log('Transformed Item:', transformedItem);
            
            return transformedItem;
          });
          console.log('trasform:',radarData)
          this.data = radarData
        }
    }
    module.exports = PerformanceData; 