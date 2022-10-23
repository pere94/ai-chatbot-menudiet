// import logo from './logo.svg';
import logo from "./img/plato.png";
import "./App.css";
import * as React from "react";
// import ListSubheader from "@mui/material/ListSubheader";
// import List from "@mui/material/List";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemText from "@mui/material/ListItemText";
// import Collapse from "@mui/material/Collapse";
// import ExpandLess from "@mui/icons-material/ExpandLess";
// import ExpandMore from "@mui/icons-material/ExpandMore";
// import BasicModal from "./components/PayModal";


function App() {
  // const pedido_pizza = {
  //   tamano: "",
  //   tipo_masa: "",
  //   gluten: "",
  //   salsa: "",
  //   tipo_queso: "",
  //   cant_queso: "",
  //   ingredientes: [],
  //   nombre: "",
  //   telefono: "",
  //   direccion: "",
  // };
  // const [pedido, setPedido] = React.useState(pedido_pizza);
  // const [finPedido, setFinPedido] = React.useState(false);
  // const [open, setOpen] = React.useState(true);

  // const handleClick = () => {
  //   setOpen(!open);
  // };

  // let AgregoYaRenderizado = [];
  const dfMessenger = document.querySelector("df-messenger");
  dfMessenger.addEventListener("df-response-received", function (event) {
    // Handle event

    const response = event.detail.response.queryResult.parameters;
    console.log("🚀 ~ file: App.js ~ line 43 ~ response", response);

    if(response.pedido) {
      if (response.pedido === "menus semanales") {
        window.open("https://www.menudiet.es/comprar/menus/", "_blank").focus();
      }
      if (response.pedido === "platos a la carta") {
        window.open("https://www.menudiet.es/comprar/platos/", "_blank").focus();
      }
      if (response.pedido === "menus de degustacion") {
        window.open("https://www.menudiet.es/comprar/degustacion/", "_blank").focus();
      }
    }

    if(response.funcionamiento) {
      if (response.funcionamiento === "guia de comidas") {
        window.open("https://www.menudiet.es/platos/", "_blank").focus();
      }
      if (response.funcionamiento === "listado de dietistas") {
        window.open("https://www.menudiet.es/dietistas-nutricionistas/#dietistas", "_blank").focus();
      }
      if (response.funcionamiento === "info app salud") {
        window.open("https://www.menudiet.es/salud/", "_blank").focus();
      }
    }

    if(response.ayuda) {
      if (response.ayuda === "info empresa MenuDiet") {
        window.open("https://www.menudiet.es/ayuda/sobre-la-empresa/", "_blank").focus();
      }
      if (response.ayuda === "info comida") {
        window.open("https://www.menudiet.es/ayuda/sobre-la-comida/", "_blank").focus();
      }
    }

  });

  

  return (
    <div className="App">
      <header className="App-header">
        <h1>MENUDIET</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <h4 style={{fontStyle: "italic"}}>La forma más efectiva de comer sano todos los días</h4>
      </header>
      {/* <List
        sx={{
          width: "100%",
          maxWidth: 400,
          bgcolor: "rgba(255,255,255,0.2)",
          borderRadius: "5px",
          marginTop: "30px",
        }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            Tu Pedido
          </ListSubheader>
        }
      >
        <ListItemButton>
          <ListItemText primary={`Tamaño: ${pedido.tamano}`} />
        </ListItemButton>

        <ListItemButton>
          <ListItemText primary={`Tipo de Masa: ${pedido.tipo_masa}`} />
        </ListItemButton>

        <ListItemButton>
          <ListItemText primary={`Gluten: ${pedido.gluten}`} />
        </ListItemButton>

        <ListItemButton>
          <ListItemText primary={`Salsa: ${pedido.salsa}`} />
        </ListItemButton>

        <ListItemButton>
          <ListItemText primary={`Tipo de Queso: ${pedido.tipo_queso}`} />
        </ListItemButton>

        <ListItemButton>
          <ListItemText primary={`Cantidad Queso: ${pedido.cant_queso}`} />
        </ListItemButton>

        <ListItemButton onClick={handleClick}>
          <ListItemText primary="Ingredientes o Agregos:" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>

        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {pedido.ingredientes.map((ingredient, index) => {
              if (!AgregoYaRenderizado.includes(ingredient)) {
                AgregoYaRenderizado.push(ingredient);
                return (
                <ListItemButton key={`Agregos-${ingredient}-${index}`} sx={{ pl: 4 }}>
                  <ListItemText primary={`${pedido.ingredientes.filter(item => item === ingredient).length} ${ingredient}`} />
                </ListItemButton>)
              } else return (<React.Fragment key={`Agregos-${ingredient}-${index}`}></React.Fragment>)
              
            })}
          </List>
        </Collapse>
      </List> */}
      {/* {finPedido && <BasicModal pedido={pedido} finPedido={finPedido} setFinPedido={setFinPedido}/>} */}
    </div>
  );
}

export default App;
