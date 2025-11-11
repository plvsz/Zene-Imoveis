# 📖 GUIA DE DEPLOY - Passo a Passo

## ✅ Pré-requisitos
- [Git](https://git-scm.com/download/win) instalado
- Conta GitHub (gratuita em github.com)
- Conta Vercel (gratuita em vercel.com)

---

## 📝 PASSO 1: Preparar repositório Git local

```powershell
# 1. Abra PowerShell na pasta do projeto
cd "C:\Users\Dell\Desktop\zene imoveis"

# 2. Inicialize Git
git init

# 3. Adicione todos os arquivos
git add .

# 4. Faça commit
git commit -m "Initial commit: Zene Imóveis - Ficha de Captação"
```

---

## 🌐 PASSO 2: Criar repositório no GitHub

1. **Acesse:** https://github.com/new
2. **Preencha:**
   - Repository name: `zene-imoveis` (ou outro nome)
   - Description: "Ficha de Captação de Imóveis"
   - Visibility: **Public** (para usar com Vercel grátis)
3. **Clique:** "Create repository"

---

## 🔗 PASSO 3: Conectar repositório local ao GitHub

```powershell
# Copie o comando do GitHub e cole no PowerShell
# Exemplo (SUBSTITUA SEU_USUARIO pelo seu login GitHub):

git branch -M main
git remote add origin https://github.com/SEU_USUARIO/zene-imoveis.git
git push -u origin main

# Digite seu email e token do GitHub quando solicitado
```

---

## 🚀 PASSO 4: Deploy no Vercel

1. **Acesse:** https://vercel.com
2. **Clique:** "Sign Up" → "Continue with GitHub"
3. **Authorize** Vercel no GitHub
4. **Clique:** "Add New..." → "Project"
5. **Selecione:** seu repositório `zene-imoveis`
6. **Configurações:**
   - Framework Preset: **Other**
   - Root Directory: `.` (raiz)
   - Build Command: deixe vazio
7. **Clique:** "Deploy"

---

## ⏳ PASSO 5: Aguarde o Deploy

A Vercel vai:
- ✅ Clonar seu repositório
- ✅ Instalar dependências (`npm install`)
- ✅ Fazer build
- ✅ Deploy automático

**Após 2-3 minutos, seu site estará live!**

---

## 🎉 PASSO 6: Acessar o site

Acesse a URL fornecida pela Vercel:
```
https://zene-imoveis-XXXXX.vercel.app
```

---

## 🔄 Atualizar o site

Sempre que fazer mudanças:

```powershell
# 1. Adicione mudanças
git add .

# 2. Faça commit
git commit -m "Descrição da mudança"

# 3. Envie para GitHub
git push

# 4. Vercel automaticamente faz deploy!
# Você verá o status em https://vercel.com/dashboard
```

---

## 🛠️ Testar Localmente (Opcional)

```powershell
# Abra Live Server no VS Code
# Extensão: "Live Server" (Ritwick Dey)
# Clique direito em index.html → "Open with Live Server"

# Ou com Python:
python -m http.server 8000

# Depois acesse: http://localhost:8000
```

---

## 🐛 Solução de Problemas

### ❌ "Erro: origin already exists"
```powershell
git remote remove origin
git remote add origin https://github.com/SEU_USUARIO/zene-imoveis.git
```

### ❌ "Erro: Permission denied (publickey)"
Gere uma chave SSH no GitHub:
1. https://github.com/settings/ssh
2. Crie nova SSH key
3. Adicione ao seu computador

### ❌ "API não está respondendo"
- Verifique em https://vercel.com/dashboard
- Procure por erros nos "Deployments"
- Clique no deployment e veja os logs

---

## 📞 Pronto!

Seu formulário está online e pronto para a empresa usar! 🎉

**URL:** `https://zene-imoveis-XXXXX.vercel.app`
