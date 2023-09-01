class PerformanceData  {
    constructor(data) {
        console.log(data)
        const radarData = data.data.data.map(item => {
            console.log('Item:', item);
            
            const kindValue = data.data.kind[parseInt(item.kind)];
            console.log('Kind Value:', kindValue);
            
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