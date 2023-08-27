var outer = document.getElementById('outer');
outer.addEventListener('mouseover', function(){
    console.log("mouseOver")
});
outer.addEventListener('mouseout' , function(){
    console.log("mouseOut")
});


var search = document.getElementById('search');
search.addEventListener('keypress',function(){
    console.log("key press")
})

document.addEventListener('keydown',function(event){
    console.log("key down ", event.key)
})



