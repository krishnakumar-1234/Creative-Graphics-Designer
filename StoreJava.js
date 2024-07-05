const productImage = document.querySelectorAll('.productImage')
productImage[0].style.backgroundImage = "URL(download-16.webp)";
productImage[1].style.backgroundImage = "URL(download-6.webp)";
productImage[2].style.backgroundImage = "URL(download-14.webp)";
productImage[3].style.backgroundImage = "URL(download-8.webp)";
productImage[4].style.backgroundImage = "URL(download-15.webp)";
productImage[5].style.backgroundImage = "URL(download-10.webp)";
productImage[6].style.backgroundImage = "URL(download-11.webp)";
productImage[7].style.backgroundImage = "URL(download-12.webp)";
productImage[8].style.backgroundImage = "URL(download-13.webp)";

const HeadingNameForProduct = document.querySelectorAll('#HeadingNameForProduct');
HeadingNameForProduct[0].innerHTML = "Getting started with After Effects";
HeadingNameForProduct[1].innerHTML = "Getting started with Photoshpe free";
HeadingNameForProduct[2].innerHTML = "How to nike shoes in Photoshope free";
HeadingNameForProduct[3].innerHTML = "Started with adove learning for free";
HeadingNameForProduct[4].innerHTML = "Landin page in PhotoShope for cooking";
HeadingNameForProduct[5].innerHTML = "Creative Freedome in PhotoShope ";
HeadingNameForProduct[6].innerHTML = "Photoshope how is works? what are you waiting for ";
HeadingNameForProduct[7].innerHTML = "Design slides Creative";
HeadingNameForProduct[8].innerHTML = "Photoshope in nike brand";

//   This is cart of javascript only Store page
const cartbar = document.getElementById('cartbar');
const blurallscreen = document.getElementById('blurallscreen')
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

  const  sidebar = document.getElementById('sidebar');
  const sidebarcontainer = document.getElementById('sidebarcontainer');
  const closebuttonForSidebar = document.getElementById('closebuttonForSidebar');
  
      sidebar.addEventListener('click', () => {
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