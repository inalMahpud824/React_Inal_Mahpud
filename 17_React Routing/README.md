# Summary React Routing
1. Router merupakan modul dalam reat yang berfungsi untuk melakukan proses navigasi pada SPA (Singel Page Application). perbedaan SPA dan MPA adalah MPA jika berpindah halaman maka akan memuat seluruh halaman kembali sedangkan SPA menghandle routing menggunakan satu page sehingga membuat page menjadi lebih cepat karena. Untuk menangani routing di react bisa menggunakan package react-routing.
2. Untuk menambahkan routing kita harus membungkus komponent yang ingin di tampilkan dengan komponent react-routing yaitu BrowserRouting, dan juga harus menambahkan komponent routing sebagai contoh: 
```
<BrowserRouter>
<Route path='/' component={Home} />
</BrowserRouter>
```
kode di atas jika kita mengakses url '/' maka akan tampil komponent Home. Untuk menangani ParameterURL di react router kita bisa menggunakan ``` path='/profile/:id' ``` ':id' adalah parameter. karna kita sudah menggunakan react-router maka di jsx tidak lagi menggunakan tag ```<a> </a>``` tetapi menggunakan tag ``` <Link to='url'> </Link> ``` yang di sediakan oleh react-router.
3. Ada beberapa Hooks bawaan react-router seperti useHistory, useLocation, useParams, useRouteMatch. useHistory memungkinkan kita untuk melakukan navigasi programatis antara halaman, seperti mengarahkan pengguna ke halaman lain atau kembali ke halaman sebelumnya. useLocation menyediakan informasi mengenai URL saat ini, termasuk pathname, search query, dan state. useParams berguna untuk mengambil parameter dari URL dinamis, misalnya saat kita ingin menampilkan detail suatu item berdasarkan ID-nya. Terakhir, useRouteMatch digunakan untuk memeriksa apakah rute tertentu cocok dengan URL saat ini, yang berguna untuk menampilkan komponen yang berbeda berdasarkan rute. 
