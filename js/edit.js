const data = JSON.parse(localStorage.getItem('post'))
const detailId = JSON.parse(localStorage.getItem('detail'))

const Editor = toastui.Editor;
let defaultId = 0;
let defaultTitle = '';
let defaultShort = '';
let defaultTag = [];
let defaultContent = '';

for(let i = 0; i < data.length; i++) {
  if(data[i].id == detailId) {
    defaultId = data[i].id;
    defaultTitle = data[i].title;
    defaultShort = data[i].short;
    defaultContent = data[i].content;
    
    $('.titleInput').val(defaultTitle);
    $('.shortInput').val(defaultShort);

    for(let j = 0; j < data[i].tag.length; j++) {
      defaultTag.push(data[i].tag[j])
      $('.tagInput').before(
        '<p class="tag">' + data[i].tag[j] + '</p>'
      )
    }
  }
}

const editor = new Editor({
  el: document.querySelector('#editor'),
  height: '600px',
  initialEditType: 'wysiwyg',
  previewStyle: 'vertical',
  initialValue : defaultContent
});

// 태그 입력
$('.tagInput').keyup(function(e) {
  const inputVal = $('.tagInput').val();
  
  if(e.keyCode === 13 && inputVal !== '') {
    defaultTag.push(inputVal);

    $('.tagInput').before('<div class="tag">' + inputVal + '</div>')
    $('.tagInput').val('')
  }
})

// 태그 삭제 (on과 click의 차이점 : 동적 생성된 태그에 적용가능)
$('.tagWrapper').on('click', '.tag',function(e) {
  for(let i = 0; i < defaultTag.length; i++) {
    if(defaultTag[i] == $(e.target).text()) {
      // 태그 배열에서 제거
      defaultTag.splice(i, 1);
    }
  }
  $(e.target).remove()
})


// 게시물 수정
$('.submit').click(function() {

  const today = new Date();
  const titleVal = $('.titleInput').val();
  const shortVal = $('.shortInput').val(); 
  const contentVal = editor.getHTML();
  let month = today.getMonth() + 1;
  if (month < 10) { month = '0' + String(month) }
  const dateVal = today.getFullYear() + '-' + month + '-' + today.getDate()

  const post = {
    id: defaultId,
    title: titleVal,
    tag: defaultTag,
    short : shortVal,
    content: contentVal,
    date: dateVal
  }

  const postData = JSON.parse(localStorage.getItem('post') || '[]');
  for(let i = 0; i < postData.length; i++) {
    if(data[i].id == detailId) {
      postData.splice(i, 1, post)
    }
  }
  localStorage.setItem('post', JSON.stringify(postData));
  location.href = "../html/detail.html"
})

$('.cancel').click(function() {
  history.back();
})