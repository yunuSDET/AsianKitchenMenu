let menu = [

    {id:1,
        title:'Tteokbokki',
        category:'Korea',
        price:65,
        img:"https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
        desc:"Spicy rice cakes, serving with fish cake."},

    {id:2,
        title:'Jajangmyeon',
        category:'Korea',
        price:72,
        img:"https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
        desc:"Black bean sauce noodle, serving with green onion"},


    {id:3,
        title:'Bibimbap',
        category:'Korea',
        price:91,
        img:"https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
        desc:"Boiling vegetables, serving with special hot sauce"},

 

    {id:4,
        title:'Chicken Ramen',
        category:'Japan',
        price:125,
        img:"https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
        desc:"Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg."},


    {id:5,
        title:'Doroyaki',
        category:'Japan',
        price:85,
        img:"https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
        desc:"Red bean paste dessert, serving with honey"},


    {id:6,
        title:'Onigiri',
        category:'Japan',
        price:67,
        img:"https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
        desc:"Rice Sandwich, serving with soy sauce"},




    {id:7,
        title:'Dan Dan Mian',
        category:'China',
        price:95,
        img:"https://i2.wp.com/seonkyounglongest.com/wp-content/uploads/2019/10/Dan-Dan-Noodles-11.jpg",
        desc:"Dan dan noodle, serving with green onion"},

    
    {id:8,
        title:'Ma Yi Shang Shu',
        category:'China',
        price:87,
        img:"https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
        desc:"Hot pepper sauce noodle, serving with soy bean and onion"},


    {id:9,
        title:'Yangzhou Fried Rice',
        category:'China',
        price:69,
        img:"https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
        desc:"Yangzhou style fried rice, serving with bean and pickles"},



]

let filteredContent =[];


let contentsDOM = document.querySelector("#contents");

let allBtnsDOM = document.querySelectorAll("button");
allBtnsDOM.forEach(button => {
    button.addEventListener("click", filter);
});

load(); //All items are added at the begining

function load(){

if(filteredContent.length==0){
    filteredContent = [...menu];
}
showContent();
}


function filter(event) {
 
    let kategori = event.target.textContent;
    
    if(kategori==="All"){
        filteredContent = [...menu];
    }else{
        filteredContent = menu.filter(each => each.category===kategori);
    }

 showContent();

}

 
function showContent(){
    contentsDOM.innerHTML=""
    for (let each of filteredContent){
        let title=each.title;
        let category=each.category;
        let price=each.price;
        let img=each.img;
        let desc=each.desc;

 
       contentsDOM.innerHTML+= '<div class="col-sm-6 mt-4"><div class="row"><div class="col-lg-4 col-xl-4 col-md-6 col-xxl-3"><img src="'+img+'" alt="" style="object-fit: cover; border: 2px solid black;"></div><div class="col-lg-8 col-md-6 col-xl-8 ml-4 col-xxl-9"><h5 >'+title+' <span class="float-end">'+price+'₺</span></h5><hr><p>'+desc+'</p></div></div></div>';
  





     
        
    }
    
}
/*
<div class="col-sm-6 mb-3">
<div class="row">
    <div class="col-sm-3">
        <img src="https://picsum.photos/id/100/110/110" alt="" style="width: 100%; height: 100%; object-fit: cover; border: 2px solid black;">
    </div>
    <div class="col-sm-9 ml-4">
        <h5 >Tteokbokki <span class="float-end">59TL</span></h5>
        <hr>
        <p>Lorem ipsum dolor sit amet.</p>
    </div>
</div>
</div>
*/