var count = 0
document.getElementById('my_form').addEventListener('submit', function() {
    // var sub = document.getElementsByClassName('subject')
    // for (var i = 0; i < sub.length; i++) {
    //     sub[0].className = sub[0].className.replace(' subject', '')
    // }
    var days = this.elements.days.value
    var lessons = this.elements.lessons.value

    var container = document.getElementById('result');
    var div = document.createElement('div')
    var text_node = document.createTextNode('№')
    div.appendChild(text_node)
    container.appendChild(div)

    div = document.createElement('div')
    text_node = document.createTextNode('Название предмета')
    div.appendChild(text_node)
    container.appendChild(div)

    div = document.createElement('div')
    text_node = document.createTextNode('День недели')
    div.appendChild(text_node)
    container.appendChild(div)

    for (var i = 0; i < lessons; i++) {
        div = document.createElement('div')
        text_node = document.createTextNode(count+1)
        count++
        div.appendChild(text_node)
        container.appendChild(div)

        div = document.createElement('div')
        div.className+=' subject'
        text_node = document.createTextNode('')
        div.appendChild(text_node)
        container.appendChild(div)

        div = document.createElement('div')
        text_node = document.createTextNode(days)
        div.appendChild(text_node)
        container.appendChild(div)
    }
    let element = document.getElementById('my_form2')
    element.style.display='block'
    // document.getElementById('my_form2').style('display:block')
    return false;
});

function del() {
    var container = document.getElementById('result');
    container.innerHTML = ''
};

document.getElementById('my_form2').addEventListener('submit', function() {
    var subject = this.elements.subject.value
    var number_lesson = this.elements.number_lesson.value
    var column = document.getElementById('result')
    var div = column.getElementsByClassName('subject')
    var text_node = document.createTextNode(subject)
    div[number_lesson-1].innerHTML=subject
});
