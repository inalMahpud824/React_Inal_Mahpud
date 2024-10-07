# Summary React Fundamental
1. Untuk mempelajari react kita haru memahami dasar-dasar dari react (react Fundamental) seperti halnya JSX javascript xml, Component di react dan lifesycel
2. JSX adalah singkatan dari javascript XML jadi kita bisa menuliskan element html di dalam javascript seperti contoh nya ``` const heading = <h1>Hello world</h1>  ```  menuliskan kode jsx lebih mudah dibandingkan menuliskan komponen dengan React.createElement. Terkadang kita ingin memasukan logic atau pengkondisian kedalam komponent, untuk itu bisa menggunakan operator ternary seperti ``` {isLoading ? <Loading /> : <Dashboard />} ```
3. Mempelajari structur folder dari react juga penting, tetapi jika menggunakan vite maka struktur foldernya akan otomatis di buat dan semua kode react berada didalam folder src/ 
sama seperti html di react juga kita bisa memasukan inline css di dalam html dengan cara ```style:{{ backgroundColor: white }} ```
