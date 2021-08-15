var images = 
["family.jpeg","https://media-exp1.licdn.com/dms/image/C4D03AQEe-GTMxupwNg/profile-displayphoto-shrink_200_200/0/1516313304677?e=1632960000&v=beta&t=aTs-T6vKhJVP9z42nAxZ67mnmXmFSZ0lgh9MXrKEavM",
  "eva.jpeg" ,
   "DAD.jpeg"];

var names = [ "My Family", "my Mom = Moumita" , "Me = Eva" , "My Dad = Bhaskar"];

var i=0;
 function update(){


     i++;
     
     var number_of_family_members_in_array = 3;
     if(i>number_of_family_members_in_array){
         i=0;
     }
     var updatedImages = images[i];
     var updatedNames = names[i];

     document.getElementById("family_member_image").src = updatedImages;
     document.getElementById("family_member_name").innerHTML = updatedNames;
 }