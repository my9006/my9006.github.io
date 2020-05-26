document.addEventListener('scroll', function(e) {
	let headerComponent = document.getElementById('mainHeader');
	let author = document.getElementById("author");
	if (document.body.scrollTop > 100) {
		let currScrollPos2 = document.body.scrollTop;
		headerComponent.style.opacity = currScrollPos2/100 - 2;
	}
	if(headerComponent.style.opacity>3.25){
		author.style.position ="fixed";
		author.style.marginTop = "-526px";
	} else{
		author.style.position="relative"
	}
});

