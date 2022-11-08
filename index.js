function writeCards(to, event) {
    let messages = []
    for (let i = 0; i < to.length; i++) {
        messages.push((`Thank you, ${to[i]}, for the wonderful ${event} gift!`))
    }
    return messages;
}

function countDown(i) {
    while (i > -1) {
        console.log (i);
        i--;
    }
    return i; 
}