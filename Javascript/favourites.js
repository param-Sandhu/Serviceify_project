//$(document).ready(function() {
    $('.favourites').click(function() {
      var favouriteImg = $(this).find('img');
      var imgSrc = '../favourite-icon/star.png'
      var newImgSrc = '../favourite-icon/star-color.png';
      var message = $('#status-message');
  
      if ($(this).hasClass('active')) { //This removes the store from favourites
        favouriteImg.attr('src', imgSrc);
        $(this).removeClass('active');
        message.text('Store removed from favourites');

      } else { //This adds the store to favourites
        favouriteImg.attr('src', newImgSrc);
        $(this).addClass('active');
        message.text('Store added to favourites');
      }
      message.show().delay(3000).fadeOut();
    });
  //});
  
  