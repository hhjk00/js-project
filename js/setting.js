$('.changeBtn').click(function() {
  const value = $('.changeInput').val();
  if (value) {
    localStorage.setItem('name', value);
    alert('변경되었습니다.')
    location.reload();
  }
  else {
    alert('변경할 이름을 입력하세요.')
  }
})

$('.deleteBtn').click(function() {
  if(confirm('정말 삭제하시겠습니까?')) {
    localStorage.removeItem('post')
    alert('삭제되었습니다.')
  }
})