function openContent (evt, contentType) {
  var i, tabcontent, tabheads;
  tabcontent =
document.getElementsByClassName('tabcontent');
  for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = 'none';
  }
  tabheads =
document.getElementsByClassName('tabheads');
  for (i = 0; i < tabheads.length; i++) {
      tabheads[i].className =
      tabheads[i].className.replace(' active', '')
  }
  document.getElementById(contentType).style.display =
'block';
  evt.currentTarget.className += ' active';
}
document.getElementById('defaultOpen').click()
