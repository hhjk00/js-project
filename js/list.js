const data = JSON.parse(localStorage.getItem('post'))

$(document).ready(function() {
  for(let i = 0; i < data?.length; i++) {

    $('.listWrapper').append(
      '<div class="listItem">' + 
        '<div class="img">' + '</div>' + 
        '<div class="id">' + data[i].id + '</div>' + 
        '<div class="content">' +
          '<strong class="title">' + data[i].title + '</strong>' +
          '<p class="short">' + data[i].short + '</p>' +
          '<p class="date">' + data[i].date + '</p>' +
        '</div>' +
      '</div>'
    )
  }
})

$('.listWrapper').on('click', '.id', function(e) {
  const detailId = $(e.target).text() 
  localStorage.setItem('detail', detailId)
  location.href = "../html/detail.html"
})
