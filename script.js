function createPost(){

let text=document.getElementById("postInput").value;

let post=document.createElement("div");
post.className="post";

post.innerHTML=`
<p>${text}</p>
<button onclick="this.innerHTML='Liked ❤️'">Like</button>
`;

document.getElementById("feed").appendChild(post);

document.getElementById("postInput").value="";
}