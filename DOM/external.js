// var p=document.getElementById('btn');
//         console.log(p)
//         p.addEventListener('click',function(){
//             alert("hello borrnm")
//         })

var p=document.getElementById('btn');
p.addEventListener('click',fun);
p.addEventListener('click',fun2)
function fun(){
    alert("Say hello!!")
};
function fun2(){
    alert("Say byy!!")
};