document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.datepicker');
  var options = {};
  var instances = M.Datepicker.init(elems, options);
  var modalElems = document.querySelectorAll('.modal');
  var modal_instances = M.Modal.init(modalElems);
});
/* #26a69a 1976D2 */