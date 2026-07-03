import React from 'react';
import { PasoWizard } from '../types';

interface WizardNavProps {
  pasoActual: PasoWizard;
  onAtras: () => void;
  onGuardar: () => void;
  onGuardarYContinuar: () => void;
  puedeAvanzar: boolean;
  esPrimerPaso: boolean;
  esUltimoPaso: boolean;
}

const PASOS: { id: PasoWizard; label: string }[] = [
  { id: 'datos_operacion', label: 'Datos operación' },
  { id: 'parte_vendedora', label: 'Parte vendedora' },
  { id: 'parte_compradora', label: 'Parte compradora' },
  { id: 'inmueble', label: 'Inmueble' },
  { id: 'documentos', label: 'Documentos' },
  { id: 'validacion', label: 'Validación' },
  { id: 'informe_final', label: 'Informe final' },
];

export default function WizardNav({
  pasoActual,
  onAtras,
  onGuardar,
  onGuardarYContinuar,
  puedeAvanzar,
  esPrimerPaso,
  esUltimoPaso,
}: WizardNavProps) {
  const indiceActual = PASOS.findIndex((p) => p.id === pasoActual);

  return (
    <div style={{ marginBottom: '32px' }}>
      {/* Indicador de progreso */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '24px',
          position: 'relative',
        }}
      >
        {PASOS.map((paso, index) => {
          const completado = index < indiceActual;
          const activo = index === indiceActual;
          return (
            <div
              key={paso.id}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                flex: 1,
                position: 'relative',
              }}
            >
              <div
                style={{
                  width: '28px',
                  height: '28px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '13px',
                  fontWeight: 'bold',
                  backgroundColor: completado
                    ? '#1a1a2e'
                    : activo
                    ? '#ffffff'
                    : '#e5e5e5',
                  color: completado ? '#fff' : activo ? '#1a1a2e' : '#999',
                  border: activo ? '2px solid #1a1a2e' : 'none',
                  zIndex: 1,
                }}
              >
                {completado ? '✓' : index + 1}
              </div>
              <span
                style={{
                  fontSize: '11px',
                  marginTop: '6px',
                  textAlign: 'center',
                  color: activo ? '#1a1a2e' : '#999',
                  fontWeight: activo ? 'bold' : 'normal',
                }}
              >
                {paso.label}
              </span>
            </div>
          );
        })}
      </div>

      {/* Botones de acción */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingTop: '16px',
          borderTop: '1px solid #eee',
        }}
      >
        <button
          onClick={onAtras}
          disabled={esPrimerPaso}
          style={{
            padding: '10px 20px',
            borderRadius: '6px',
            border: '1px solid #ccc',
            backgroundColor: esPrimerPaso ? '#f5f5f5' : '#fff',
            color: esPrimerPaso ? '#bbb' : '#333',
            cursor: esPrimerPaso ? 'not-allowed' : 'pointer',
          }}
        >
          ← Atrás
        </button>

        <div style={{ display: 'flex', gap: '10px' }}>
          <button
            onClick={onGuardar}
            style={{
              padding: '10px 20px',
              borderRadius: '6px',
              border: '1px solid #1a1a2e',
              backgroundColor: '#fff',
              color: '#1a1a2e',
              cursor: 'pointer',
            }}
          >
            Guardar
          </button>

          {!esUltimoPaso && (
            <button
              onClick={onGuardarYContinuar}
              disabled={!puedeAvanzar}
              style={{
                padding: '10px 20px',
                borderRadius: '6px',
                border: 'none',
                backgroundColor: puedeAvanzar ? '#1a1a2e' : '#ccc',
                color: '#fff',
                cursor: puedeAvanzar ? 'pointer' : 'not-allowed',
              }}
            >
              Guardar y continuar →
            </button>
          )}
        </div>
      </div>
    </div>
  );
}