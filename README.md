# 🏠 Zene Imóveis - Ficha de Captação

Formulário de captação de imóveis completo e funcional com validação, cálculo automático e salvamento em nuvem.

## ✨ Features

- ✅ Validação completa de CPF/CNPJ/Email
- ✅ Cálculo automático de comissões
- ✅ Auto-preenchimento de CEP (ViaCEP)
- ✅ Salvamento em localStorage (rascunho)
- ✅ Upload de arquivos (Cemig/Copasa)
- ✅ Responsive design (mobile-friendly)
- ✅ Backend em Node.js (Vercel-ready)

## 🚀 Deploy no Vercel

### Pré-requisitos
- Conta GitHub
- Conta Vercel (vercel.com)

### Passos:

1. **Fazer upload para GitHub:**
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/zene-imoveis.git
git push -u origin main
```

2. **Deploy no Vercel:**
   - Ir para https://vercel.com/new
   - Conectar repositório GitHub
   - Clicar "Import" e "Deploy"
   - Pronto! 🎉

3. **URL do site:**
   - `https://seu-projeto.vercel.app`

## 📁 Estrutura do Projeto

```
.
├── index.html              # Formulário principal
├── styles.css              # Estilos responsivos
├── api/
│   └── save-ficha.js       # Endpoint para salvar fichas
├── package.json            # Dependências Node.js
├── vercel.json             # Configuração Vercel
└── README.md               # Este arquivo
```

## 💡 Como Usar

1. Abra https://seu-projeto.vercel.app
2. Preencha os dados do proprietário e imóvel
3. Clique "Salvar ficha"
4. Dados são salvos automaticamente

## 📊 Dados Salvos

Cada ficha é salva em JSON com:
- ID único (timestamp)
- Data/hora
- Todos os campos preenchidos
- Metadados

## 🔗 API Endpoint

**POST `/api/save-ficha`**

Request:
```json
{
  "owner_name": "João Silva",
  "owner_cpf_cnpj": "123.456.789-10",
  "prop_address": "Rua das Flores, 123",
  "valor_imovel": "R$ 500.000,00"
}
```

Response:
```json
{
  "sucesso": true,
  "id_ficha": "ficha_1699699200000.json",
  "data_hora": "11/11/2025 14:30:45"
}
```

## ⚙️ Variáveis de Ambiente (Opcional)

Crie um arquivo `.env.local` para testes locais:
```
NODE_ENV=development
```

## 📧 Suporte

Para dúvidas ou problemas, abra uma issue no GitHub.

## 📄 Licença

MIT - Use livremente em sua empresa
