import { useState } from "react";

export const ContactUs = () => {
  const [input, setInput] = useState(null)
  const [data, setData] = useState([])

  const handleChange = (e) => {
    const {id, value} = e.target
    setInput({...input, [id]: value})
    return
  } 
  const handleSubmit = (e) => {
    e.preventDefault()
    setData([...data, input])
    setInput({})
  }
  console.log(data)
  return (
    <>
      <div
        className="flex items-start justify-center px-[2rem] bg-[#C9DABF] gap-7 py-7"
        id="contact"
      >
        <div className="max-w-[23rem] text-white">
          <h2 className="text-4xl mb-4">Contact Us</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            cum quaerat deleniti nulla numquam at ex laborum dolores accusantium
            molestiae enim, laboriosam, et consequatur dolorem architecto
            voluptatibus? Quisquam, in laborum?
          </p>
        </div>
        <form action="" className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div className="flex items-center gap-4">
            <input
              type="text"
              name=""
              id="nama"
              placeholder="Masukan Nama"
              className="input w-full input-bordered bg-white"
              onChange={handleChange}
            />
            <input
              type="number"
              name=""
              id="phone"
              onChange={handleChange}
              placeholder="Masukan nomor telphone"
              className="input w-full input-bordered bg-white"
            />
          </div>
          <input
            type="email"
            name=""
            id="email"
            onChange={handleChange}
            placeholder="Masukan Email"
            className="input w-full input-bordered bg-white"
          />
          <textarea
            name=""
            id="content"
            onChange={handleChange}
            placeholder="apa yang ingin ditanyakan atau didiskusikan"
            className="textarea bg-white min-h-32"
          ></textarea>
          <button className="btn text-white bg-[#5F6F65]">Submit</button>
        </form>
      </div>
      {data.length > 0 && (
      <div className="px-[2rem] bg-[#C9DABF] text-white">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="text-white">
                <th>no</th>
                <th>Nama</th>
                <th>Phone Number</th>
                <th>Email</th>
                <th>Isi</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
              <tr key={index}>
                <th>{index}</th>
                <td>{item.nama}</td>
                <td>{item.phone}</td>
                <td>{item.email}</td>
                <td>{item.content}</td>
              </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      )}
    </>
  );
};
