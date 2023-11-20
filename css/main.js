let food=[
    {
        id:1,
        name:"Udupi Gardenia",
        cuisine:"South Indian,North Indian",
        url:"image/udipi.jpg",
        rating:"4.4",
        location:"Purasaiwakkam",
        Preparation:30,
        amount: 150,
        units:"for two",
        type:"veg"
    },
    {
        id:2,
        name:"Zam Zam Fast Food",
        cuisine:"Indian,Chinese",
        url:"image/zamzam.jpg",
        rating:"3.9",
        location:"Egmore",
        Preparation:35,
        amount: 350,
        units:"for two",
        type:"non-veg"
    },
    {
        id:3,
        name:"A2B-Adayar Anandabhavan",
        cuisine:"South Indian",
        url:"image/adayar.jpg",
        rating:"4.4",
        location:"Purasaiwakkam",
        Preparation:40,
        amount: 375,
        units:"for two",
        type:"veg"
    },
    {
        id:4,
        name:"Kakada Ramprased",
        cuisine:"North Indian,Mexican",
        url:"image/kakada.jpg",
        rating:"4.6",
        location:"Sowcarpet",
        Preparation:45,
        amount: 400,
        units:"for two",
        type:"veg"
    },
    {
        id:5,
        name:"Cake Works",
        cuisine:"Bakery,Sweets,Desserts",
        url:"image/cake.jpg",
        rating:"4.4",
        location:"choolaimedu",
        Preparation:25,
        amount: 550,
        units:"for two",
        type:"non-veg"
    },
    {
        id:6,
        name:"Nithya Amirtham",
        cuisine:"South Indian,Sweets",
        url:"image/nithiya.jpg",
        rating:"4.5",
        location:"Nungambakkam",
        Preparation:50,
        amount: 150,
        units:"for two",
        type:"veg"
    },
    {
        id:7,
        name:"Burger King",
        cuisine:"Burgers,American",
        url:"image/burgerking.jpg",
        rating:"4.2",
        location:"Perambur",
        Preparation:45,
        amount: 350,
        units:"for two",
        type:"non-veg"
    },
    {
        id:8,
        name:"Hotal Saravana Bhavan",
        cuisine:"South Indian,North Indian",
        url:"image/hotalsaravana.jpg",
        rating:"4.2",
        location:"Egmore",
        Preparation:30,
        amount: 300,
        units:"for two",
        type:"veg"
    },
    {
        id:9,
        name:"Hotal Shiva Sagar",
        cuisine:"North Indian,jain",
        url:"image/hotalsiva.jpg",
        rating:"4.4",
        location:"Periyamet",
        Preparation:40,
        amount: 560,
        units:"for two",
        type:"veg"
    },
    {
        id:10,
        name:"Udupi Gardenia",
        cuisine:"South Indian,North Indian",
        url:"image/sangeetha.jpg",
        rating:"2.4",
        location:"Purasaiwakkam",
        Preparation:45,
        amount: 200,
        units:"for two",
        type:"veg"
    },
    {
        id:11,
        name:"Shree Mithai",
        cuisine:"Desserts,Streetfood,Chaat",
        url:"image/shree.jpg",
        rating:"4.6",
        location:"Chetpet",
        Preparation:35,
        amount: 300,
        units:"for two",
        type:"veg"
    },
    {
        id:12,
        name:"Udupi Gardenia",
        cuisine:"South Indian,North Indian",
        url:"image/shrigowri.jpg",
        rating:"3.4",
        Preparation:45,
        amount: 400,
        units:"for two",
        type:"veg"
    },
    {
        id:13,
        name:"Hot chips",
        cuisine:"South Indian,Indian,North Indian",
        url:"image/hotchips.jpg",
        rating:"4.4",
        location:"Egmore",
        Preparation:40,
        amount: 300,
        units:"for two",
        type:"veg"
    },
    {
        id:14,
        name:"Salem RR Biriyani",
        cuisine:"Briyani,Chettinad",
        url:"image/salemrrbiriyani.jpg",
        rating:"3.7",
        location:"Triplicane",
        Preparation:20,
        amount: 200,
        units:"for two",
        type:"non-veg"
    },
    {
        id:15,
        name:"Pizza Hut",
        cuisine:"Pizzas",
        url:"image/pizzehut.jpg",
        rating:"2.4",
        location:"RoyaPettah",
        Preparation:15,
        amount:45,
        units:"for two",
        type:"non-veg"
    },
]
var cards=document.getElementById("cards")
console.log(cards)
itemReader(food)
function itemReader(input){
    input.forEach(function(e){
        //console.log(e)
        var div=document.createElement("div")
        div.classList.add("cards-col")
        cards.appendChild(div)
        

        var div_2=document.createElement("div")
        div_2.classList.add("cards-col-card")
        div.appendChild(div_2)

        var image=document.createElement("img")
        image.src=e.url
        div_2.appendChild(image)

        var heading=document.createElement("h3")
        heading.classList.add("cards-head")
        div.appendChild(heading)
        heading.innerHTML=e.name

        var para=document.createElement("p")
        para.classList.add("cards-para")
        div.appendChild(para)
        para.innerHTML=e.cuisine

        var location=document.createElement("p")
        location.classList.add("place")
        div.appendChild(location)
        location.innerHTML=e.location

        var inner=document.createElement("div")
        inner.classList.add("inner-row")
        div.appendChild(inner)

        var inner_div=document.createElement("div")
        inner_div.classList.add("inner-col")
        inner.appendChild(inner_div)
        
        var icon=document.createElement("i")
        icon.classList.add("fa")
        icon.classList.add("fa-star")
        icon.setAttribute("aria-hidden","true")
        inner_div.appendChild(icon)

        var para2=document.createElement("p")
        para2.classList.add("icon-para")
        inner.appendChild(para2)
        para2.innerHTML=e.rating

        var amount_div=document.createElement("div")
        amount_div.classList.add("card-amount")
        div.appendChild(amount_div)
         
        var amount=document.createElement("p")
        amount.classList.add("amount-para")
        amount_div.appendChild(amount)
        amount.innerHTML="Rs "+e.amount

        rating()
        function rating(){
            if(e.rating>=4.0){
                icon.style.color="green"
            }
            else if(e.rating>=2.5 && e.rating<=3.9){
                icon.style.color="yellow"
            }
            else if(e.rating<=2.5){
                icon.style.color="red"
            }
        }
       
        
})

}

