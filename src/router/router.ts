import { getOwnInfo, listUsers, getUserInfo, listSquads, getSquadInfo,
        registerUser, registerSquad, insertUserSquad, login,
        updateUser, updateSquad,
        deleteUser, deleteSquad, removeUserFromSquad  
} from "../controllers";

import express from "express";
const router = express();

//GET
router.get("/users/me", getOwnInfo);
router.get("/users/", listUsers);
router.get("/users/:user_id", getUserInfo);
router.get("/teams/", listSquads);
router.get("/teams/:team", getSquadInfo);

//POST
router.post("/users/", registerUser);
router.post("/team/", registerSquad);
router.post("/team/:team_id/member/:user_id", insertUserSquad);
router.post("/login/",login)

//PATCH
router.patch("/users/:user_id", updateUser);
router.patch("/team/:team_id", updateSquad);

//DELETE
router.delete("/users/:user_id", deleteUser);
router.delete("/team/:team_id", deleteSquad);
router.delete("/team/:team_id/member/:user_id", removeUserFromSquad);

// GET “/users/me” - Ver seu próprio usuário (Todos)
// GET “/users/” - Ver todos os usuários (Admin)
// GET “/users/:user_id” - Ver determinado usuário (Admin, Líder)
// GET “/teams/” - Ver todas as equipes (Admin)
// GET “/teams/:team” - Ver determinada equipe (Admin, Líderes, Funcionário)
// POST “/users/” - Criar um novo usuário (Todos e não autenticado)
// POST “/team/” - Criar uma nova equipe (Admin)
// PATCH “/users/:user_id” - Atualizar usuário (Somente o próprio usuário)
// PATCH “/team/:team_id” - Atualizar equipe (Admin, Líder da equipe)
// POST “/team/:team_id/member/:user_id” - Adicionar membro na equipe (Admin, Líder da equipe)
// DELETE “/team/:team_id/member/:user_id” - Retirar membro da equipe (Admin, Líder da equipe)
// DELETE “/users/:user_id” - Deletar usuário (Admin)
// DELETE “/team/:team_id” - Deletar equipe (Admin)

module.exports = router;


// {
//     "username": "jose_tonhao",
//     "email": "jose@gmail.com",
//     "first_name": "Jose",
//     "last_name": "Ferreira",
//     "password": "f123456"
// }
