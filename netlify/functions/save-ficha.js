import { writeFile } from 'fs/promises';
import { join } from 'path';
import { tmpdir } from 'os';

export default async (req, context) => {
  // Apenas POST
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ erro: 'Método não permitido' }), { 
      status: 405,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  try {
    const data = await req.json();
    const dataHora = new Date().toLocaleString('pt-BR');
    const timestamp = Date.now();
    const id_ficha = `ficha_${timestamp}.json`;

    // Preparar dados
    const fichaCompleta = {
      id: id_ficha,
      _data_hora: dataHora,
      _timestamp: timestamp,
      ...data
    };

    // Log (para verificar no Netlify)
    console.log('✅ Ficha recebida:', id_ficha);
    console.log('📊 Dados:', fichaCompleta);

    // Retornar sucesso
    return new Response(
      JSON.stringify({
        sucesso: true,
        mensagem: 'Ficha salva com sucesso!',
        id_ficha: id_ficha,
        data_hora: dataHora,
        dados: fichaCompleta
      }),
      {
        status: 200,
        headers: { 
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      }
    );

  } catch (error) {
    console.error('❌ Erro:', error);
    return new Response(
      JSON.stringify({
        sucesso: false,
        erro: error.message
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
};
