// getting API images for display on index page 
const imageApi = "https://api.npoint.io/5a54c896f34794407c26"

async function getImages(){
    try {
        const data = await axios.get(imageApi)

        const images = data.data
        images.forEach(image=>{
            var divElement = document.querySelector('#imagesContainer')
            var para = document.createElement('p')
            var imgEl = document.createElement('img')
            imgEl.setAttribute('class','imgBox')
            imgEl.setAttribute('src', image.url)
            imgEl.setAttribute('id', image.title)
            divElement.append(imgEl)
            divElement.append(para)
        })
    } catch(e){
        console.error(e)
    }
}

getImages()


async function getMoods(){
    const server = 'http://localhost:8080/'
    const path = 'api/mood'
    try {
        const data = await axios.get(server + path)

        const moods = data.data

        console.log(moods);
        moods.forEach(mood=>{
            var divElement = document.querySelector('#moodContainer')
            var moodBlocks = document.createElement('div')
            moodBlocks.innerText = mood.mood
            divElement.setAttribute('class','moodsContainer')
            moodBlocks.setAttribute('class','moodElements')
            moodBlocks.setAttribute('id','mood' + mood.id)
            divElement.append(moodBlocks)
        })

    } catch(e){
        console.error(e)
    }
}

getMoods()


async function getFoods(){
    const server = 'http://localhost:8080/'
    const path = 'api/food'
    try {
        const data = await axios.get(server + path)

        const foods = data.data

        console.log(foods);
        foods.forEach(food=>{
            var divFoodElement = document.querySelector('#foodContainer')
            var foodBlocks = document.createElement('div')
            foodBlocks.innerText = food.food
            foodBlocks.setAttribute('class','foodElements')
            foodBlocks.setAttribute('id','Id'+ food.id)
            divFoodElement.append(foodBlocks)

        })
    } catch(e){
        console.error(e)
    }
}

getFoods()


