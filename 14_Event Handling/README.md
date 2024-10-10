# Summary Event Handling
1. State adalah data private sebuah komponen karna private maka component lain tidak bisa mengaksesnya, state hanya bisa di modifikasi dengan menggunakan setState lalu jika state terjadi perubahan maka componet akan melakukan render ulang.
2. stateless component hanya berisikan kode function javascript yang artinya class tersebut tidak mempunyai state hanya mempunya prop. sedangan statetful component mempunyai state bisa dibilang sebagai smart component.
3. Handle event adalah metode untuk mengelola suatu event yang terjadi pada elment atau komponen. event adalah suatu peristiwa yang dipicu pengguna terhadap element atau komponent. sebagai contoh ketika user mengklik tombol submit, event klik tersebut bisa di handle dengan cara manambahkan properti onClick dan memasukan parameter function didalamnya seperti onClick={handleClick} jika.
ada banya handle event yang tersedia seperti onClick, onChange, onSubmit dan masih banyak lagi.
