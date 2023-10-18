import { BsCardChecklist } from "react-icons/bs"
import ListaProfesores from "./ListaProfesores"
// import CardProfesores from "./CardProfesores"

const PanelProfesores = () => {  
   
  return (
    <> 
      <div className="text-center text-2xl p-4 bg-white shadow-md rounded-md">
        <p className="flex items-center justify-center gap-2 text-[#2563ebe6] underline" >Lista de Profesores <BsCardChecklist /> </p>
      </div>
      <div className="border-[#2563ebe6]/30 bg-white min-h-[40rem] my-8 shadow-lg  rounded-3xl flex items-center justify-center flex-wrap content-center gap-x-5 gap-y-6 px-3 py-10">
        <ListaProfesores/>
      </div>
    </>
  )
}

export default PanelProfesores

  // const [backgroundColor, setBackgroundColors] = useState("");
  // const [imageUrl, setImageUrl] = useState<string>("https://images.unsplash.com/photo-1494783367193-149034c05e8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGFuZHNjYXBlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60");
  // const generateRandomColor = () => {
  //   const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  //   setBackgroundColors(randomColor)
  // };
  // const query = 'education'

  // const url = `https://api.unsplash.com/photos/random?count=1&query=${query}&client_id=fq4kbtAscv29Igdu2xzvCyCQIvSXLNeSoa5FQ8EvDws`
  // const create = async () => {
  //   const { data } = await axios.get(url)
  //   const img = data[0].urls.regular

  //   try {
  //     const refCollection = collection(dbFire, "profesores")

  //     const email = "rodrigo15975@hotmail.com"
  //     const password = "Coco70537447"
  //     const { user } = await createUserWithEmailAndPassword(auth, email, password)

  //     const data = {
  //       email,
  //       name: "rodrigo rumpler",
  //       password,
  //       img,
  //       uid: user.uid,
  //       role: "admin",
  //       cursos: [
  //         {
  //           name: "matematica"
  //         },
  //         {
  //           name: "historia"
  //         }
  //       ],
  //       horario: [
  //         {
  //           horario: "7.45AM : 9.45AM"
  //         }
  //       ]
  //     }
  //     await addDoc(refCollection, data)
  //     console.log(user);


  //   } catch (err) {
  //     console.log(err);

