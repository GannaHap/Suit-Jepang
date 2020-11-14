// Nama Player
let nama = document.querySelector('.nama');
nama.innerHTML = prompt('Masukan Nama Anda : ');

// Target Win 
let final = parseInt(prompt('Masukan Target Menang : '));

// Pilihan Computer

function getPilihanComputer()	{
	const comp = Math.random();
	if( comp < 0.34 ) return 'gunting';
	if( comp >= 0.34 && comp < 0.67 ) return 'batu';
	return 'kertas';	
}

// Rules
function getHasil(comp, player) {
	if( player == comp ) return 'DRAW';
	if( player == 'gunting')
		return ( comp == 'batu' ) ? 'LOSE' : 'WIN';
	if( player == 'batu' )
		return ( comp == 'gunting' ) ? 'WIN' : 'LOSE';
	if ( player == 'kertas' ) 
		return ( comp == 'gunting' ) ? 'LOSE' : 'WIN';

}

// Putar 
function putar()	{
	const imgComputer = document.querySelector('.img-computer');
	const imgPlayer = document.querySelector('.img-player');
	const gambar = ['gunting', 'batu', 'kertas'];
	let i = 0;
	const waktuMulai = new Date().getTime();
	setInterval(function() {
		if( new Date().getTime() - waktuMulai >1300 ) {
			clearInterval;
			return;
		}
		imgComputer.setAttribute('src', 'comp/c-' + gambar[i++] + '.png');
		if( i == gambar.length ) i = 0;
		imgPlayer.setAttribute('src', 'player/p-' + gambar[i++] + '.png');
		if( i == gambar.length ) i = 0;
	}, 80); 
} 

// hilang
function hilang()	{
	const keterangan = document.querySelector('.keterangan');
	keterangan.innerHTML = '  ';
}

// Pilihan

let win = 0;
let lose = 0;
let score = document.querySelector('.score');
let scoreBot = document.querySelector('.scoreBot');

function getFinal()	{
	if( win == final ) 
		return alert('Selamat Anda Menang!');
	if ( lose == final ) 
		return alert('Yah... Anda Kalah');
}

const pilihan = document.querySelectorAll('li img');
pilihan.forEach(function(pil)	{
	pil.addEventListener('click', function() {
		const pilihanComputer = getPilihanComputer();
		const pilihanPlayer = pil.className;
		const hasil = getHasil(pilihanComputer, pilihanPlayer);	

		hilang();
		putar();

		setTimeout(function() {
			const keterangan = document.querySelector('.keterangan');
			keterangan.innerHTML = hasil;

			const imgComputer = document.querySelector('.img-computer');
			imgComputer.setAttribute('src', 'comp/c-' + pilihanComputer + '.png');

			const imgPlayer = document.querySelector('.img-player');
			imgPlayer.setAttribute('src', 'player/p-' + pilihanPlayer + '.png')


			if( hasil == 'WIN') {
				win = win + 1;
				score.innerHTML = 'Win : ' + win;
			} else if( hasil == 'LOSE') {
				lose = lose + 1;
				scoreBot.innerHTML = 'Win : ' + lose;
			} else return;
			getFinal();
		}, 1300);
	});		
});	










