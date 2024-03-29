const Editor = toastui.Editor;

const editor = new Editor({
  el: document.querySelector('#editor'),
  height: '600px',
  initialEditType: 'markdown',
  previewStyle: 'vertical',
});

const tagVal = [];

// 태그 입력
$('.tagInput').keyup(function(e) {
  const inputVal = $('.tagInput').val();
  
  if(e.keyCode === 13 && inputVal !== '') {
    tagVal.push(inputVal);

    $('.tagInput').before('<div class="tag">' + inputVal + '</div>')
    $('.tagInput').val('')
  }
})

// 태그 삭제 (on과 click의 차이점 : 동적 생성된 태그에 적용가능)
$('.tagWrapper').on('click', '.tag',function(e) {
  for(let i = 0; i < tagVal.length; i++) {
    if(tagVal[i] == $(e.target).text()) {
      // 태그 배열에서 제거
      tagVal.splice(i, 1);
    }
  }

  $(e.target).remove()
})


// 게시물 등록
$('.submit').click(function() {

  const today = new Date();
  const titleVal = $('.titleInput').val();
  const shortVal = $('.shortInput').val(); 
  let idVal = 1;
  const data = JSON.parse(localStorage.getItem('post'));
  if (data) {
    for(let i = 0; i < data.length; i++) {
      idVal = data[i].id + 1;
    }
  }

  const contentVal = editor.getHTML();
  let month = today.getMonth() + 1;
  if (month < 10) { month = '0' + String(month) }
  const dateVal = today.getFullYear() + '-' + month + '-' + today.getDate()

  const post = {
    id: idVal,
    title: titleVal,
    tag: tagVal,
    short : shortVal,
    content: contentVal,
    date: dateVal
  }

  const postData = JSON.parse(localStorage.getItem('post') || '[]');
  localStorage.setItem('post', JSON.stringify(post));
  postData.push(post);
  localStorage.setItem('post', JSON.stringify(postData));

  location.href = "../html/list.html"
})

$('.cancel').click(function() {
  history.back();
})