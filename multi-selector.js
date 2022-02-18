   $('.project-item').each(function(){
    projectname = $(this).children('.project-name').text();
    projectid = $(this).children('.project-id').text();
    $('#tagged-projects').append('<option value="'+projectid+'">'+projectname+'</option>');
  }); 
  
  $('#tagged-projects').select2({
    placeholder: 'Select projects'
  });
  
    $('.collaborator-item').each(function(){
    collaboratoreditorname = $(this).children('.collaborator-name').text();
    collaboratoreditorid = $(this).children('.collaborator-id').text();
    $('#Collaborators-Editor-Project').append('<option value="'+collaboratoreditorid+'">'+collaboratoreditorname+'</option>');
  }); 
  
  $('#Collaborators-Editor-Project').select2({
    placeholder: 'Add editor(s)'
  });

		$('.collaborator-item').each(function(){
    collaboratorviewername = $(this).children('.collaborator-name').text();
    collaboratorviewerid = $(this).children('.collaborator-id').text();
    $('#Collaborators-Viewer-Project').append('<option value="'+collaboratorviewerid+'">'+collaboratorviewername+'</option>');
  }); 
  
  $('#Collaborators-Viewer-Project').select2({
    placeholder: 'Add viewer(s)'
  });

  
  	$('.group-item').each(function(){
    groupname = $(this).children('.group-name').text();
    groupid = $(this).children('.group-id').text();
    $('#Groups-Project').append('<option value="'+groupid+'">'+groupname+'</option>');
  }); 
  
  $('#Groups-Project').select2({
    placeholder: 'Add group(s)'
  });
  
  	$('.collaborator-item').each(function(){
    collaboratorviewername = $(this).children('.collaborator-name').text();
    collaboratorviewerid = $(this).children('.collaborator-id').text();
    $('#Collaborators-Article').append('<option value="'+collaboratorviewerid+'">'+collaboratorviewername+'</option>');
  }); 
  
  $('#Collaborators-Article').select2({
    placeholder: 'Add contributor(s)'
  });

  
   	$('.group-item').each(function(){
    groupname = $(this).children('.group-name').text();
    groupid = $(this).children('.group-id').text();
    $('#Groups-Article').append('<option value="'+groupid+'">'+groupname+'</option>');
  }); 
  
  $('#Groups-Article').select2({
    placeholder: 'Add group(s)'
  });
