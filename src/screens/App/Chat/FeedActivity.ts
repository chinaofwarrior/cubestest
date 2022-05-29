import {getRandomImage} from "../Card/dummy";

export const feedData = [
  {
    id: "1",
    name: "Chelsea",
    message: "So you work at CareMatch ?",
    profile: "https://i.dailymail.co.uk/i/pix/2013/05/16/article-2325413-0E38CCA400000578-245_634x488.jpg",
    online: true,
    age: "25",
    education: "XYX University",
    distance: "4 km away",
    images: [
      {
        id: 1,
        image: getRandomImage()
      },
      {
        id: 2,
        image: getRandomImage()
      },
      {
        id: 3,
        image: getRandomImage()
      }
    ]
  },
  {
    id: "2",
    name: "Amanda",
    message: "Hey, How's your night going?",
    profile: "https://cdn-04.independent.ie/entertainment/movies/article37813451.ece/f340a/AUTOCROP/w620/ipanews_a66f878d-669a-4de4-b864-c96191f45bed_1",
    online: false,
    age: "25",
    education: "XYX University",
    distance: "4 km away",
    images: [
      {
        id: 1,
        image: getRandomImage()
      },
      {
        id: 2,
        image: getRandomImage()
      },
      {
        id: 3,
        image: getRandomImage()
      }
    ]
  },
  {
    id: "3",
    name: "Chloe",
    message: "What year did you gradute UCLA?",
    profile: "http://www.cheatsheet.com/wp-content/uploads/2015/04/Elizabeth-Olsen.jpg",
    online: false,
    age: "25",
    education: "XYX University",
    distance: "4 km away",
    images: [
      {
        id: 1,
        image: getRandomImage()
      },
      {
        id: 2,
        image: getRandomImage()
      },
      {
        id: 3,
        image: getRandomImage()
      }
    ]
  }
]