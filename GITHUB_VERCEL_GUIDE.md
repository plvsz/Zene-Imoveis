# 🎯 RESUMO: Como Usar no GitHub Pages + Vercel

## ❌ GitHub Pages NÃO funciona (PHP não é suportado)
## ✅ Vercel FUNCIONA (Node.js suportado)

---

## 📊 COMPARAÇÃO DE OPÇÕES

| Opção | Custo | Facilidade | PHP | Banco de Dados | Recomendação |
|-------|-------|-----------|-----|---|---|
| **GitHub Pages** | Grátis | ⭐⭐⭐⭐⭐ | ❌ Não | ❌ Não | ❌ Não recomendado |
| **Vercel** | Grátis | ⭐⭐⭐⭐ | ✅ Sim (Node) | ✅ Sim | ✅ **RECOMENDADO** |
| **Netlify** | Grátis | ⭐⭐⭐⭐ | ✅ Sim (Node) | ✅ Sim | ✅ Alternativa boa |
| **Heroku** | $7/mês | ⭐⭐⭐ | ✅ Sim | ✅ Sim | ⚠️ Pago |
| **Hostinger** | $2.99/mês | ⭐⭐⭐ | ✅ Sim | ✅ Sim | ⚠️ Pago |

---

## 🚀 RÁPIDO: 3 PASSOS PARA COLOCAR NO AR

### Passo 1: Git + GitHub
```bash
git init
git add .
git commit -m "Initial"
# Criar repo em github.com/new
git remote add origin https://github.com/SEU_USUARIO/zene-imoveis.git
git push -u origin main
```

### Passo 2: Vercel Import
1. Acesse https://vercel.com/new
2. Clique "Import Git Repository"
3. Selecione `zene-imoveis`
4. Clique "Deploy"

### Passo 3: Pronto! 🎉
- Site online em: `https://zene-imoveis.vercel.app`
- Atualiza automaticamente quando você faz push

---

## 📁 ARQUIVOS CRIADOS

```
✅ api/save-ficha.js          # Backend Node.js (substitui PHP)
✅ vercel.json                # Configuração Vercel
✅ package.json               # Dependências
✅ .gitignore                 # Arquivos ignorados
✅ README.md                  # Documentação
✅ DEPLOY.md                  # Guia passo-a-passo
✅ index.html                 # ATUALIZADO (aponta para /api/save-ficha)
```

---

## 🔄 FLUXO APÓS DEPLOY

1. **Usuário preenche formulário**
2. **Clica "Salvar ficha"**
3. **JavaScript valida dados**
4. **Envia para `/api/save-ficha` (Vercel)**
5. **Backend salva em arquivo JSON**
6. **Resposta JSON: "Sucesso!"**
7. **Formulário é limpo**

---

## 💡 ESTRUTURA VERCEL

```
Seu Projeto no Vercel
├── Frontend
│   ├── index.html (formulário)
│   ├── styles.css (estilos)
│   └── JavaScript (validação)
└── Backend (API Routes)
    └── api/save-ficha.js (salva dados)
```

---

## ✨ BÔNUS: Se quiser banco de dados real

Integre **Supabase** (PostgreSQL grátis):

```javascript
// api/save-ficha.js
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
)

// INSERT INTO fichas...
```

Custa: **Grátis** até 500MB

---

## ❓ DÚVIDAS?

- **Vercel não funciona?** → Veja logs em https://vercel.com/dashboard
- **Arquivo não salva?** → Verifique erro no console (F12)
- **Quer mais recursos?** → Posso adicionar banco de dados depois

---

## 🎯 PRÓXIMO PASSO

Envie os arquivos para GitHub e acesse:
```
https://github.com/seu-usuario/zene-imoveis
```

Depois clique em "Deploy to Vercel" no README!
