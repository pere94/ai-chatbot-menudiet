// import logo from './logo.svg';
import logo from "./img/plato.png";
import "./App.css";
import * as React from "react";
import {postalCodesMadrid} from "./postalCodesMadrid";
// import ListSubheader from "@mui/material/ListSubheader";
// import List from "@mui/material/List";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemText from "@mui/material/ListItemText";
// import Collapse from "@mui/material/Collapse";
// import ExpandLess from "@mui/icons-material/ExpandLess";
// import ExpandMore from "@mui/icons-material/ExpandMore";
// import BasicModal from "./components/PayModal";


function App() {

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
    // console.log("🚀 ~ file: App.js ~ line 42 ~ event.detail.response.queryResult", event.detail.response);
    // console.log("🚀 ~ file: App.js ~ line 43 ~ response", response);

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
      if (response.ayuda === "info menus semanales") {
        window.open("https://www.menudiet.es/ayuda/sobre-los-menus-semanales/", "_blank").focus();
      }
      if (response.ayuda === "info platos a la carta") {
        window.open("https://www.menudiet.es/ayuda/sobre-los-platos-a-la-carta/", "_blank").focus();
      }
      if (response.ayuda === "info menus de degustacion") {
        window.open("https://www.menudiet.es/ayuda/sobre-los-menus-degustacion/", "_blank").focus();
      }
      if (response.ayuda === "info cuenta menudiet") {
        window.open("https://www.menudiet.es/ayuda/sobre-mi-cuenta/", "_blank").focus();
      }
      if (response.ayuda === "info compra menudiet") {
        window.open("https://www.menudiet.es/ayuda/comprando-en-menudiet/", "_blank").focus();
      }
      if (response.ayuda === "info entrega comida") {
        window.open("https://www.menudiet.es/ayuda/recibiendo-mi-comida/", "_blank").focus();
      }
      if (response.ayuda === "preparado y conserva de comida") {
        window.open("https://www.menudiet.es/ayuda/conservando-y-preparando-mi-comida/", "_blank").focus();
      }
      if (response.ayuda === "info salud app" || response.ayuda[0] === "info salud app") {
        window.open("https://www.menudiet.es/ayuda/controlando-mi-salud/", "_blank").focus();
      }
    }

    
    
    if(response["zip-code"]) {
      console.log("🚀 ~ file: App.js ~ line 95 ~ response[zip-code]", response["zip-code"]);
      if (response["zip-code"] !== "") {
        const zoneName = postalCodesMadrid.filter(zone => zone.postalCode === response["zip-code"]);
        if(zoneName[0] !== undefined) {
          const dfMessenger = document.querySelector('df-messenger');
          let payload = new Array([]);
          payload = [
            {
              "title": `Perfecto, vives en ${zoneName[0].zone}. Tu entrega a domicilio puede ser procesada.`,
              "type": "info"
            },
            {
              "title": "¿Estás ya listo para hacer el pedido o quieres realizar otras acciones?",
              "type": "info"
            },
            {
              "options": [
                {
                  "text": "Empezar el pedido",
                  "image": {
                    "src": {
                      "rawUrl": "https://cdn-icons-png.flaticon.com/512/590/590504.png"
                    }
                  }
                },
                {
                  "text": "Consulta tu zona para el envio",
                  "image": {
                    "src": {
                      "rawUrl": "https://cdn-icons-png.flaticon.com/512/471/471340.png"
                    }
                  }
                },
                {
                  "image": {
                    "src": {
                      "rawUrl": "https://cdn-icons-png.flaticon.com/512/564/564744.png"
                    }
                  },
                  "text": "¿Cómo funciona MenuDiet?"
                },
                {
                  "text": "Centro de Ayuda",
                  "image": {
                    "src": {
                      "rawUrl": "https://cdn-icons-png.flaticon.com/512/1246/1246331.png"
                    }
                  }
                }
              ],
              "type": "chips"
            }];
          dfMessenger.renderCustomCard(payload);

        } else {
          const dfMessenger = document.querySelector('df-messenger');
          dfMessenger.renderCustomText(`Desafortunadamente vives en una zona o país donde tu entrega no puede ser enviada a domicilio.`);
        }
      } else {
        const dfMessenger = document.querySelector('df-messenger');
        dfMessenger.renderCustomText(`Desafortunadamente vives en una zona o país donde tu entrega no puede ser enviada a domicilio.`);
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
