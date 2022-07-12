// $(document).ready(function () {

//     /*==========Fixed Navigation Header Menu================*/
//     $(window).scroll(function(){
//         var navFixed = $(window).scrollTop();
//         if(navFixed > 100){
//           $(".navbar").addClass("fixed-top animated fadeInDown faster");
//         }else{
//           $(".navbar").removeClass("fixed-top animated fadeInDown faster")
//         }
//     });

//     /*========For Mobile Sidebar Menu========*/
//     $(".navbar-toggler").click(function(){
//         $(".side_nav").addClass("active");
//         $(".side_nav").css("transition", "all .3s linear .3s");
//         $(".off_canvas").addClass("active");
//         $(".off_canvas").css("transition", "all .3s linear");
//     });

//     $(".off_canvas").click(function(){
//         $(".side_nav").removeClass("active");
//         $(".side_nav").css("transition", "all .3s linear 0s");
//         $(this).removeClass("active");
//         $(this).css("transition", "all .3s linear .3s")

//     });

//     $("#nav_close").click(function(){
//         $(".side_nav").removeClass("active");
//         $(".side_nav").css("transition", "all .3s linear 0s");
//         $(".off_canvas").removeClass("active");
//         $(".off_canvas").css("transition", "all .3s linear .3s")
//         $(".navbar-toggler").removeClass("active");

//     });

//     $(".sub_menu_link").click(function(){
//     $(this).children(".sub_arrow").toggleClass("active");
//     });

//     /*=============Auto Complete Select Option for Link Submission Category===============*/

//     var categoryList = [
//         "Affiliate", "Marketing", "Agricultural", "Arts & Culture", "Biography", "Business", "Education & Reference", "Food & Beverage", "Health & Fitness", "Home & Gardening", "Information & Communication", "Internet", "Life Style", "Love & Relationship", "Mobile Phone", "News & Events", "Science & Technology", "Sports", "Travel", "Other"
//     ];

//     $("#category").select2({
//         data:categoryList
//     });

// });

// JS FOR TOGGLE MOBILE MENU
const toggleBtn = document.getElementById('nav_toggle')
const navCloseBtn = document.getElementById('nav_close_btn')
const mobileMenu = document.querySelector('.mobile_menu')

toggleBtn.addEventListener('click', function () {
  mobileMenu.classList.toggle('active')
})

navCloseBtn.addEventListener('click', function () {
  mobileMenu.classList.remove('active')
})

// JS FOR PASSWORD TOGGLE FUNCTIONALITY
const toggleLogPassBtn = document.querySelector('.login_pass_icon')
const LogPassField = document.querySelector('.login_pass_field')
const togglePassBtn = document.querySelector('.toggle_pass_icon')
const passField = document.querySelectorAll('.pass_field')

togglePassBtn?.addEventListener('click', function () {
  const exist = this.classList.contains('fa-eye')
  if (exist) {
    this.classList.remove('fa-eye')
    this.classList.add('fa-eye-slash')
    passField.forEach((field) => {
      field.setAttribute('type', 'text')
    })
  } else {
    this.classList.remove('fa-eye-slash')
    this.classList.add('fa-eye')
    passField.forEach((field) => {
      field.setAttribute('type', 'password')
    })
  }
})

toggleLogPassBtn?.addEventListener('click', function () {
  const exist = this.classList.contains('fa-eye')
  if (exist) {
    this.classList.remove('fa-eye')
    this.classList.add('fa-eye-slash')
    LogPassField.setAttribute('type', 'text')
  } else {
    this.classList.remove('fa-eye-slash')
    this.classList.add('fa-eye')
    LogPassField.setAttribute('type', 'password')
  }
})
