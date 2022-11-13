$('.changeBtn').click(function() {
  const value = $('.changeInput').val();
  localStorage.setItem('name', value);
  alert('변경되었습니다.')
  location.reload();
})

$('.deleteBtn').click(function() {
  localStorage.removeItem('post')
  alert('삭제되었습니다.')
})