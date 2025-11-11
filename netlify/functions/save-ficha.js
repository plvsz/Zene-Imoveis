exports.handler = async (event, context) => {
  // Apenas POST
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ erro: 'Método não permitido' })
    };
  }

  try {
    const data = JSON.parse(event.body);
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
    return {
      statusCode: 200,
      headers: { 
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({
        sucesso: true,
        mensagem: 'Ficha salva com sucesso!',
        id_ficha: id_ficha,
        data_hora: dataHora,
        dados: fichaCompleta
      })
    };

  } catch (error) {
    console.error('❌ Erro:', error);
    return {
      statusCode: 500,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        sucesso: false,
        erro: error.message
      })
    };
  }
};
