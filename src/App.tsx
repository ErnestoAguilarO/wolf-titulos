import React, { useState } from 'react';
import {
  PasoWizard,
  EstadoEstudioTitulos,
  DatosOperacion,
} from './types';
import WizardNav from './components/WizardNav';
import PasoDatosGenerales from './components/PasoDatosGenerales';

const datosOperacionVacios: DatosOperacion = {
  nombreOperacion: '',
  direccionInmueble: '',
  comuna: '',
  region: '',
  rolAvaluo: '',
  nombreComprador: '',
  nombreVendedor: '',
  precio: '',
  tipoOperacion: 'compraventa',
};

const ORDEN_PASOS: PasoWizard[] = [
  'datos_operacion',
  'parte_vendedora',
  'parte_compradora',
  'inmueble',
  'documentos',
  'validacion',
  'informe_final',
];

function App() {
  const [estado, setEstado] = useState<EstadoEstudioTitulos>({
    pasoActual: 'datos_operacion',
    datosOperacion: datosOperacionVacios,
    parteVendedora: { tipoVendedor: null },
    parteCompradora: { tipoComprador: null, formaPago: null },
    inmueble: {
      direccionCompleta: '',
      comuna: '',
      region: '',
      rolAvaluo: '',
      tipoInmueble: null,
      descripcionDominioVigente: '',
      deslindes: '',
      inscripcionDominio: '',
      fojas: '',
      numero: '',
      anio: '',
      conservadorBienesRaices: '',
      acogidoCopropiedad: false,
      tieneHipoteca: false,
      tieneProhibiciones: false,
      tieneUsufructo: false,
      tieneServidumbre: false,
      estaArrendado: false,
      existeAlzamiento: false,
      aplicaIVA: false,
      haySubsidioHabitacional: false,
      haySubdivisionDL3516: false,
      terrenoTieneConstruccion: false,
      hayExpropiacion: false,
    },
    documentos: [],
    validacion: null,
    informe: null,
  });

  const indiceActual = ORDEN_PASOS.indexOf(estado.pasoActual);
  const esPrimerPaso = indiceActual === 0;
  const esUltimoPaso = indiceActual === ORDEN_PASOS.length - 1;

  const irAPaso = (paso: PasoWizard) => {
    setEstado((prev) => ({ ...prev, pasoActual: paso }));
    window.scrollTo(0, 0);
  };

  const handleAtras = () => {
    if (!esPrimerPaso) irAPaso(ORDEN_PASOS[indiceActual - 1]);
  };

  const handleGuardar = () => {
    // Por ahora solo guarda en el estado local (memoria del navegador).
    // Más adelante esto se conectará a una base de datos.
    alert('Guardado (por ahora localmente, en memoria).');
  };

  const handleGuardarYContinuar = () => {
    if (!esUltimoPaso) irAPaso(ORDEN_PASOS[indiceActual + 1]);
  };

  // Validación simple: ¿puede avanzar desde el paso actual?
  const puedeAvanzar = (): boolean => {
    if (estado.pasoActual === 'datos_operacion') {
      const d = estado.datosOperacion;
      return !!(
        d.nombreOperacion &&
        d.direccionInmueble &&
        d.comuna &&
        d.nombreVendedor &&
        d.nombreComprador
      );
    }
    return true; // los demás pasos, por ahora, sin validación estricta
  };

  const renderPaso = () => {
    switch (estado.pasoActual) {
      case 'datos_operacion':
        return (
          <PasoDatosGenerales
            datos={estado.datosOperacion}
            onChange={(datosOperacion) =>
              setEstado((prev) => ({ ...prev, datosOperacion }))
            }
          />
        );
      default:
        return (
          <div style={{ padding: '40px', textAlign: 'center', color: '#999' }}>
            <p>Este paso ("{estado.pasoActual}") todavía no está construido.</p>
            <p style={{ fontSize: '13px' }}>Lo agregamos en el siguiente ajuste.</p>
          </div>
        );
    }
  };

  return (
    <div
      style={{
        maxWidth: '800px',
        margin: '0 auto',
        padding: '40px 24px',
        fontFamily: 'system-ui, -apple-system, sans-serif',
      }}
    >
      <div style={{ marginBottom: '32px', textAlign: 'center' }}>
        <h1 style={{ margin: 0, color: '#1a1a2e' }}>Wolf Títulos</h1>
        <p style={{ color: '#999', fontSize: '13px', marginTop: '4px' }}>
          Estudio de títulos guiado
        </p>
      </div>

      <WizardNav
        pasoActual={estado.pasoActual}
        onAtras={handleAtras}
        onGuardar={handleGuardar}
        onGuardarYContinuar={handleGuardarYContinuar}
        puedeAvanzar={puedeAvanzar()}
        esPrimerPaso={esPrimerPaso}
        esUltimoPaso={esUltimoPaso}
      />

      {renderPaso()}
    </div>
  );
}

export default App;