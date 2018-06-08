
const cards = [{question: "JS", answer: "Java Script"}, {question: "HTML", answer: "Hyper Text Markup Language"}]


document.getElementById('btnadd').addEventListener('click', function(){
  const topic = document.getElementById('topic').value
  const question = document.getElementById('question').value
  const answer = document.getElementById('answer').value
  const card = {"topic":topic, "question":question, "answer":answer}
  cards.push(card)
  var li = document.createElement("li")
  document.getElementById("print").appendChild(li).innerHTML = card.topic
})


document.getElementById('newcard').addEventListener('click', function(){
  current_card = cards[Math.floor(Math.random()*cards.length)]
  document.getElementById('show').innerHTML = current_card.question
})




document.querySelector('body').addEventListener('click', function(event) {
  if (event.target.tagName.toLowerCase() === 'li') {
    console.log("click")
  }
});


