document.addEventListener('DOMContentLoaded', function() {
  const buttons = document.querySelectorAll('.expand-btn');
  
  buttons.forEach(button => {
    button.addEventListener('click', function() {
      const targetId = this.getAttribute('data-target');
      const content = document.getElementById(targetId);
      
      if (!content) {
        console.error('Элемент с id="' + targetId + '" не найден!');
        return;
      }
      
      content.classList.toggle('active');
    });
  });
});
