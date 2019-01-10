let $header = document.getElementById('headerschool');
let $containermenu = document.getElementById('containermenu');
let $storbo = document.getElementById('storbo');

let $itemsmenu1 = document.getElementById('itemmenu1');
let $itemsmenu2 = document.getElementById('itemmenu2');
let $itemsmenu3 = document.getElementById('itemmenu3');
let $itemsmenu4 = document.getElementById('itemmenu4');
let $itemsmenu5 = document.getElementById('itemmenu5');
let $logouno = document.getElementById('logouno');
let $logodos = document.getElementById('logodos');
let $btnmenu = document.getElementById('btn-menu');
let $linknamelogo = document.getElementById('link-name-logo');
let $ulmenu = document.getElementById('ulmenu');


$btnmenu.addEventListener('click', function(){
	$ulmenu.classList.toggle('entrarul');
})


window.addEventListener('scroll', function(e){
	

	
	 if(window.scrollY>1){
		$header.style.height = '50px';
		$header.style.background = 'white';
		$storbo.style.height = '50px';
		$containermenu.style.height = '50px';

		$logodos.style.display = 'none';
		$logouno.style.width = '44px';
		$itemsmenu1.style.color= '#c43946';
		$itemsmenu2.style.color= '#c43946';
		$itemsmenu3.style.color= '#c43946';
		$itemsmenu4.style.color= '#c43946';
		$itemsmenu5.style.color= '#c43946';
		$btnmenu.style.color = '#1d386a';
		$linknamelogo.style.display = 'block';
		$ulmenu.style.background = 'white';

	}
	else{
		$header.style.height = '130px';
		$header.style.background = '#f03b4c';
		$storbo.style.height = '130px';
		$containermenu.style.height = '130px';

		$logodos.style.display = 'block';
		$logouno.style.width = '129px';
		$itemsmenu1.style.color= 'white';
		$itemsmenu2.style.color= 'white';
		$itemsmenu3.style.color= 'white';
		$itemsmenu4.style.color= 'white';
		$itemsmenu5.style.color= 'white';
		$btnmenu.style.color = 'white';
		$linknamelogo.style.display = 'none';
		$ulmenu.style.background = '#f03b4c';

	}
})