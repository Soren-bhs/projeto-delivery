# 🚀 Guia de Sobrevivência Git - Projeto Delivery

Este guia foi criado para salvar minha pele (e meus códigos) durante o desenvolvimento.

## 🛠️ Fluxo Padrão (O dia a dia)
Sempre que terminar uma pequena tarefa, siga esta ordem:

1. **Verificar mudanças:** `git status`
2. **Adicionar arquivos:**
   - Tudo: `git add .`
   - Específico: `git add pasta/arquivo.txt`
3. **Criar o Save (Commit):**
   `git commit -m "feat: descrição curta da tarefa"`
4. **Enviar para o GitHub:**
   `git push origin main`

---

## 🚩 Padrões de Mensagem (Para o gráfico ficar verde!)
- `feat:` Novas funcionalidades (ex: cadastro de produto)
- `fix:` Correção de bugs ou erros
- `style:` Mudanças visuais e CSS
- `docs:` Alterações em guias e documentação

---

## 🌳 Dicas do Neo para a "Floresta Verde"
- Faça commits pequenos e frequentes.
- Não espere o dia acabar para dar o `push`.
- Use o `git log --oneline` para ver seu progresso.