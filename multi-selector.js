  $('.collaborator-item').each(function(){
    collaboratorName = $(this).children('.collaborator-name').text();
    collaboratorId = $(this).children('.collaborator-id').text();
    $('#Collaborators-Editor-Project').append('<option value="'+collaboratorId+'">'+collaboratorName+'</option>');
    $('#Collaborators-Viewer-Project').append('<option value="'+collaboratorId+'">'+collaboratorName+'</option>');
    $('#Collaborators-Article').append('<option value="'+collaboratorId+'">'+collaboratorName+'</option>');
  }); 
  
  $('#Collaborators-Editor-Project').select2({
    placeholder: 'Add editor(s)'
  });
  
  $('#Collaborators-Viewer-Project').select2({
    placeholder: 'Add viewer(s)'
  });
  
  $('#Collaborators-Article').select2({
    placeholder: 'Add contributor(s)'
  });




 $('.group-item').each(function(){
    groupName = $(this).children('.group-name').text();
    groupId = $(this).children('.group-id').text();
    $('#Groups-Project').append('<option value="'+groupId+'">'+groupName+'</option>');
    $('#Groups-Article').append('<option value="'+groupId+'">'+groupName+'</option>');
  }); 
  
  $('#Groups-Project').select2({
    placeholder: 'Add group(s)'
  });
  
  $('#Groups-Article').select2({
    placeholder: 'Add group(s)'
  });




 $('.theme-item').each(function(){
    themeName = $(this).children('.theme-name').text();
    themeId = $(this).children('.theme-id').text();
    $('#Themes-Project').append('<option value="'+themeId+'">'+themeName+'</option>');
    $('#Themes-Article').append('<option value="'+themeId+'">'+themeName+'</option>');
  }); 
  
  $('#Themes-Project').select2({
    placeholder: 'Add themes'
  });
  
  $('#Themes-Article').select2({
    placeholder: 'Add themes'
  });




 $('.typology-item').each(function(){
    typologyName = $(this).children('.typology-name').text();
    typologyId = $(this).children('.typology-id').text();
    $('#Typologies-Project').append('<option value="'+typologyId+'">'+typologyName+'</option>');
    $('#Typologies-Article').append('<option value="'+typologyId+'">'+typologyName+'</option>');
  }); 
  
  $('#Typologies-Project').select2({
    placeholder: 'Add typologies'
  });
  
  $('#Typologies-Article').select2({
    placeholder: 'Add typologies'
  });




 $('.status-item').each(function(){
    statusName = $(this).children('.status-name').text();
    statusId = $(this).children('.status-id').text();
    $('#Status-Project').append('<option value="'+statusId+'">'+statusName+'</option>');
  }); 
  
  $('#Status-Project').select2({
    placeholder: 'Add status'
  });
