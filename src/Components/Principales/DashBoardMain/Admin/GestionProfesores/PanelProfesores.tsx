// import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import { dbFire } from "../../../../../firebase/Config/firestore";
import { auth } from "../../../../../firebase/Config/auth";

// const usuarios = [
//   {
//     name: "rodrigo",
//     curso: "matematica",
//     id: "1"
//   },
//   {
//     name: "rodrigo",
//     curso: "historia",
//     id: "2"
//   },
//   {
//     name: "rodrigo",
//     curso: "geografia",
//     id: "3"
//   },
//   {
//     name: "rodrigo",
//     curso: "historia",
//     id: "4"
//   }

const PanelProfesores = () => {
  // const [backgroundColor, setBackgroundColors] = useState("");
  // const [imageUrl, setImageUrl] = useState<string>("https://images.unsplash.com/photo-1494783367193-149034c05e8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGFuZHNjYXBlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60");
  // const generateRandomColor = () => {
  //   const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  //   setBackgroundColors(randomColor)
  // };
  const [imagen, setImagen] = useState<string>("");
  const query = 'education'
  const name = () => {
    fetch(`https://api.unsplash.com/photos/random?count=1&query=${query}&client_id=fq4kbtAscv29Igdu2xzvCyCQIvSXLNeSoa5FQ8EvDws`).then(res => res.json())
      .then(data => {
        const urlImage = data[0].urls.regular
        return urlImage
      }

      ).catch((err) => console.log(err)
      )
  }

  const create = async () => {
    const img = name()
    try {
      console.log(img);

      // const ref = collection(dbFire, "profesores");
      // const email = "coco12@hotmail.com"
      // const password = "Rodrigo123456789"
      // createUserWithEmailAndPassword(auth, email, password)
      // addDoc(ref, {
      //   email,
      //   name: "coquito",
      //   role: "admin",
      //   url: imagen
      // }).then(() => console.log("creado"))
    } catch (err) {
      console.log(err);

    }

  }



  return (
    <>
      <div>
        <div className="text-center text-xl p-4 bg-white">
          <p>Lista de Profesores</p>
        </div>
        <div className="border min-h-[40rem] mt-8 shadow-lg px-4 rounded-3xl flex items-center justify-center" >
          <button onClick={create} >crear</button>
          <div className="h-[15rem] w-[25rem] relative">
            <div className="relative inset-0 h-full w-full">
              <div className="relative h-full  bg-black/50" >
                <img src={imagen} className="absolute top-0 h-[8rem] w-full object-cover bg-black/50 " alt="" />
                <div className="relative w-full bg-black/40 h-full" >
                  <p className="text-white" >hola</p>
                </div>
              </div>
            </div>


          </div>

        </div>
      </div>
    </>
  )
}

export default PanelProfesores
