// It is sidebar programing by javascript
    const  sidebar = document.getElementById('sidebar');
    const blurallscreen = document.getElementById('blurallscreen')
    const closebuttonForSidebar = document.getElementById('closebuttonForSidebar');
    const sidebarcontainer = document.getElementById('sidebarcontainer');
    sidebar.addEventListener('click', () => {
        console.log("sidebar")
        sidebarcontainer.style.display = "block";
        blurallscreen.style.display = "block";

    })
    blurallscreen.addEventListener('click', () => {
        sidebarcontainer.style.display = "none";
        blurallscreen.style.display = "none";
    })
    closebuttonForSidebar.addEventListener('click', () => {
        sidebarcontainer.style.display = "none";
        blurallscreen.style.display = "none";
    })


// This is cartbar for selling showing bar programing by javascript
const cartbar = document.getElementById('cartbar');
const cartOpenButton = document.getElementById('cartopen');
const cartCloseButton = document.getElementById('closeButton');
cartOpenButton.addEventListener('click', () => {
    cartbar.style.display = 'block'
    blurallscreen.style.display = "block";

})
cartCloseButton.addEventListener('click', () => {
    cartbar.style.display = 'none'
    blurallscreen.style.display = "none";

})
blurallscreen.addEventListener('click', () => {
    cartbar.style.display = 'none'
    blurallscreen.style.display = "none";
})



// This is acheivements for to set from javascript
const projectsCompleted =  document.getElementById('projectsCompleted');
const digitalProducts =  document.getElementById('digitalProducts');
const CostomersGlobally =  document.getElementById('CostomersGlobally');
projectsCompleted.innerText = "3600+"
digitalProducts.innerHTML = "50+"
CostomersGlobally.innerHTML = "5000+"


// This is products of offer and cost changing and name changing for dopemotions first page
const OfferProduct = document.querySelectorAll('#OfferProduct'); //OFFER ON PRODUCT
const PriceForProduct = document.querySelectorAll('#PriceForProduct'); //COST OF PRODUCT

const HowMuchForProducts = document.getElementById('HowMuchForProducts');
const ProductNameInAddedForCart = document.querySelectorAll('#ProductNameInAddedForCart');
const ImagesInCartAdedd = document.querySelectorAll('.ImagesInCartAdedd');

const MoreAddButton = document.getElementById('MoreAddButton');
const HowmuchAdded = document.getElementById('HowmuchAdded');
const ReamoveAddButton = document.getElementById('ReamoveAddButton');

const AddToCartButton = document.querySelectorAll('#AddToCartButton');


AddToCartButton[0].addEventListener('click', () => {
 let someDateOfProduct1 = {
    NameOfProduct: HeadingNameForProduct[0],
    MRPCostOfProduct: PriceForProduct[0],
    OfferOnProduct:  OfferProduct[0],
    ImageOfProduct: "download-16.webp",
    HowmuchAdeddInCart: "1"
 
 }

 ImagesInCartAdedd[0].src = someDateOfProduct1.ImageOfProduct;
 HowmuchAdded.innerHTML = someDateOfProduct1.HowmuchAdeddInCart;
 ProductNameInAddedForCart[0].innerHTML = someDateOfProduct1.NameOfProduct.textContent;
})
const ImageOFHomePage = document.getElementById('ImageOFHomePage');
const HomePageOfImages = document.querySelectorAll('HomePageOfImages');
const HomePageOpenImagesContainer = document.getElementById('HomePageOpenImagesContainer');



// AddToCartButton[1].addEventListener('click', () => {
//     let someDateOfProduct1 = {
//        NameOfProduct1: HeadingNameForProduct[1],
//        MRPCostOfProduct1: PriceForProduct[1],
//        OfferOnProduct1:  OfferProduct[1],
//        ImageOfProduct1: "download-6.webp",
//        HowmuchAdeddInCart1: "1"
    
//     }
   
//     ImagesInCartAdedd.src[1] = someDateOfProduct1.ImageOfProduct1;
//     HowmuchAdded.innerHTML = someDateOfProduct1.HowmuchAdeddInCart1;
//     ProductNameInAddedForCart[1].innerHTML = someDateOfProduct1.NameOfProduct1.textContent;
//    })
//    console.log(ProductNameInAddedForCart)

// This is products image set bu javascript for that things for dopemotions first page
const productImage = document.querySelectorAll('.productImage')
productImage[0].style.backgroundImage = "URL(download-16.webp)";
productImage[1].style.backgroundImage = "URL(download-6.webp)";
productImage[2].style.backgroundImage = "URL(download-14.webp)";
productImage[3].style.backgroundImage = "URL(download-8.webp)";
productImage[4].style.backgroundImage = "URL(download-15.webp)";
productImage[5].style.backgroundImage = "URL(download-10.webp)";
// productImage[6].style.backgroundImage = "URL(download-11.webp)";
// productImage[7].style.backgroundImage = "URL(download-12.webp)";
// productImage[8].style.backgroundImage = "URL(download-13.webp)";



// This is naming for all prodcust from javaScript for dopemotions first page
const HeadingNameForProduct = document.querySelectorAll('#HeadingNameForProduct'); //NAMING FOR PRODUCT
HeadingNameForProduct[0].innerHTML = "Getting started with After Effects";
HeadingNameForProduct[1].innerHTML = "Getting started with Photoshpe free";
HeadingNameForProduct[2].innerHTML = "How to nike shoes in Photoshope free";
HeadingNameForProduct[3].innerHTML = "Started with adove learning for free";
HeadingNameForProduct[4].innerHTML = "Landin page in PhotoShope for cooking";
HeadingNameForProduct[5].innerHTML = "Creative Freedome in PhotoShope ";
// HeadingNameForProduct[6].innerHTML = "Photoshope how is works? what are you waiting for ";
// HeadingNameForProduct[7].innerHTML = "Design slides Creative";
// HeadingNameForProduct[8].innerHTML = "Photoshope in nike brand";
