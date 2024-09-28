async function fetchData() {
  // Kode kamu di sini
  console.log("fetching data...");
  const result = await new Promise((resolve) => {
    setTimeout(() => {
      resolve("data berhasil di ambil");
    }, 1000);
  });

  return result;
}

class Person {
  constructor(name, age) {
   this.name = name
   this.age = age // Kode kamu di sini
  }

  introduce() {
    return "Hello, nama saya " + this.name + " dan umur saya " + this.age + " tahun";
    // Kode kamu di sini
  }
}

fetchData().then((data) => console.log(data));
const person = new Person("Inal", 21);
console.log(person.introduce());
