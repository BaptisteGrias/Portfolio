const txtAnimBubble = document.querySelector('.txt-bubble p');

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
