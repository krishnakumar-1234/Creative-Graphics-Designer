const bodynew = document.getElementById('bodynew');
const imageOfCourse = document.querySelectorAll('#imageOfCourse');
const courseDetailA = document.querySelectorAll('#courseDetailA');
const courserDetailShowingpage = document.getElementById('courserDetailShowingpage');
const imageCoursForOpen = document.getElementById('imageCoursForOpen');
const closeCourseDetails = document.getElementById('closeCourseDetails');

const imageCoursOfAllImageInFormOFOjects = {
    image1: imageOfCourse[0],
    image2: imageOfCourse[1],
    image3: imageOfCourse[2],
    image4: imageOfCourse[3],
}
const courseDetailAAreInTheFormOfobjetcs = {
    courseDetailAButton1:  courseDetailA[0],
    courseDetailAButton2:  courseDetailA[1],
    courseDetailAButton3:  courseDetailA[2],
    courseDetailAButton4:  courseDetailA[3],
}
courseDetailAAreInTheFormOfobjetcs.courseDetailAButton1.addEventListener('click', () => {
    courserDetailShowingpage.style.display = "flex";
    bodynew.style.display = 'none';
    imageCoursForOpen.src = imageCoursOfAllImageInFormOFOjects["image1"].src;


});
courseDetailAAreInTheFormOfobjetcs.courseDetailAButton2.addEventListener('click', () => {
    courserDetailShowingpage.style.display = "flex";
    bodynew.style.display = 'none';
    imageCoursForOpen.src = imageCoursOfAllImageInFormOFOjects["image2"].src;

});
courseDetailAAreInTheFormOfobjetcs.courseDetailAButton3.addEventListener('click', () => {
    courserDetailShowingpage.style.display = "flex";
    bodynew.style.display = 'none';
    imageCoursForOpen.src = imageCoursOfAllImageInFormOFOjects["image3"].src;

});
courseDetailAAreInTheFormOfobjetcs.courseDetailAButton4.addEventListener('click', () => {
    courserDetailShowingpage.style.display = "flex";
    bodynew.style.display = 'none';
    imageCoursForOpen.src = imageCoursOfAllImageInFormOFOjects["image4"].src;
    
});
closeCourseDetails.addEventListener('click', () => {
    courserDetailShowingpage.style.display = "none";
    bodynew.style.display = 'block';
});