function sortRatting(){
    let sort=food.slice().sort(function(a,b){
        return b.rating-a.rating
    })
    let remove=document.querySelectorAll(".cards-col")
    console.log(remove)
    remove.forEach(function(e){
        e.remove()
    })
    itemReader(sort)
}


function amount(){
    let cards1=document.querySelectorAll(".cards-col")
  
      cards1.forEach(function(e){
      e.remove()
      })
    
      var amou=food.filter(function(e){
          console.log(e.amount)
          return e.amount>=300
      })

      itemReader(amou)
}

function rupees(){
    let cards1=document.querySelectorAll(".cards-col")

    cards1.forEach(function(e){
        e.remove()
    })
    var rupees=food.filter(function(e){
        return e.amount<300
    })

    itemReader(rupees)
}

function veg(){
    let cards1=document.querySelectorAll(".cards-col")

    cards1.forEach(function(e){
        e.remove()
    })

    var pure=food.filter(function(e){
        return e.type=="veg"
    })

    itemReader(pure)
}

function delivery(){
    let cards1=document.querySelectorAll(".cards-col")

    cards1.forEach(function(e){
        e.remove()
    })

    var fast=food.slice().sort(function(a,b){
        return a.Preparation-b.Preparation
    })

    itemReader(fast)
}

function card(){
    let cards1=document.querySelectorAll(".cards-col")

    cards1.forEach(function(e){
        e.remove()
    })
    var whole=food.filter(function(e){
        return e
    })

    itemReader(whole)
}