

  // first we create an app namespace
  var app = {};

  app.addItem = function(itemName){
    // 1. write the code to create a list item and add it to the groceries list
    // You can test it from the browser by running app.addItem('Carrots');
    const item = `<li>${itemName}<button data-purchase>Delete</button></li>`;
    $('ul.groceries').append(item);

  };

  app.addHeading = function(headingName) {
    // 2. write the code to create a list item header and add it to the groceries list
    // You can test it from the browser by running app.addHeading('Vegetables');
    const item = `<li class="heading">${headingName }</li>`
    $('ul.groceries').append(item);
  };

  app.addCalories = function(calories) {
    if (calories>0) {
        console.log(`there are ${calories} calories`);
        msg = `there are ${calories} calories`;
    } else if (calories=0) {
        console.log(`no calories, you bought water?`);
        msg = `no calories, you bought water?`;
    } else {
        console.log(`no food has negative calories`);
        msg = `no calories, you bought water?`;
    }
    const calories_item = `<li class="heading">${msg }</li>`
    $('ul.groceries').append(calories_item);
  };

  app.addCalories(10);


  app.init = function() {
    // listen for the "submit" event on the form.
    $('form').on('submit', function(e) {

      // 3. stop the form from submitting and refreshing the page
      e.preventDefault();

      // 4. Do stuff to make it go into the form
      const $formInput = $('input[name="itemName"]');
      const itemValue = $formInput.val();
      const $checkbox = $('#heading:checked');

      if ($checkbox.length >0){
        app.addHeading(itemValue)
      } else {
        app.addItem(itemValue);
      }

      $formInput.val('');

    });

    // 5. make it sortable with jQuery UI
    // https://jqueryui.com/sortable/#connect-lists
    //
    // $('[data-list], [data-in-cart]').sortable({
    //   connectWith: '[data-groceries]'
    // })

    //Create listener for delete button

    $('.wrapper').on('click', function(){

      var newEl = document.createElement('li');
      console.log($('[data-list], [data-in-cart]'));

      // Create a text node and store it in a variable.
      var newText = document.createTextNode($('[data-list], [data-in-cart]'));

      // Attach the new text node to the new element.
      newEl.appendChild(newText);
      // insert the purchased item at the top of the list
      var position = document.getElementsByTagName('ol')[0];
      // Insert the new element into its position.
      position.appendChild(newEl);
      console.log('yep, position.appendchild(newEL)');
    })

        // $('ul.got').append('xxxxx');

  };



  $(function() {
    // on document ready we run app.init
    app.init();
  });
