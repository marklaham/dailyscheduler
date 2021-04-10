// save reference to important DOM elements
var timeDisplayEl = $('#time-display');

 const hoursList = ['9:00 AM','10:00 AM','11:00 AM','12:00 PM','1:00 PM','2:00 PM','3:00 PM','4:00 PM','5:00 PM'];

// handle displaying the time
function displayTime() {
  var rightNow = moment().format('dddd MMM DD, YYYY');
  timeDisplayEl.text(rightNow);
}

// handle printing schedule to the page
function printProjectData() {
 
  }
    // Loop to populate the table with the events and time 

    var currentHour = moment().format('H');
    console.log(currentHour);
    for (var i = 0; i < hoursList.length; i++) {
       
        var dataHour = i + 9;
    
        // Create a row element 
        if ( dataHour < currentHour){
            var tRow = $('<tr class="past">');

         } else if ( dataHour == currentHour){
            var tRow = $('<tr class="present">');

        }
        else{
            var tRow = $('<tr class="future">');

        }

        var hour = $(
            `<td class="align-middle"><h3 class="time" id="${hoursList[i]}" data-hour="${dataHour}">${hoursList[i]}</h3></td>`
        );
       
        var eventItem = $(
            `<td class="align-middle"><textarea class="form-control taskText" id="${dataHour}text" rows="3">  </textarea></td>`
        );
        // 
        var saveButton = $(
            `<td class="align-middle"><i class="far fa-save fa-3x saveBtn" data-hour="${dataHour}"></i></td>`
        );
        
        // Append the newly created table data to the table row
        tRow.append(hour, eventItem, saveButton);
        // Append the table row to the table body
        $('tbody').append(tRow);
        $('#' + dataHour + 'text').val(localStorage.getItem(dataHour));

    }

    //---------------
    // Add content of text area to local storage on save, and display
    //---------------
    // Index the textareas in the html, and assigns local storage values
   // init();

    function init() {
        //console.log(localStorage.getItem());
        for (var k = 9; k < 18; k++) {
            // Populates textareas with existing local storage
            console.log(localStorage.getItem(k));
            $('#' + k + 'text').val(localStorage.getItem(k));
        }
    }

    $('.saveBtn').click(function (e) {
        //e.preventDefault();
        // Identifies what row is being saved to local storage
        var id = $(this).data('hour');
        // Saves the row and todo item into local storage
        let eventItem = {
            hour: $(this).data('hour'),
            message: $('#' + id + 'text').val(),
        };
        localStorage.setItem(eventItem.hour, eventItem.message);
       // console.log(localstorage())
    });

setInterval(displayTime, 1000);