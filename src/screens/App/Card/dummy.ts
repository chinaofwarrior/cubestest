// demo purposes only
export function * range (start : any, end : any) {
    for (let i = start; i <= end; i++) {
        yield {
            id: i,
            username: `Name`,
            age: '25',
            education: 'XYX University',
            distance: '4 km away',
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
    }
}

const images = [
    'http://www.worldwomanfoundation.com/summit2018/wp-content/uploads/2018/09/Jeannette_Ceja-_Head_Shot_2018_0.jpg',
    'https://inspiredot.net/wp-content/uploads/2018/10/Top-30-Most-Beautiful-Women-in-the-World-26-800x450.jpg',
    'https://d2ck0sxsjau14o.cloudfront.net/wp-content/uploads/2018/10/young-attractive-woman.jpg',
    'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/bangs-camina-cabello-1547746714.jpg',
    'https://s4.scoopwhoop.com/shon/random/dk1.jpg',
    'https://www.wonderslist.com/wp-content/uploads/2015/10/Countries-With-The-Most-Beautiful-Women.jpg',
    'http://celeb-face.com/albums/userpics/2015y/07/05/43/404/AmberHeard2.jpg',
    'https://www.wonderslist.com/wp-content/uploads/2019/01/katherine-langford.jpg',
    'https://wisetoast.com/wp-content/uploads/2015/10/most-beautiful-girls-in-the-world-zarine-khan-800x416.jpg',
    'https://www.telegraph.co.uk/content/dam/women/2018/10/16/TELEMMGLPICT000177616621_trans_NvBQzQNjv4Bq-h6SfYaJRHTgGr2QLG-hIvr7sARQy7EgBjwPUzvqL_M.jpeg?imwidth=450',
    'https://o.aolcdn.com/images/dims3/GLOB/legacy_thumbnail/1028x675/format/jpg/quality/85/http%3A%2F%2Fo.aolcdn.com%2Fhss%2Fstorage%2Fmidas%2Fc374afd606d5f14d4f21fcbc7006ee80%2F0%2Fthylane-blondeau-attends-the-screening-of-sorry-angel-during-the-71st-picture-id957003810'
];

function getRandomNumber(Min :number, Max : number) {
  return Min + (Math.random() * (Max - Min))
}

export function getRandomImage() {
    let index = Math.round(getRandomNumber(0, 10));
    return images[index]
}