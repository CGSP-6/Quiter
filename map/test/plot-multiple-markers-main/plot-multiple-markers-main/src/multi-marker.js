function addRow(tableID) {
    var table = document.getElementById(tableID);
    var count = document.getElementById('count').value;
    //alert(count);
    var c = parseInt(count) + parseInt(1);
    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);
    var colCount = table.rows[0].cells.length;
    for (var i = 0; i < colCount; i++) {
        var newcell = row.insertCell(i);
        newcell.innerHTML = table.rows[0].cells[i].innerHTML;
        switch (newcell.childNodes[0].type) {
            case "text": newcell.childNodes[0].value = "";
                var node_id = newcell.childNodes[0].id;
                var node_id_arr = node_id.split('_');
                newcell.childNodes[0].id = node_id_arr[0] + '_' + c;
                break;
            case "checkbox": newcell.childNodes[0].checked = false;
                var node_id = newcell.childNodes[0].id;
                var node_id_arr = node_id.split('_');
                newcell.childNodes[0].id = node_id_arr[0] + '_' + c;
                break;
        }
        $('#count').val(c);
    }
}
function deleteRow(tableID) {
    try {
        var table = document.getElementById(tableID);
        var rowCount = table.rows.length;
        for (var i = 0; i < rowCount; i++) {
            var row = table.rows[i];
            var chkbox = row.cells[0].childNodes[0];
            var ids = row.cells[0].childNodes[0].id;
            if (null != chkbox && true == chkbox.checked) {
                var count = document.getElementById('count').value;
                var c = parseInt(count) - parseInt(1);
                if (rowCount <= 1) {
                    alert("Cannot delete all the rows.");
                    break;
                }
                table.deleteRow(i);
                rowCount--;
                i--;
                $('#count').val(c);
            }
        }
    }
    catch (e) {
        alert(e);
    }
}
function getInputValue() {
    // Selecting the input element and get its value 
    var inputVal_lat = document.getElementsByClassName("lat_1");
    var inputVal_lng = document.getElementsByClassName("lng_1");
    var visualmarker;

    for (let i = 0; i < inputVal_lat.length; i++) {
        visualmarker = L.marker([inputVal_lat[i].value, inputVal_lng[i].value]);
        visualmarker.addTo(map);
    }
}