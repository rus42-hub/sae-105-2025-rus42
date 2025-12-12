document.addEventListener('DOMContentLoaded', () => {

  document.querySelectorAll('.scene-block').forEach(sceneBlock => {
    const buttons = sceneBlock.querySelectorAll('.scene-filters__btn');
    const groups = Array.from(sceneBlock.querySelectorAll('.scene-artists'));

   
    groups.forEach(g => g.hidden = true);

    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        const day = btn.dataset.day;
        const target = sceneBlock.querySelector(`.scene-artists[data-day-group="${day}"]`);

        // toggle visual active state
        const isActive = btn.classList.contains('is-active');
        buttons.forEach(b => b.classList.remove('is-active'));
        if (isActive) {
          
          btn.classList.remove('is-active');
          if (target) target.hidden = true;
        } else {
          
          btn.classList.add('is-active');
          
          groups.forEach(g => g.hidden = true);
          if (target) target.hidden = false;
        }
      });
    });
  });

});
