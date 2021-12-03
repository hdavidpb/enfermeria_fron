import Patients from "@components/pacientes/Patients";
import EsterilesNoOncologicos from "@components/pacientes/patient_details/Esteriles-No-Oncologicos/EsterilesNoOncologicos";
import NutricionesParenterales from "@components/pacientes/patient_details/Nutriciones-Parenterales/NutricionesParenterales";
import OncologicosAmbulatorios from "@components/pacientes/patient_details/Oncologicos-Ambulatorios/OncologicosAmbulatorios";
import OncologicosHospitalarios from "@components/pacientes/patient_details/Oncologicos-Hospitalarios/OncologicosHospitalarios";

import Sidebar from "@components/Sidebar/Sidebar";
import SolicitudTable from "@components/solicitud/solicitud-table/SolicitudTable";
import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import * as sc from "./globalStyles";
const App = () => {
  return (
    <HashRouter>
      <sc.CotizadorContainer>
        <Sidebar />
        <Routes>
          <Route path="/enfermeria/pacientes" element={<Patients />} />
          <Route
            path="/enfermeria/pacientes/orders/esteriles-no-oncologicos/:id"
            element={<EsterilesNoOncologicos />}
          />
          <Route
            path="/enfermeria/pacientes/orders/oncologicos-hospitalarios/:id"
            element={<OncologicosHospitalarios />}
          />
          <Route
            path="/enfermeria/pacientes/orders/oncologicos-ambulatorios/:id"
            element={<OncologicosAmbulatorios />}
          />
          <Route
            path="/enfermeria/pacientes/orders/nutriciones-parenterales/:id"
            element={<NutricionesParenterales />}
          />
          <Route
            path="/enfermeria/solicitud-insumos"
            element={<SolicitudTable />}
          />
        </Routes>
      </sc.CotizadorContainer>
    </HashRouter>
  );
};

export default App;
