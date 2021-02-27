const request = require('request')

const forecast = (lat, long, callback) => {
    const url = 'https://api.openweathermap.org/data/2.5/onecall?lat='+lat+'&lon='+long+'&appid=50a1078fc440a0a1b82dc325637955f8&limit=1'
    request({url,json: true},(error, {body}) => {
        if(error){
            callback('Unable to connect to weather service!',undefined)
        } else if(body.cod){
            callback('Unable to find location',undefined)
        } else{
            callback(undefined,body.current.weather[0].description+'. It is currently '+body.current.temp+' degrees out. There is a '+body.hourly[0].pop+'% chance of rain.')
        }
    })
}

module.exports = forecast