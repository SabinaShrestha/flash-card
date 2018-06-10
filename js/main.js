$(document).ready(function(){


  const cards = [{question: "JS", answer: "Java Script"}, {question: "HTML", answer: "Hyper Text Markup Language"}]



  $('#btnadd').on('click', function(){
    const topic = document.getElementById('topic').value
    const question = document.getElementById('question').value
    const answer = document.getElementById('answer').value
    const card = {"topic":topic, "question":question, "answer":answer}
    cards.push(card)

    const d = document.createElement("div")
    d.className = "dd"

    const place = document.getElementById("p").appendChild(d)

    const li = document.createElement("li")
    li.className = "question"
    li.innerHTML = card.question

    const li2 = document.createElement("li")
    li2.className = "question hide"
    li2.innerHTML = card.answer

    place.appendChild(li)
    place.appendChild(li2)

    const btn = document.createElement("button")
    btn.className="delete"
    btn.innerHTML = "Delete"

    const btn1 = document.createElement("button")
    btn1.className="change"
    btn1.innerHTML = "Show Ans"


    place.appendChild(btn)
    place.appendChild(btn1)

  })



  $(document).on('click', '.delete', function(){

    $(this).parents('.dd').remove()
  })



  $(document).on('click', '.change', function(){
    const v = $(this)[0]
    if (v.innerHTML === "Show Ans"){
      v.innerHTML = "Show Question"
     } else {
      v.innerHTML = "Show Ans"
     }
    $(this).siblings('.question').toggleClass('hide')
  })



})



// 8888888888888888888888888888888888888888

// document.getElementByClass("remove").addEventListener('click', function(){
//   this.parents()
// })





// $(document).on('click', '.remove', function() {
//     $(this).parents('.entry').remove()
//     // updateTotal()
//   })


// 88888888888888888888888888888888888888










// document.getElementById('btnadd').addEventListener('click', function(){
//   const topic = document.getElementById('topic').value
//   const question = document.getElementById('question').value
//   const answer = document.getElementById('answer').value
//   const card = {"topic":topic, "question":question, "answer":answer}
//   cards.push(card)
//   // var data = card.question
//   const li = document.createElement("li")
//   li.className = "entry"
//   document.getElementById("print").appendChild(li).innerHTML = card.question
//   const btn = document.createElement("button")
//   btn.calssName="remove"
//   li.appendChild(btn).innerHTML = "Delete"
//   debugger
// })














// document.querySelector('body').addEventListener('click', function(event) {
//   if (event.target.tagName.toLowerCase() === 'li') {
//     console.log("click")
//   }
// });
  // .append('<li class="entry"' + data +'>' + '<button class="remove">Delete</button><button class="edit">Edit</li>')
// document.getElementById('newcard').addEventListener('click', function(){
//   current_card = cards[Math.floor(Math.random()*cards.length)]
//   document.getElementById('show').innerHTML = current_card.question
// })
