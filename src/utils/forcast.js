const request = require('request')

const forecast = (latitude, longtitude, callback) => {
    const url="http://api.weatherstack.com/current?access_key=ed8edd39e62cd2636b6b73e8864acc37&query="+ latitude+","+longtitude+"&units=f"
                                        //response response.body
    request({ url, json: true }, (error, { body } = {}) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined,body.current.weather_descriptions[0]+ ' It is currently ' + body.current.temperature + ' degress out. It feels like' + body.current.feelslike + ' deg')
        }
    })
}

module.exports = forecast