function newItem() {
  // Add a new item to the list
  let ol = $('#list');
  let li = $('<li></li>');
  let inputValue = $('#input').val();
  let modalContainer = $('#modal-container');
  li.append(inputValue);

  // Input Validation
  inputValue === '' ? showMessage() : ol.append(li);

  // Modal
  function showMessage() {
    let modal = $('.modal');

    let closeButtonElement = $('.modal-close');
    closeButtonElement.on('click', hideModal);

    modalContainer.append(modal);

    modalContainer.addClass('is-visible');
  }

  function hideModal() {
    modalContainer.removeClass('is-visible');
  }

  $(window).keydown(function (e) {
    if (e.key === 'Escape' && modalContainer.hasClass('is-visible')) {
      e.preventDefault();
      hideModal();
    }
  });

  modalContainer.on('click', function (e) {
    e.preventDefault();
    hideModal();
  });

  // Strike an item from the list
  li.on('click', () => {
    li.toggleClass('strike');
  });

  // Add a delete button
  let crossElement = '<div class="crossOutButton">&times;</div>';
  let crossOutButton = $(crossElement);
  li.append(crossOutButton);

  crossOutButton.on('click', () => {
    li.addClass('delete');
  });

  // Reorder items in the list
  ol.sortable();
}
