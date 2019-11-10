/***burger***/
$('#nav-icon2').click(function(){
        $(this).toggleClass('open');
        $('.div2bis').toggle();
        $('.div2').toggleClass('close');
});

/***social***/


$('.logo').hover(function(){
        $(this).css({
                'transform':'rotateZ(360deg)',
                'transition': '2s',
                'border-radius': '20%'
        })
})   

$('.logo').mouseout(function(){
        $(this).css({
                'transform':'rotateZ(-360deg)',
                'transition': '2s'
        })
})   


/**Tabs event on click**/

$('#suivant').click(() =>{
        
        if($('#tanjo').is(':visible')){
        $('#tanjo, #arc, #cva,#kanji').addClass('invisible');
        $('#niki').removeClass('invisible');

        
        }else if($('#niki').is(':visible')){
                $('#niki,#tanjo, #arc,#kanji').addClass('invisible');
                $('#cva').removeClass('invisible');
        
        }else if($('#cva').is(':visible')){
                $('#cva,#tanjo, #niki,#kanji').addClass('invisible');
                $('#arc').removeClass('invisible');
        
        }else if($('#arc').is(':visible')){
                $('#arc,#tanjo, #cva,#niki').addClass('invisible');
                $('#kanji').removeClass('invisible');
        
        }else if($('#kanji').is(':visible')){
                $('#kanji,#niki, #arc, #cva,#kanji').addClass('invisible');
                $('#tanjo').removeClass('invisible');
                
        }
        

});








/**anchors */ 
$('.link1').click(() =>{
        $('#tanjo').removeClass('invisible');
        $('#niki,#cva,#arc,#kanji').addClass('invisible');


})

$('.link2').click(() => {
        $('#niki').removeClass('invisible');
        $('#tanjo,#cva,#arc,#kanji').addClass('invisible');


})
$('.link3').click(() =>{
        $('#cva').removeClass('invisible');
        $('#niki,#tanjo,#arc,#kanji').addClass('invisible');

})
$('.link4').click(function(){
        $('#arc').removeClass('invisible');
        $('#niki,#cva,#tanjo,#kanji').addClass('invisible');

})
$('.link5').click(function(){
        $('#kanji').removeClass('invisible');
        $('#niki,#cva,#arc,#tanjo').addClass('invisible');


})
