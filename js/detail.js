const data = JSON.parse(localStorage.getItem('post'))
const detailId = JSON.parse(localStorage.getItem('detail'))

$(document).ready(function() {
  for(let i = 0; i < data.length; i++) {
    if(data[i].id == detailId) {
      $('.detailWrapper').append(
        '<div class="listItem">' + 
          '<b class="title">' + data[i].title + '</b>' +
          '<div class="tagWrapper">' + '</div>' +
      '</div>'
      )

      for(let j = 0; j < data[i].tag.length; j++) {
        $('.tagWrapper').append(
            '<p class="tag">' + data[i].tag[j] + '</p>'
        )
      }

      $('.listItem').append(
        '<p class="date">'+ data[i].date + '</p>' +
        '<div class="content">' + data[i].content + '</div>'
      )
    }
  }
})

$('.edit').click(function() {
    location.href = "../html/edit.html"
})

$('.delete').click(function() {
  if(confirm('정말 삭제하시겠습니까?')) {
    for(let i = 0; i < data.length; i++) {
      if(data[i].id == detailId) {
      const newData = data.filter((el) => el.id !== detailId);
      localStorage.setItem('post', JSON.stringify(newData));
      }
    }
    location.href = "../html/list.html"
  }
})

$('.list').click(function() {
  location.href = "../html/list.html";
})
