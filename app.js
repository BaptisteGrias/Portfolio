const txtAnimBubble = document.querySelector('.txt-bubble p');
const item = document.querySelectorAll('.item');
const menuItem = document.querySelectorAll('.menuItem');


new Typewriter(txtAnimBubble, {
    loop : true,
    delay: 100,
})

.typeString('Hello !')
.pasteString('<br>')
.typeString('Welcome to')
.pasteString('<br>')
.typeString('My Portfolio')
.pasteString('<br>')
.typeString('I am Happy')
.pasteString('<br>')
.typeString('To see you !')
.pauseFor(1000)
.start();


// Charming Explosion letter Animation

for (var i = 0; i < item.length; i++) {
   charming(item[i]);
}

menuItem.forEach(item => item.addEventListener('mouseenter',(e) => {

    let letterFromItem = Array.from(e.target.childNodes[1].querySelectorAll('span'));
    

    for(i = 0; i < letterFromItem.length; i++){
        TweenMax.to(letterFromItem[i],1,{
            x: Math.floor(Math.random() * 100 - 50),
            y: Math.floor(Math.random() * 100 - 50),
            z: Math.floor(Math.random() * 100 - 50),
            rotation: Math.floor(Math.random() * 100 - 50),
            opacity: 0.3,
            ease: Circ.easeOut,
        })
    }

    menuItem.forEach(item => item.addEventListener('mouseleave', () => {

        for(j = 0; j < letterFromItem.length; j++){
            TweenMax.to(letterFromItem[j],1,{
                x: 0,
                y: 0,
                z: 0,
                rotation: 0,
                opacity: 1,
                ease: Circ.easeOut,
            })
        }
    }));


}))

