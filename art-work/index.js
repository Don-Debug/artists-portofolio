const addimages = [

    {
        "emri": "Loni",
        "cmimi": "$50",
        "image": "./images/sunset.jpg"
    },
    {
        "emri": "Loni",
        "cmimi": "$50",
        "image": "./images/paint.png"
    },

    {
        "emri": "Loni",
        "cmimi": "$50",
        "image": "./images/paint.png"
    },

    {
        "emri": "Loni",
        "cmimi": "$50",
        "image": "./images/paint.png"
    },

    {
        "emri": "Loni",
        "cmimi": "$50",
        "image": "./images/paint.png"
    },

    {
        "emri": "Loni",
        "cmimi": "$50",
        "image": "./images/paint.png"
    },

    {
        "emri": "Loni",
        "cmimi": "$50",
        "image": "./images/paint.png"
    },

    {
        "emri": "Loni",
        "cmimi": "$50",
        "image": "./images/paint.png"
    },

    {
        "emri": "Loni",
        "cmimi": "$50",
        "image": "./images/paint.png"
    },

    {
        "emri": "Loni",
        "cmimi": "$50",
        "image": "./images/paint.png"
    }

];

document.getElementById("adding").innerHTML = `
   ${addimages.map(function(add){
       return `
       <div class="colum">
            <div class="boxet">
                <img src="${add.image}" class="pic">
            </div>
            <h5 class="pic-name">${add.emri}</h5>
            <hr class="vize">
            <p class="ammount">${add.cmimi}</p>
       </div>
       `
   }).join('')}
`