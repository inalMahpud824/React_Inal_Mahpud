# Summary Materi React Hook
1. Hooks adalah fitur baru di react 16.8 kita dapat menggunakan state dan fitur react yang lain tanpa perlu menulis sebuah kelas. Alasan atau motivasi dibuatnya react hook yaitu karna terdapat kesulitan saat menggunakan stateful logic antar component lalu jika component menjadi kompleks maka akan sulit dimengerti, alasan lain yaitu menggunakan class membingungkan untuk manusia dan mesin.
2. Ada beberapa hooks dasar yang paling sering dipakai yaitu diantaranya ada useState, useEffect dan useContext. useState adalah hooks untuk menyimpan nilai. useState adalah hook yang digunakan untuk mengelola state lokal dalam komponen fungsional React. useState adalah hook yang digunakan untuk mengelola state lokal dalam komponen fungsional React, State ini memungkinkan untuk menyimpan data yang dapat berubah seiring waktu dan memicu re-render komponen ketika state tersebut berubah. useEffect adalah hook yang digunakan untuk menjalankan efek samping dalam komponen fungsional React. useContext adalah hook yang digunakan untuk mengakses nilai dari context. Context adalah cara untuk berbagi data di seluruh komponen React tanpa harus meneruskan props secara manual pada setiap level komponen
3. selain hooks yang di sediakan oleh react kita juga bisa membuat custom hook dengan cara mengkombinasikan logic yang di miliki dengan hooks yang disediakan oleh react, sebagai contoh: 
``` 
import { useState, useEffect } from 'react';

function useFetchData(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError]   
 = useState(null);

  useEffect(() => {
    const fetchData = async   
 () => {
      setLoading(true);
      try {
        const response = await fetch(url);
        const json = await response.json();
        setData(json);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return { data, loading, error   
 };
}
```
lalu kita hanya tinggal memanggil hooks di komponent yang ada fetching datanya seperti page product dan page lainnya seperti ini: 
 ``` 
 import useFetchData from './useFetchData';

function ProductPage() {
  const { data, loading, error } = useFetchData('https://api.example.com/data');

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      {data.map(item => (
        <div key={item.id}>{item.name}</div>   

      ))}
    </div>
  );
}
 ```