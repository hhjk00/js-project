const data = JSON.parse(localStorage.getItem('post'))
const detailId = JSON.parse(localStorage.getItem('detail'))

$(document).ready(function() {
  for(let i = 0; i < data.length; i++) {
    if(data[i].id == detailId) {
      $('.detailWrapper').append(
        '<div class="listItem">' + 
          '<b class="title">' + data[i].title + '</b>' +
          '<p class="tag">' + data[i].tag + '</p>' +
          '<p class="date">'+ data[i].date + '</p>' +
          '<div class="content">' + data[i].content + '</div>' +
      '</div>'
      )
    }
  }
})

$('.goList').click(function() {
  location.href = "../html/list.html";
})
