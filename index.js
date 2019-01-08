// @prepros-prepend node_modules/jquery/dist/jquery.min.js

$('#sandwich-btn').on('click', function () {
  $('.nav-list, #overlay').toggleClass('active')
  $('body').toggleClass('no-scroll')
})

$('#overlay').on('click', function () {
  $(this).add('.nav-list').toggleClass('active')
  $('body').toggleClass('no-scroll')
})
