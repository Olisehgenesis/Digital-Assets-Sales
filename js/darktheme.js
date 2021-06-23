document.body.style.backgroundColor = sessionStorage.getItem('bg');
document.body.style.color = sessionStorage.getItem('cc');

function theme() {	
	if (sessionStorage.getItem('bg') === 'rgb(244, 244, 244)') {
		sessionStorage.setItem('bg', 'rgb(35, 40, 42');
		sessionStorage.setItem('cc', 'white');
		
	} else if (sessionStorage.getItem('bg') == null || undefined) {
		sessionStorage.setItem('bg', 'rgb(35, 40, 42');
		sessionStorage.setItem('cc', 'white ');
		
	} else if (sessionStorage.getItem('bg') === 'rgb(35, 40, 42') {
		sessionStorage.setItem('bg', 'rgb(244, 244, 244)');
		sessionStorage.setItem('cc', '#333');
	}
	document.body.style.backgroundColor = sessionStorage.getItem('bg');
	document.body.style.color = sessionStorage.getItem('cc');
}