import { useState } from "react";
import "../assets/style/App.css";


function App() {
  let [nombre, setNombre] = useState("");
  let [password, setPassword] = useState("");
  let [textito, setTextito] = useState("");
  let [frase, setFrase] = useState("Una app para hacerles creer a todos que sos realmente feliz");
  let [imagen, setImagen] = useState("https://media.giphy.com/media/k1UN592osooaQ/giphy.gif?cid=ecf05e47oi7e9st158zgnurhmyon36cna8hzaygeur1gxwlw&ep=v1_gifs_search&rid=giphy.gif&ct=g")

  const handleChange = (e) => {
    nombre = setNombre(e.target.value);
    console.log(e.target.value);
  };
  const handleChange2 = (e) => {
    if(e.target.value == 'pepeloco') alert("Hola Joniii")
    password = setPassword(e.target.value);
    console.log(e.target.value);
  };
  const handleClick = () => {
    setNombre(nombre)
    setPassword(password)
    if(nombre == "" || password == "") {
      alert("No ingresaste tus datos!")
  } else if (nombre == password) {
  setTextito("Qué poca imaginación, che")
  setFrase("Esta red necesita un botón que diga: 'Te conozco en la vida real y no sos así'")
  setImagen("https://media.giphy.com/media/bRdXN9OHN7lLHyxeQi/giphy.gif?cid=ecf05e47127u4y1866zusf4hz66jheacawynvhkj6wzt3hhb&ep=v1_gifs_search&rid=giphy.gif&ct=g")
} else if (nombre == "peperina" || nombre == "pepeloco" || nombre == "Jonatan") {
  setTextito("CodeaRock (:")
  setImagen("https://media.giphy.com/media/y4DARu43ULbu8dodFn/giphy.gif?cid=ecf05e47f8l2xn8gm6rd6g57u90l7w9bpek6ohcyfslwcmho&ep=v1_gifs_search&rid=giphy.gif&ct=g")
  setFrase("Llegará un momento en que la tecnología se apropiará de las debilidades humanas")
}
  else {
    console.log("Los datos guardados son -user:", nombre, " y -pass:", password);
    setTextito("Bienvenidx, hora de ponerse la máscara")
    setFrase("Esta red necesita un botón que diga: 'Te conozco en la vida real y no sos así'")
    setImagen("https://media.giphy.com/media/UpEIS0hzVdrRFETl0Z/giphy.gif?cid=ecf05e476diospwapqmk01r008a0gt9oatjjvoj3ecok9sbu&ep=v1_gifs_search&rid=giphy.gif&ct=g")
  }
    
  };
  return (
    <>
      <div>
        <div>
          <h1 className="app-title">Caretagram</h1>
          <img src={imagen} className="app-gif"/>
          <p style={{ fontSize: 10 }}>
          {frase}
        </p>
        </div>
        <h2 className="app-text">Hola {nombre}</h2>
        <h2 className="app-bienvenida" id="textito">
          {textito}
        </h2>
        <div className="card app-text">
        <label htmlFor="user">Usuario </label>
        <input type="text" id="user" onChange={handleChange}/>
        <br></br>
        <label htmlFor="pass">Password </label>
        <input type="password" id="pass" onChange={handleChange2}/>
        <br></br>
        
      </div>
      <div>
        <button onClick={handleClick}>Entrar</button>
      </div>
    

        <div>
          <p className="footer" style={{ fontSize: 12 }}>
            Laura Barcia - Summerhack 2024
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
