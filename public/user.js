function submit(){
  let data = document.getElementById("private");
  let value = data.options[data.selectedIndex].value
  let send = {data:value}
  req = new XMLHttpRequest();
	req.onreadystatechange = function() {
		if(this.readyState==4 && this.status==200){
			alert("Saved Changes")
			location.reload(true);
    }
	}
					
	req.open("POST", `http://localhost:3000/users`);
	req.setRequestHeader("Content-Type", "application/json");
	req.send(JSON.stringify(send));
}