$(function(){
  "use strict"

  $('li.false').easyAudioEffects({
   ogg : "audio/easyaudioeffects-master/assets/audio/numbness.ogg",
   mp3 : "audio/easyaudioeffects-master/assets/audio/numbness.mp3",
   eventType : 'click'
});

  $('li.false').click(function(){
    window.animatelo.wobble('#here')
    $('li.false').removeClass('btn-info').addClass('btn-danger')
    $('li.true').removeClass('btn-info').addClass('btn-success')
    swal({
  title: "إجابتك غلط غلط غلط",
  text: "متجاوب صح يا عم انت في أيه ده انت غريب",
  type: "error",
  confirmButtonColor: "#DD6B55",
  confirmButtonText: "اقفل يا عم"
})
  })

  $('li.true').easyAudioEffects({
   ogg : "audio/easyaudioeffects-master/assets/audio/chime.ogg",
   mp3 : "audio/easyaudioeffects-master/assets/audio/chime.mp3",
   eventType : 'click'
});

  $('li.true').click(function(){
    window.animatelo.bounce('.true')
    $('li.false').removeClass('btn-info').addClass('btn-danger')
    $('li.true').removeClass('btn-info').addClass('btn-success')
    swal({
  title: "صحيح",
  text: "أجابة صحيحة",
  type: "success",
  confirmButtonColor: "#54dd62",
  confirmButtonText: "حسناً"
})
  })

})
