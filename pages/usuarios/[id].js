import clienteAxios from "../../config/clienteAxios";
import  { useRouter } from "next/router";
import React, { useContext, useState, useEffect } from "react";
import { Button } from "primereact/button";
import { Password } from "primereact/password";
import { InputText } from "primereact/inputtext";

export default function AddUser() {
  const [password, setPassword] = useState("");
  const [loginUsuario, setLoginUsuario] = useState("");
  const [userSiaf, setUserSiaf] = useState('');
  const route = useRouter();

  
  //console.log(route.query);
  
  useEffect(() => {
    const getUserSiaf = async () => {
        const { id } = route.query;
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          setCargado(false);
          return;
        }
        const config = {
          headers: {
            "Content-Type": "aplication/json",
            Authorization: `Bearer ${token}`,
          },
        };
        const data = await clienteAxios(`/usuarios/adduser/${id}`, config);
        setUserSiaf(data.data);

      } catch (error) {
        console.log(error);
      }
    };
    getUserSiaf();
  }, []);

  

  //{codigo: 1, usuario: 'ADMINISTRADOR DEL SIAF', identificacion: 'sa'}
  return (
    <div className="card">
      <div className="flex justify-content-center flex-wrap card-container indigo-container">
        <div
          style={{
            borderRadius: "56px",
            padding: "0.3rem",
            background:
              "linear-gradient(180deg, var(--primary-color) 10%, rgba(33, 150, 243, 0) 30%)",
          }}
        >
          <div
            className="w-full surface-card py-5 px-5 sm:px-8"
            style={{ borderRadius: "53px" }}
          >
            <div className="text-center">
              <div className="text-900 text-3xl font-medium mb-3">
                Agregar Usuario
              </div>
            </div>
            <div>
              <label
                htmlFor="nombreUsuario"
                className="block text-900 text-xl font-medium mb-2"
              >
                Nombre, Apellido
              </label>
              <InputText
                inputid="nombreUsuario"
                type="text"
                placeholder="Nombre Funcionario"
                className="w-full md:w-25rem mb-5"
                style={{ padding: "1rem" }}
                value={userSiaf.usuario || ''}
                onChange={(e) => setLoginUsuario(e.target.value)}
              />
            </div>
            <div>
              <label
                htmlFor="usuario"
                className="block text-900 text-xl font-medium mb-2"
              >
                Usuario
              </label>
              <InputText
                inputid="usuario"
                type="text"
                placeholder="Usuario Siaf-Sice"
                className="w-full md:w-25rem mb-5"
                style={{ padding: "1rem" }}
                value={userSiaf.identificacion || ''}
                onChange={(e) => setLoginUsuario(e.target.value)}
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-900 font-medium text-xl mb-2"
              >
                Contraseña
              </label>
              <Password
                inputid="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Contraseña"
                className="w-full mb-5"
                inputClassName="w-full p-3 md:w-25rem"
                toggleMask
                feedback={false}
              ></Password>
            </div>
            <div>
              <div>
                <label
                  htmlFor="codigo"
                  className="block text-900 text-xl font-medium mb-2"
                >
                  Codigo Siaf-Sice
                </label>
                <InputText
                  inputid="codigo"
                  type="text"
                  placeholder="Nombre Funcionario"
                  className="w-full md:w-25rem mb-5"
                  style={{ padding: "1rem" }}
                  value={userSiaf.codigo || ''}
                  onChange={(e) => setLoginUsuario(e.target.value)}
                />
              </div>
              <div>
                <Button
                  type="submit"
                  label="Agregar"
                  className="w-full p-3 text-xl"
                ></Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
