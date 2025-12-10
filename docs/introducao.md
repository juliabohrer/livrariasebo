> **Equipe desenvolvedora: Ana Laura Quinot, Gabriéli Barcelos, Heloisa Ribeiro e Julia Bohrer**

---

# Introdução ao Sebo Eclipse

### Minimundo

O Sistema Sophia é um sistema de gestão desenvolvido para organizar as atividades administrativas de um sebo de livros.
No sistema existem dois tipos principais de atores:

- Administradores (admins): responsáveis pela administração do sistema.
- Usuários comuns: pessoas cadastradas pelo sebo que poderão realizar compras e vendas de livros e participar de atividades culturais.

Cada usuário possui um cadastro feito por um administrador, contendo informações como nome, endereço, telefone, e-mail e um identificador único.
O sebo mantém um acervo de livros cadastrados pelos administradores, com dados como título, autor(es), gênero, editora, estado de conservação e preço de venda ou compra.
Os usuários podem consultar os livros disponíveis para compra pelo sistema.
Caso o livro desejado já tenha sido vendido, o sistema permite apenas verificar essa informação, sem opção de reserva.
O sistema envia notificações automáticas para avisar sobre confirmação de compra ou venda, novidades no acervo e eventos culturais.
Também é possível gerenciar eventos culturais (como palestras, oficinas, feiras literárias e lançamentos de livros), que podem ser cadastrados pelos administradores.
Os usuários recebem informações desses eventos diretamente pelo sistema.
O sistema pode emitir relatórios financeiros (entradas e saídas, receitas de vendas, gastos com compras de livros) e relatórios de movimentação do acervo (livros mais vendidos, mais procurados, recém-adicionados, etc.), além de relatórios de participação em eventos.
O sistema disponibiliza um portal para os usuários, onde eles podem:

- Consultar seus dados pessoais;
- Verificar livros disponíveis, vendidos ou à venda;
- Acompanhar o histórico de compras e vendas;
- Verificar eventos organizados pelo sebo.

Os administradores, por sua vez, possuem ferramentas para:

- Gerenciar usuários cadastrados;
- Cadastrar e organizar o acervo de livros;
- Controlar consultas, compras e vendas;
- Emitir relatórios financeiros e de movimentação do acervo;
- Gerenciar eventos culturais.

O Sistema Sophia busca, assim, otimizar a gestão do sebo, melhorar a experiência dos clientes e tornar a administração mais eficiente, transparente e organizada.

---

## 1. Objetivo

O Minimundo do Projeto "Sebo Digital" é o ambiente de compra, venda e gestão de livros usados (sebo) por meio de uma plataforma web. Este sistema conecta entusiastas de leitura e vendedores de livros usados. Os usuários podem buscar, visualizar e comprar livros, além de acompanhar seus pedidos. A administração (administradores) tem total controle sobre o catálogo, estoque, gestão de usuários e processamento de transações e pedidos. O foco está na facilidade de uso, na busca eficiente e na confiabilidade do catálogo de itens únicos.

### Objetivos Específicos

| ID     | Objetivo                 | Descrição                                                                                                               | Métrica                                                                                 |
| :----- | :----------------------- | :---------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------- |
| **O1** | Aumento do Alcance       | Expandir o alcance geográfico do sebo, permitindo a venda de livros para clientes em todo o território nacional.        | Até o final do primeiro semestre pós-lançamento.                                        |
| **O2** | Otimização do Inventário | Digitalizar e centralizar 100% do catálogo de livros do sebo na plataforma.                                             | Em até 30 dias após o lançamento.                                                       |
| **O3** | Melhoria da Experiência  | Reduzir o tempo médio de conclusão de uma compra (do clique em "Adicionar ao Carrinho" até a finalização do pagamento). | Para menos de 90 segundos.                                                              |
| **O4** | Eficiência Operacional   | Automatizar o gerenciamento de estoque e o processamento de pedidos.                                                    | Reduzir em 40% a intervenção manual do administrador no ciclo de vida de uma transação. |

---

## 2. Escopo

Este projeto visa desenvolver uma **Plataforma de E-commerce para Livros Usados (Sebo Digital)**, que terá como finalidade digitalizar e otimizar o processo de compra e venda de livros usados, oferecendo um catálogo robusto e ferramentas de gestão.

O sistema se destina a:

- **Usuários Comuns (UC):** Compradores/leitores.
- **Administradores (ADM):** Responsáveis pela gestão do Sebo.

---

## 3. Definições, Acrônimos e Abreviações

| Termo    | Definição/Abreviação                                                |
| :------- | :------------------------------------------------------------------ |
| **SD**   | Sebo Digital (Nome da Plataforma).                                  |
| **UC**   | Usuário Comum (Perfil do cliente que compra livros).                |
| **ADM**  | Administrador (Perfil com acesso total ao painel de gestão).        |
| **CRUD** | Create, Read, Update, Delete (Operações básicas de banco de dados). |

---

## 4. Público-alvo

Este documento destina-se a todas as partes interessadas envolvidas no desenvolvimento, implementação e uso do software Sebo Digital. Isso inclui:

- **Equipe de Desenvolvimento:** Membros responsáveis pela codificação e arquitetura.
- **Gerentes de Projeto:** Responsáveis pelo planejamento e cronograma.
- **Clientes:** Donos do sebo e stakeholders principais.
- **Usuários Finais:** Compradores e leitores.
- **Outras Partes Interessadas Relevantes**.

---
