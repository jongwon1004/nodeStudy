const express = require('express')
var cors = require('cors')
const app = express()
const port = 3000

app.use(cors()) // 비워놓으면 모든 요청 허용

// http 메서드 , 라우팅, 콜백 함수
app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/dog', function(req, res) {
    // const dogObj = {
    //     sound : "멍멍"
    // }
    // res.send(dogObj)

    // res.send({'sound' : '멍멍'})
    res.json({'sound' : '멍멍'})
})

app.get('/cat', function(req, res) {

    const catObj = {
        sound : "냥냥"
    }
    res.send(catObj)

})

const animalSounds = {
    dog: "멍멍",
    cat: "냥냥"
}

app.get('/sound/:name', (req, res) => {

    const { name } = req.params

    const sound = animalSounds[name] || "알 수 없는 소리"

    const response = {
        name: name,
        sound: sound
    }

    console.log(response)

    res.json(response)
})

app.get('/user/:id/:age', (req, res) => {
    const allParams = req.params
    console.log('allParams', allParams)
    const userid = req.params.id
    console.log(userid)

    const age = req.params.age
    console.log(age)

    const allQuery = req.query
    console.log('allQuery', allQuery)

    console.log('des', allQuery.des)

    res.json({'userid' : userid})
})


// JSON 본문 파싱을 위한 미들웨어 추가
// 역할 : JSON 형식의 req body 를 파싱
app.use(express.json());



app.post('/user/:id', (req, res) => {
    const userId = req.params
    console.log('userId', userId)

    const body = req.body
    console.log('body', body)

    

    res.json(body)
})


// 3000으로 듣고있는데, / 이라는 라우팅으로 요청이오면 위의 함수 실행
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})