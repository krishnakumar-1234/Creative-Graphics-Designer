function FullScreenForBlogsPage () {
    const BlogsPageOfMain = document.getElementById('BlogsPageOfMain');
    const ThisIsFullScreenContainerFoeOpenPage = document.getElementById('ThisIsFullScreenContainerFoeOpenPage');
    const FullScreenButtonForYoutubeVideos = document.querySelectorAll('#FullScreenButtonForYoutubeVideos');
    const closeButtonForFullScreen = document.getElementById('closeButtonForFullScreen');

    const IframeSrcValueSetInOther = document.querySelectorAll('#IframeSrcValueSetInOther');
    const IframeShowingScrAttributes = document.getElementById('IframeShowingScrAttributes');

    let OjectsInTheFromFullScreen = {
        FullScreenButtonOne: FullScreenButtonForYoutubeVideos[0],
        FullScreenButtonTwo: FullScreenButtonForYoutubeVideos[1],
        FullScreenButtonThree: FullScreenButtonForYoutubeVideos[2],
        FullScreenButtonFour: FullScreenButtonForYoutubeVideos[3],
        FullScreenButtonFive: FullScreenButtonForYoutubeVideos[4],
        FullScreenButtonSix: FullScreenButtonForYoutubeVideos[5],
    };
    for (let index = 0; index < FullScreenButtonForYoutubeVideos.length; index++) {
        const elementFullScreen = FullScreenButtonForYoutubeVideos[index];
        elementFullScreen.addEventListener('click', () => {
        BlogsPageOfMain.style.display = "none";
        ThisIsFullScreenContainerFoeOpenPage.style.display = "block";

    });  
};
    closeButtonForFullScreen.addEventListener('click', () => {
        BlogsPageOfMain.style.display = "block";
        ThisIsFullScreenContainerFoeOpenPage.style.display = "none";
    });
    OjectsInTheFromFullScreen.FullScreenButtonOne.addEventListener('click',  () => {
        IframeShowingScrAttributes.src = IframeSrcValueSetInOther[0].src;
    });
    OjectsInTheFromFullScreen.FullScreenButtonTwo.addEventListener('click',  () => {
         IframeShowingScrAttributes.src = IframeSrcValueSetInOther[1].src;
    });
    OjectsInTheFromFullScreen.FullScreenButtonThree.addEventListener('click',  () => {
         IframeShowingScrAttributes.src = IframeSrcValueSetInOther[2].src;
    });
    OjectsInTheFromFullScreen.FullScreenButtonFour.addEventListener('click',  () => {
        IframeShowingScrAttributes.src = IframeSrcValueSetInOther[3].src;
    });
    OjectsInTheFromFullScreen.FullScreenButtonFive.addEventListener('click',  () => {
        IframeShowingScrAttributes.src = IframeSrcValueSetInOther[4].src;
    });
    OjectsInTheFromFullScreen.FullScreenButtonSix.addEventListener('click',  () => {
      IframeShowingScrAttributes.src = IframeSrcValueSetInOther[5].src;
    });

    const OptionsIcons = document.querySelectorAll('#OptionsIcons');
    for (let index1 = 0; index1 < OptionsIcons.length; index1++) {
      const elementOptionsIcons = OptionsIcons[index1];
      elementOptionsIcons.addEventListener('click', () => {
      alert('Did You Like This Video 👍');

    }); 
}}FullScreenForBlogsPage();

