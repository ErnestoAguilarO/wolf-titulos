import React, { useState } from 'react';

function App() {
  const [activeTab, setActiveTab] = useState('vendedor');

  const tabs = [
    { id: 'vendedor', label: 'Parte Vendedora' },
    { id: 'comprador', label: 'Parte Compradora' },
    { id: 'inmueble', label: 'Inmueble' },
    { id: 'documentos', label: 'Documentos' },
    { id: 'condiciones', label: 'Condiciones' },
  ];

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '1100px', margin: '0 auto', padding: '20px' }}>
      
      {/* Header */}
      <div style={{ backgroundColor: '#1a1a2e', color: 'white', padding: '20px 30px', borderRadius: '8px', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '16px' }}>
        <div style={{ fontSize: '28px' }}>⚖️</div>
        <div>
          <h1 style={{ margin: 0, fontSize: '22px', fontWeight: 'bold' }}>Wolf Títulos</h1>
          <p style={{ margin: 0, fontSize: '13px', opacity: 0.7 }}>Plataforma de Estudio de Títulos</p>
        </div>
      </div>

      {/* Operación info */}
      <div style={{ backgroundColor: '#f8f9fa', border: '1px solid #e0e0e0', borderRadius: '8px', padding: '16px 20px', marginBottom: '24px' }}>
        <label style={{ fontSize: '13px', color: '#666', display: 'block', marginBottom: '6px' }}>Nombre de la Operación</label>
        <input 
          type="text" 
          placeholder="Ej: Compraventa Av. Providencia 1234, Santiago"
          style={{ width: '100%', padding: '10px', fontSize: '15px', border: '1px solid #ccc', borderRadius: '6px', boxSizing: 'border-box' }}
        />
      </div>

      {/* Tabs */}
      <div style={{ display: 'flex', borderBottom: '2px solid #e0e0e0', marginBottom: '24px', gap: '4px' }}>
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={{
              padding: '10px 20px',
              border: 'none',
              backgroundColor: activeTab === tab.id ? '#1a1a2e' : 'transparent',
              color: activeTab === tab.id ? 'white' : '#666',
              borderRadius: '6px 6px 0 0',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: activeTab === tab.id ? 'bold' : 'normal',
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div style={{ backgroundColor: 'white', border: '1px solid #e0e0e0', borderRadius: '8px', padding: '24px' }}>
        
        {activeTab === 'vendedor' && (
          <div>
            <h2 style={{ marginTop: 0, color: '#1a1a2e' }}>Parte Vendedora</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <div>
                <label style={{ fontSize: '13px', color: '#666', display: 'block', marginBottom: '4px' }}>Nombres y Apellidos</label>
                <input type="text" style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '6px', boxSizing: 'border-box' }} />
              </div>
              <div>
                <label style={{ fontSize: '13px', color: '#666', display: 'block', marginBottom: '4px' }}>Cédula de Identidad</label>
                <input type="text" style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '6px', boxSizing: 'border-box' }} />
              </div>
              <div>
                <label style={{ fontSize: '13px', color: '#666', display: 'block', marginBottom: '4px' }}>Estado Civil</label>
                <select style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '6px', boxSizing: 'border-box' }}>
                  <option>Soltero/a</option>
                  <option>Casado/a - Sociedad Conyugal</option>
                  <option>Casado/a - Separación Total</option>
                  <option>Casado/a - Separación Parcial</option>
                  <option>AUC Sin Comunidad</option>
                  <option>AUC Gananciales</option>
                  <option>Viudo/a</option>
                  <option>Divorciado/a</option>
                </select>
              </div>
              <div>
                <label style={{ fontSize: '13px', color: '#666', display: 'block', marginBottom: '4px' }}>Nacionalidad</label>
                <input type="text" defaultValue="Chilena" style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '6px', boxSizing: 'border-box' }} />
              </div>
              <div>
                <label style={{ fontSize: '13px', color: '#666', display: 'block', marginBottom: '4px' }}>Profesión u Oficio</label>
                <input type="text" style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '6px', boxSizing: 'border-box' }} />
              </div>
              <div>
                <label style={{ fontSize: '13px', color: '#666', display: 'block', marginBottom: '4px' }}>Domicilio</label>
                <input type="text" style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '6px', boxSizing: 'border-box' }} />
              </div>
            </div>
          </div>
        )}

        {activeTab === 'comprador' && (
          <div>
            <h2 style={{ marginTop: 0, color: '#1a1a2e' }}>Parte Compradora</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <div>
                <label style={{ fontSize: '13px', color: '#666', display: 'block', marginBottom: '4px' }}>Nombres y Apellidos</label>
                <input type="text" style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '6px', boxSizing: 'border-box' }} />
              </div>
              <div>
                <label style={{ fontSize: '13px', color: '#666', display: 'block', marginBottom: '4px' }}>Cédula de Identidad</label>
                <input type="text" style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '6px', boxSizing: 'border-box' }} />
              </div>
              <div>
                <label style={{ fontSize: '13px', color: '#666', display: 'block', marginBottom: '4px' }}>Estado Civil</label>
                <select style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '6px', boxSizing: 'border-box' }}>
                  <option>Soltero/a</option>
                  <option>Casado/a - Sociedad Conyugal</option>
                  <option>Casado/a - Separación Total</option>
                  <option>Casado/a - Separación Parcial</option>
                  <option>AUC Sin Comunidad</option>
                  <option>AUC Gananciales</option>
                  <option>Viudo/a</option>
                  <option>Divorciado/a</option>
                </select>
              </div>
              <div>
                <label style={{ fontSize: '13px', color: '#666', display: 'block', marginBottom: '4px' }}>Nacionalidad</label>
                <input type="text" defaultValue="Chilena" style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '6px', boxSizing: 'border-box' }} />
              </div>
              <div>
                <label style={{ fontSize: '13px', color: '#666', display: 'block', marginBottom: '4px' }}>Profesión u Oficio</label>
                <input type="text" style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '6px', boxSizing: 'border-box' }} />
              </div>
              <div>
                <label style={{ fontSize: '13px', color: '#666', display: 'block', marginBottom: '4px' }}>Domicilio</label>
                <input type="text" style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '6px', boxSizing: 'border-box' }} />
              </div>
            </div>
          </div>
        )}

        {activeTab === 'inmueble' && (
          <div>
            <h2 style={{ marginTop: 0, color: '#1a1a2e' }}>Datos del Inmueble</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <div>
                <label style={{ fontSize: '13px', color: '#666', display: 'block', marginBottom: '4px' }}>Dirección y Número</label>
                <input type="text" style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '6px', boxSizing: 'border-box' }} />
              </div>
              <div>
                <label style={{ fontSize: '13px', color: '#666', display: 'block', marginBottom: '4px' }}>Comuna</label>
                <input type="text" style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '6px', boxSizing: 'border-box' }} />
              </div>
              <div>
                <label style={{ fontSize: '13px', color: '#666', display: 'block', marginBottom: '4px' }}>Región</label>
                <input type="text" style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '6px', boxSizing: 'border-box' }} />
              </div>
              <div>
                <label style={{ fontSize: '13px', color: '#666', display: 'block', marginBottom: '4px' }}>Rol de Avalúo</label>
                <input type="text" placeholder="Ej: 1234-5" style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '6px', boxSizing: 'border-box' }} />
              </div>
              <div style={{ gridColumn: '1 / -1' }}>
                <label style={{ fontSize: '13px', color: '#666', display: 'block', marginBottom: '4px' }}>Descripción del Inmueble (tal como aparece en dominio vigente)</label>
                <textarea rows={4} style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '6px', boxSizing: 'border-box', resize: 'vertical' }} />
              </div>
              <div>
                <label style={{ fontSize: '13px', color: '#666', display: 'block', marginBottom: '4px' }}>Deslinde Norte</label>
                <input type="text" style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '6px', boxSizing: 'border-box' }} />
              </div>
              <div>
                <label style={{ fontSize: '13px', color: '#666', display: 'block', marginBottom: '4px' }}>Deslinde Sur</label>
                <input type="text" style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '6px', boxSizing: 'border-box' }} />
              </div>
              <div>
                <label style={{ fontSize: '13px', color: '#666', display: 'block', marginBottom: '4px' }}>Deslinde Oriente</label>
                <input type="text" style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '6px', boxSizing: 'border-box' }} />
              </div>
              <div>
                <label style={{ fontSize: '13px', color: '#666', display: 'block', marginBottom: '4px' }}>Deslinde Poniente</label>
                <input type="text" style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '6px', boxSizing: 'border-box' }} />
              </div>
            </div>
          </div>
        )}

        {activeTab === 'documentos' && (
          <div>
            <h2 style={{ marginTop: 0, color: '#1a1a2e' }}>Carga de Documentos</h2>
            <p style={{ color: '#666', fontSize: '14px' }}>Sube los certificados y documentos de la operación.</p>
            {[
              'Certificado de Dominio Vigente',
              'Certificado de Hipotecas y Gravámenes',
              'Certificado de Avalúo Fiscal (SII)',
              'Certificado de Contribuciones',
              'Certificado de Expropiación Municipal',
              'Certificado de Expropiación SERVIU',
              'Certificado de Número Municipal',
              'Certificado de Gastos Comunes',
              'Certificado de Deuda de Aseo',
              'Certificado de Tierras Indígenas',
            ].map((doc) => (
              <div key={doc} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 16px', border: '1px solid #e0e0e0', borderRadius: '6px', marginBottom: '8px' }}>
                <span style={{ fontSize: '14px', color: '#333' }}>📄 {doc}</span>
                <label style={{ backgroundColor: '#1a1a2e', color: 'white', padding: '6px 14px', borderRadius: '6px', cursor: 'pointer', fontSize: '13px' }}>
                  Subir
                  <input type="file" accept=".pdf,.jpg,.png" style={{ display: 'none' }} />
                </label>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'condiciones' && (
          <div>
            <h2 style={{ marginTop: 0, color: '#1a1a2e' }}>Condiciones de la Operación</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <div>
                <label style={{ fontSize: '13px', color: '#666', display: 'block', marginBottom: '4px' }}>Precio (UF)</label>
                <input type="text" placeholder="Ej: 3.500 UF" style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '6px', boxSizing: 'border-box' }} />
              </div>
              <div>
                <label style={{ fontSize: '13px', color: '#666', display: 'block', marginBottom: '4px' }}>Forma de Pago</label>
                <select style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '6px', boxSizing: 'border-box' }}>
                  <option>Contado</option>
                  <option>Con Crédito Hipotecario</option>
                  <option>Con Subsidio</option>
                  <option>Mixto</option>
                </select>
              </div>
              <div>
                <label style={{ fontSize: '13px', color: '#666', display: 'block', marginBottom: '4px' }}>Banco Mutuante</label>
                <input type="text" style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '6px', boxSizing: 'border-box' }} />
              </div>
              <div>
                <label style={{ fontSize: '13px', color: '#666', display: 'block', marginBottom: '4px' }}>Banco Alzante</label>
                <input type="text" style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '6px', boxSizing: 'border-box' }} />
              </div>
              <div style={{ gridColumn: '1 / -1' }}>
                <label style={{ fontSize: '13px', color: '#666', display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>Características especiales</label>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                  {['¿Hay alzamiento de hipoteca?', '¿Hay subsidio habitacional?', '¿Es venta con inmobiliaria?', '¿Hay subdivisión DL 3.516?', '¿Aplica IVA?', '¿Hay cónyuge que autorizar?', '¿Hay servidumbre?', '¿El terreno tiene construcción?'].map(item => (
                    <label key={item} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', cursor: 'pointer' }}>
                      <input type="checkbox" />
                      {item}
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Botón generar */}
      <div style={{ marginTop: '24px', textAlign: 'center' }}>
        <button style={{ backgroundColor: '#1a1a2e', color: 'white', padding: '14px 40px', border: 'none', borderRadius: '8px', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer' }}>
          ⚖️ Analizar y Generar Informe de Títulos
        </button>
      </div>

    </div>
  );
}

export default App;