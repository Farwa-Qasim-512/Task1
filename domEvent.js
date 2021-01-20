
window.onload= function() {
    var addBtn = document.getElementById("btnAdd");
    addBtn.onclick= handleAdd;
    var resetbtn= document.getElementById("resetBtn");
    resetbtn.onclick= reset();
};

// uisng jquery
function addnewRow(event){
    event.preventDefault();
    var name = $('#name').val();
    var gender = $("[name='gender']").val();
    $('.table').append(
        `
        <tr>
            <td>${ name }</td>
            <td>${ gender }</td>
            <td>${ $('#age').val() }</td>
            <td>${ $('#city').val() }</td>
            <td><a href="javascript:void(0);" onclick="update_data(this)">Update</a>/<a href="javascript:void(0);" onclick="remove_data(this)">Remove</a></td>
        </tr>
        `
    );
}

function remove_data(remove_refrence){
    $(remove_refrence).closest("tr").remove();
}

function set_value(radio){
    var myClasses = radio.classList;
    $("[name='gender']").val(myClasses[0]);
}

var updated_row = null;

function update_record(event){
    event.preventDefault();
    document.getElementById("myTable").deleteRow(updated_row);
    var name = $('#name').val();
    var gender = $("[name='gender']").val();
    $('.table').append(
        `
        <tr>
            <td>${ name }</td>
            <td>${ gender }</td>
            <td>${ $('#age').val() }</td>
            <td>${ $('#city').val() }</td>
            <td><a href="javascript:void(0);" onclick="update_data(this)">Update</a>/<a href="javascript:void(0);" onclick="remove_data(this)">Remove</a></td>
        </tr>
        `
    );
}


function update_data(update_refrence){
    //alert('Update')
    //console.log('update')
    //$(this).
    var rowNum = $(update_refrence).closest('td').parent()[0].sectionRowIndex;
    updated_row  = rowNum;
    var name = $(".table").find('tr:eq('+ rowNum + ')').find('td:eq(' + 0 + ')').text();
    var gender = $(".table").find('tr:eq('+ rowNum + ')').find('td:eq(' + 1 + ')').text();
    var age = $(".table").find('tr:eq('+ rowNum + ')').find('td:eq(' + 2 + ')').text();
    var city = $(".table").find('tr:eq('+ rowNum + ')').find('td:eq(' + 3 + ')').text();

    $('#name').val(name);
    $("[name='gender']").val(gender);
    $('#age').val(age);
    $('#city').val(city);

    $('#resetBtn').prop('disabled', true);
    $('#addbtn').prop('disabled', true);
}

function handleAdd(e){
     e.preventDefault();
    var Name= document.getElementById("name"); // using Javascript
    var gender= document.getElementById("male");
    var Age = document.getElementById("age");
    var city= document.getElementById("city");
    var act= document.getElementById("action");
    var table= document.getElementById("myTable");
    var row = table.insertRow(-1);
    var cell1= row.insertCell(0);
    var text1= document.createTextNode(Name.value);
    cell1.appendChild(text1);
    var cell2= row.insertCell(1);
    var text2= document.createTextNode(gender.checked);
    cell2.appendChild(text2);
    var cell3= row.insertCell(2);
    var text3= document.createTextNode(Age.value);
    cell3.appendChild(text3);
     var cell4= row.insertCell(3);
     var text4= document.createTextNode(city.value);
    cell4.appendChild(text4);
    var cell5= row.insertCell(4) ;
    var text5= document.createTextNode(act.value);
    cell5.appendChild(text5);
    Name.value="";
    gender.value="";
    age.value="";
    city.value="";
    act.value="";
   // var td= document.createElement("td");
   // td.appendChild(text); 
   // row.appendChild(cell1);
    //table.appendChild(cell1);

    //  
    //    text-align: right;
   // }
}