function newItem() {
  // Add a new item to the list
  let ol = $("#list");
  let li = $("<li></li>");
  let inputValue = $("#input").val();
  li.append(inputValue);

  // Input Validation
  inputValue === "" ? showMessage() : ol.append(li);

  function showMessage() {
    alert("You must write something!");
  }

  // Strike an item from the list
  li.on("click", () => {
    li.toggleClass("strike");
  });

  // Add a delete button
  let crossOutButton = $('<div class="crossOutButton">&times;</div>');
  li.append(crossOutButton);

  crossOutButton.on("click", () => {
    li.addClass("delete");
  });

  // Reorder items in the list
  ol.sortable();
}
