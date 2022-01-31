console.log('dataset')
async function drawLineChart() { // write your code here
    const dataset = await d3.json("weather_berlin_daily_2021.json")
    console.log(dataset)

}
console.log('dataset')
drawLineChart()
