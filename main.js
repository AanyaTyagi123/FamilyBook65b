var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg","https://thumbs.dreamstime.com/b/happy-cute-kid-girl-thumb-up-sign-vector-happy-cute-kid-girl-thumb-up-sign-164706291.jpg", "https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/36669/father-son-family-clipart-md.png", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhb_VxyPEUs7nS3LuvolxO9kES9xckZ_Gecw&usqp=CAU" , "https://i.pinimg.com/474x/a3/d1/99/a3d19915feb485e11dfcfb23db698554.jpg"];
var names = ["Family Book","Aanya Tyagi", "Karmendra Tyagi", "Neetu Bansal", "Saamya Tyagi"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 4
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    var updatedImage = images[i];
    var updatedName = names[i];
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
