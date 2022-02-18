  $('.selector-item').each(function(){
    selectorname = $(this).children('.selector-name').text();
    selectorid = $(this).children('.selector-id').text();
    $('#Collaborators-Editor-Project').append('<option value="'+selectorid+'">'+selectorname+'</option>');
    $('#Collaborators-Viewer-Project').append('<option value="'+selectorid+'">'+selectorname+'</option>');
    $('#Groups-Project').append('<option value="'+selectorid+'">'+selectorname+'</option>');
    $('#Collaborators-Article').append('<option value="'+selectorid+'">'+selectorname+'</option>');
    $('#Groups-Article').append('<option value="'+selectorid+'">'+selectorname+'</option>');
  }); 
  
  $('#Collaborators-Editor-Project').select2({
    placeholder: 'Add editor(s)'
  });
  
  $('#Collaborators-Viewer-Project').select2({
    placeholder: 'Add viewer(s)'
  });
  
  $('#Groups-Project').select2({
    placeholder: 'Add group(s)'
  });
  
  $('#Collaborators-Article').select2({
    placeholder: 'Add contributor(s)'
  });
  
  $('#Groups-Article').select2({
    placeholder: 'Add group(s)'
  });
