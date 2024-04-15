 const mntoggle = document.querySelector('menu-toggle');
 const nav = document.querySelector('nav ul');

$(function(){
    //Mengambil data dari file Scrapped.json menggunakan fungsi $.getJSON() JQuery
    $.get('./js/headline.json', function(obj){
    //Tag tabel awal
    var str="<table border='1'>";
    //Judul tabel
    str+="<tr><td>No</td><td>Judul</td><td>Kategori</td><td>Waktu Publish</td><td>Waktu Scrapping</td>";
    //Looping data dari objek JSON dengan fungsi $.each() JQuery
    $.each(obj,function(n, data) {
        //Isi tabel
        str+="<tr>";
        str+="<td>"+(n+1)+"</td>";
        str+="<td>"+data.judul+"</td>";
        str+="<td>"+data.kategori+"</td>";
        str+="<td>"+data.waktu_publish+"</td>";
        str+="<td>"+data.waktu_scrapping+"</td>";
        str+="</tr>";
    });
    //Tag tabel penutup
    str+="</table>";
    $('#headline_json').html(str);
    });
});

mntoggle.addEventListener('click',function(){
    nav.classList.toggle('menushow');
})
