const Editor = toastui.Editor;

const editor = new Editor({
  el: document.querySelector('#editor'),
  height: '600px',
  initialEditType: 'markdown',
  previewStyle: 'vertical',
});


const tagVal = [];

// 태그 입력 (중복검사 추가하기)
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
  for(var i = 0; i < tagVal.length; i++) {
    if(tagVal[i] == $(e.target).text()) {
      tagVal.splice(i, 1);
      i--;
    }
  }

  $(e.target).remove()
})


// 게시물 등록
$('.submit').click(function() {
    // 로컬스토리지 저장 (+공부)


  const today = new Date();
  const titleVal = $('.titleInput').val();
  const shortVal = $('.shortInput').val();
  const idVal = today.getTime();
  const contentVal = editor.getHTML();
  const dateVal = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate()

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
  postData.push(post)
  localStorage.setItem('post', JSON.stringify(postData));

  location.href = "../html/list.html"
})

$('.cancel').click(function() {
  history.back();
})