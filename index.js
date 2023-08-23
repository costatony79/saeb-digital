const express = require("express");
const app = express();
const notifier = require('node-notifier');

//definição do bodyParser
const bodyParser = require("body-parser");

//conexão com o banco de dados
const connection = require("./database/database");

//model do BD para receber as respostas do gabarito de LPD1
const Lpd1 = require("./database/Lpd1");

//model do BD para receber as respostas do gabarito de LPD3
const Lpd3 = require("./database/Lpd3");

//model do BD para receber as respostas do gabarito de LPD15
const Lpd15 = require("./database/Lpd15");

//model do BD para receber as respostas do gabarito de MATD18
const Matd18 = require("./database/Matd18");

//model do BD para receber as respostas do gabarito de MATD19
const Matd19 = require("./database/Matd19");

//model do BD para receber as respostas do gabarito de MATD20
const Matd20 = require("./database/Matd20");

//model do BD para receber as respostas do gabarito de MATD21
const Matd21 = require("./database/Matd21");

//model do BD para receber as respostas do gabarito de MATD22
const Matd22 = require("./database/Matd22");

//model do BD para receber as respostas do gabarito de LPD8
const Lpd8 = require("./database/Lpd8");

//model do BD para receber as respostas do gabarito de LPD10
const Lpd10 = require("./database/Lpd10");

//model do BD para receber as respostas do gabarito de LPD11
const Lpd11 = require("./database/Lpd11");

//model do BD para receber as respostas do gabarito de LPD12
const Lpd12 = require("./database/Lpd12");


//Conexão com o banco de dados
connection
    .authenticate()
    .then(() => {
        console.log("Conexão com o banco de dados realizada.");
    })
    .catch((msgErro) => {
        console.log(msgErro);
    })

//definição do view engine
app.set("view engine", "ejs");

//definição da pasta public para css, js e img
app.use(express.static("public"));

//configuração do bodyParser - serve para trabalhar com os formulários
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//rota para a página inicial
app.get("/", (req, res) => {
    res.render("index");
});

//rota para exibição da página com todos os gabaritos
app.get("/gabaritos", (req, res) => {
    var total = 0;
    var lpdescritor3, lpdescritor15, matdescritor18, matdescritor19, matdescritor20, matdescritor21,  matdescritor22, lpdescritor8, lpdescritor10, lpdescritor11, lpdescritor12;
    
    Lpd12.findAll({order: [['nome', 'ASC']]}).then(lpd12 => {
        lpdescritor12 = lpd12;
    });

    Lpd11.findAll({order: [['nome', 'ASC']]}).then(lpd11 => {
        lpdescritor11 = lpd11;
    });

    Lpd10.findAll({order: [['nome', 'ASC']]}).then(lpd10 => {
        lpdescritor10 = lpd10;
    });

    Lpd8.findAll({order: [['nome', 'ASC']]}).then(lpd8 => {
        lpdescritor8 = lpd8;
    });

    Matd22.findAll({order: [['nome', 'ASC']]}).then(matd22 => {
        matdescritor22 = matd22;
    });

    Matd21.findAll({order: [['nome', 'ASC']]}).then(matd21 => {
        matdescritor21 = matd21;
    });

    Matd20.findAll({order: [['nome', 'ASC']]}).then(matd20 => {
        matdescritor20 = matd20;
    });

    Matd19.findAll({order: [['nome', 'ASC']]}).then(matd19 => {
        matdescritor19 = matd19;
    });

    Matd18.findAll({order: [['nome', 'ASC']]}).then(matd18 => {
        matdescritor18 = matd18;
    });
    
    Lpd15.findAll({order: [['nome', 'ASC']]}).then(lpd15 => {
        lpdescritor15 = lpd15;
    });

    Lpd3.findAll({order: [['nome', 'ASC']]}).then(lpd3 => {
        lpdescritor3 = lpd3;
    });

    Lpd1.findAll({order: [['nome', 'ASC']]}).then(lpd1 => {
        res.render("gabaritos", {
            total: total,
            lpd1: lpd1 ,
            lpd3: lpdescritor3,
            lpd15: lpdescritor15,
            matd18: matdescritor18,
            matd19: matdescritor19,
            matd20: matdescritor20,
            matd21: matdescritor21,
            matd22: matdescritor22,
            lpd8: lpdescritor8,
            lpd10: lpdescritor10,
            lpd11: lpdescritor11,
            lpd12: lpdescritor12

        }); 
    });
});

// ROTAS PARA AS PÁGINAS DAS QUESTÕES
//************************************************************************************
//rota para a página das questões de LPD1
app.get("/lpd1", (req, res) => {
    res.render("lpd1");
});
//rota para a página das questões de LPD3
app.get("/lpd3", (req, res) => {
    res.render("lpd3");
});
//rota para a página das questões de LPD15
app.get("/lpd15", (req, res) => {
    res.render("lpd15");
});

//rota para a página das questões de MATD18
app.get("/matd18", (req, res) => {
    res.render("matd18");
});

//rota para a página das questões de MATD19
app.get("/matd19", (req, res) => {
    res.render("matd19");
});

//rota para a página das questões de MATD20
app.get("/matd20", (req, res) => {
    res.render("matd20");
});

//rota para a página das questões de MATD21
app.get("/matd21", (req, res) => {
    res.render("matd21");
});

//rota para a página das questões de MATD22
app.get("/matd22", (req, res) => {
    res.render("matd22");
});

//rota para a página das questões de LPD8
app.get("/lpd8", (req, res) => {
    res.render("lpd8");
});

//rota para a página das questões de LPD10
app.get("/lpd10", (req, res) => {
    res.render("lpd10");
});

//rota para a página das questões de LPD11
app.get("/lpd11", (req, res) => {
    res.render("lpd11");
});

//rota para a página das questões de LPD12
app.get("/lpd12", (req, res) => {
    res.render("lpd12");
});

// ROTAS PARA ENVIO DOS GABARITOS
//************************************************************************************ */
//rota para envio do gabarito de LPD1
app.post("/gabarito_lpd1", (req, res) => {
    var nome = req.body.name;
    var q1 = req.body.q1;
    var q2 = req.body.q2;
    var q3 = req.body.q3;
    var q4 = req.body.q4;
    var q5 = req.body.q5;
    var q6 = req.body.q6;
    var q7 = req.body.q7;
    var q8 = req.body.q8;
    var q9 = req.body.q9;
    var q10 = req.body.q10;
    
    if(nome==""||q1==null||q2==null||q3==null||q4==null||q5==null||q6==null
    ||q7==null||q8==null||q9==null||q10==null){
        notifier.notify({
            title: 'RESPONDA TODAS AS PERGUNTAS',
            message: 'Você não pode deixar nenhum campo em branco.'
          });
        res.redirect("/lpd1");
    }else {
        Lpd1.create({
            nome: nome.toUpperCase(),
            q1: q1,
            q2: q2,
            q3: q3,
            q4: q4,
            q5: q5,
            q6: q6,
            q7: q7,
            q8: q8,
            q9: q9,
            q10: q10
        }).then(() => {
            notifier.notify({
                title: 'GABARITO SALVO COM SUCESSO',
                message: 'Parabéns você preencheu tudo.'
              });
              res.render("confirmacao", {
                nome: nome,
                q1: q1,
                q2: q2,
                q3: q3,
                q4: q4,
                q5: q5,
                q6: q6,
                q7: q7,
                q8: q8,
                q9: q9,
                q10: q10
            });
        });
    }
});

//rota para envio do gabarito de LPD3
app.post("/gabarito_lpd3", (req, res) => {
    var nome = req.body.name;
    var q1 = req.body.q1;
    var q2 = req.body.q2;
    var q3 = req.body.q3;
    var q4 = req.body.q4;
    var q5 = req.body.q5;
    var q6 = req.body.q6;
    var q7 = req.body.q7;
    var q8 = req.body.q8;
    var q9 = req.body.q9;
    var q10 = req.body.q10;
    
    if(nome==""||q1==null||q2==null||q3==null||q4==null||q5==null||q6==null
    ||q7==null||q8==null||q9==null||q10==null){
        notifier.notify({
            title: 'RESPONDA TODAS AS PERGUNTAS',
            message: 'Você não pode deixar nenhum campo em branco.'
          });
        res.redirect("/lpd3");
    }else {
        Lpd3.create({
            nome: nome.toUpperCase(),
            q1: q1,
            q2: q2,
            q3: q3,
            q4: q4,
            q5: q5,
            q6: q6,
            q7: q7,
            q8: q8,
            q9: q9,
            q10: q10
        }).then(() => {
            notifier.notify({
                title: 'GABARITO SALVO COM SUCESSO',
                message: 'Parabéns você preencheu tudo.'
              });
              res.render("confirmacao", {
                nome: nome,
                q1: q1,
                q2: q2,
                q3: q3,
                q4: q4,
                q5: q5,
                q6: q6,
                q7: q7,
                q8: q8,
                q9: q9,
                q10: q10
            });
        });
    }
});

//rota para envio do gabarito de LPD15
app.post("/gabarito_lpd15", (req, res) => {
    var nome = req.body.name;
    var q1 = req.body.q1;
    var q2 = req.body.q2;
    var q3 = req.body.q3;
    var q4 = req.body.q4;
    var q5 = req.body.q5;
    var q6 = req.body.q6;
    var q7 = req.body.q7;
    var q8 = req.body.q8;
    var q9 = req.body.q9;
    var q10 = req.body.q10;
    
    if(nome==""||q1==null||q2==null||q3==null||q4==null||q5==null||q6==null
    ||q7==null||q8==null||q9==null||q10==null){
        notifier.notify({
            title: 'RESPONDA TODAS AS PERGUNTAS',
            message: 'Você não pode deixar nenhum campo em branco.'
          });
        res.redirect("/lpd15");
    }else {
        Lpd15.create({
            nome: nome.toUpperCase(),
            q1: q1,
            q2: q2,
            q3: q3,
            q4: q4,
            q5: q5,
            q6: q6,
            q7: q7,
            q8: q8,
            q9: q9,
            q10: q10
        }).then(() => {
            notifier.notify({
                title: 'GABARITO SALVO COM SUCESSO',
                message: 'Parabéns você preencheu tudo.'
              });
              res.render("confirmacao", {
                nome: nome,
                q1: q1,
                q2: q2,
                q3: q3,
                q4: q4,
                q5: q5,
                q6: q6,
                q7: q7,
                q8: q8,
                q9: q9,
                q10: q10
            });
        });
    }
});

//rota para envio do gabarito de MATD18
app.post("/gabarito_matd18", (req, res) => {
    var nome = req.body.name;
    var q1 = req.body.q1;
    var q2 = req.body.q2;
    var q3 = req.body.q3;
    var q4 = req.body.q4;
    var q5 = req.body.q5;
    var q6 = req.body.q6;
    var q7 = req.body.q7;
    var q8 = req.body.q8;
    var q9 = req.body.q9;
    var q10 = req.body.q10;
    
    if(nome==""||q1==null||q2==null||q3==null||q4==null||q5==null||q6==null
    ||q7==null||q8==null||q9==null||q10==null){
        notifier.notify({
            title: 'RESPONDA TODAS AS PERGUNTAS',
            message: 'Você não pode deixar nenhum campo em branco.'
          });
        res.redirect("/matd18");
    }else {
        Matd18.create({
            nome: nome.toUpperCase(),
            q1: q1,
            q2: q2,
            q3: q3,
            q4: q4,
            q5: q5,
            q6: q6,
            q7: q7,
            q8: q8,
            q9: q9,
            q10: q10
        }).then(() => {
            notifier.notify({
                title: 'GABARITO SALVO COM SUCESSO',
                message: 'Parabéns você preencheu tudo.'
              });
              res.render("confirmacao", {
                nome: nome,
                q1: q1,
                q2: q2,
                q3: q3,
                q4: q4,
                q5: q5,
                q6: q6,
                q7: q7,
                q8: q8,
                q9: q9,
                q10: q10
            });
        });
    }
});

//rota para envio do gabarito de MATD19
app.post("/gabarito_matd19", (req, res) => {
    var nome = req.body.name;
    var q1 = req.body.q1;
    var q2 = req.body.q2;
    var q3 = req.body.q3;
    var q4 = req.body.q4;
    var q5 = req.body.q5;
    var q6 = req.body.q6;
    var q7 = req.body.q7;
    var q8 = req.body.q8;
    var q9 = req.body.q9;
    var q10 = req.body.q10;
    
    if(nome==""||q1==null||q2==null||q3==null||q4==null||q5==null||q6==null
    ||q7==null||q8==null||q9==null||q10==null){
        notifier.notify({
            title: 'RESPONDA TODAS AS PERGUNTAS',
            message: 'Você não pode deixar nenhum campo em branco.'
          });
        res.redirect("/matd19");
    }else {
        Matd19.create({
            nome: nome.toUpperCase(),
            q1: q1,
            q2: q2,
            q3: q3,
            q4: q4,
            q5: q5,
            q6: q6,
            q7: q7,
            q8: q8,
            q9: q9,
            q10: q10
        }).then(() => {
            notifier.notify({
                title: 'GABARITO SALVO COM SUCESSO',
                message: 'Parabéns você preencheu tudo.'
              });
              res.render("confirmacao", {
                nome: nome,
                q1: q1,
                q2: q2,
                q3: q3,
                q4: q4,
                q5: q5,
                q6: q6,
                q7: q7,
                q8: q8,
                q9: q9,
                q10: q10
            });
        });
    }
});

//rota para envio do gabarito de MATD20
app.post("/gabarito_matd20", (req, res) => {
    var nome = req.body.name;
    var q1 = req.body.q1;
    var q2 = req.body.q2;
    var q3 = req.body.q3;
    var q4 = req.body.q4;
    var q5 = req.body.q5;
    var q6 = req.body.q6;
    var q7 = req.body.q7;
    var q8 = req.body.q8;
    var q9 = req.body.q9;
    var q10 = req.body.q10;
    
    if(nome==""||q1==null||q2==null||q3==null||q4==null||q5==null||q6==null
    ||q7==null||q8==null||q9==null||q10==null){
        notifier.notify({
            title: 'RESPONDA TODAS AS PERGUNTAS',
            message: 'Você não pode deixar nenhum campo em branco.'
          });
        res.redirect("/matd20");
    }else {
        Matd20.create({
            nome: nome.toUpperCase(),
            q1: q1,
            q2: q2,
            q3: q3,
            q4: q4,
            q5: q5,
            q6: q6,
            q7: q7,
            q8: q8,
            q9: q9,
            q10: q10
        }).then(() => {
            notifier.notify({
                title: 'GABARITO SALVO COM SUCESSO',
                message: 'Parabéns você preencheu tudo.'
              });
              res.render("confirmacao", {
                nome: nome,
                q1: q1,
                q2: q2,
                q3: q3,
                q4: q4,
                q5: q5,
                q6: q6,
                q7: q7,
                q8: q8,
                q9: q9,
                q10: q10
            });
        });
    }
});

//rota para envio do gabarito de MATD21
app.post("/gabarito_matd21", (req, res) => {
    var nome = req.body.name;
    var q1 = req.body.q1;
    var q2 = req.body.q2;
    var q3 = req.body.q3;
    var q4 = req.body.q4;
    var q5 = req.body.q5;
    var q6 = req.body.q6;
    var q7 = req.body.q7;
    var q8 = req.body.q8;
    var q9 = req.body.q9;
    var q10 = req.body.q10;
    
    if(nome==""||q1==null||q2==null||q3==null||q4==null||q5==null||q6==null
    ||q7==null||q8==null||q9==null||q10==null){
        notifier.notify({
            title: 'RESPONDA TODAS AS PERGUNTAS',
            message: 'Você não pode deixar nenhum campo em branco.'
          });
        res.redirect("/matd21");
    }else {
        Matd21.create({
            nome: nome.toUpperCase(),
            q1: q1,
            q2: q2,
            q3: q3,
            q4: q4,
            q5: q5,
            q6: q6,
            q7: q7,
            q8: q8,
            q9: q9,
            q10: q10
        }).then(() => {
            notifier.notify({
                title: 'GABARITO SALVO COM SUCESSO',
                message: 'Parabéns você preencheu tudo.'
              });
              res.render("confirmacao", {
                nome: nome,
                q1: q1,
                q2: q2,
                q3: q3,
                q4: q4,
                q5: q5,
                q6: q6,
                q7: q7,
                q8: q8,
                q9: q9,
                q10: q10
            });
        });
    }
});

//rota para envio do gabarito de MATD21
app.post("/gabarito_matd22", (req, res) => {
    var nome = req.body.name;
    var q1 = req.body.q1;
    var q2 = req.body.q2;
    var q3 = req.body.q3;
    var q4 = req.body.q4;
    var q5 = req.body.q5;
    var q6 = req.body.q6;
    var q7 = req.body.q7;
    var q8 = req.body.q8;
    var q9 = req.body.q9;
    var q10 = req.body.q10;
    
    if(nome==""||q1==null||q2==null||q3==null||q4==null||q5==null||q6==null
    ||q7==null||q8==null||q9==null||q10==null){
        notifier.notify({
            title: 'RESPONDA TODAS AS PERGUNTAS',
            message: 'Você não pode deixar nenhum campo em branco.'
          });
        res.redirect("/matd22");
    }else {
        Matd22.create({
            nome: nome.toUpperCase(),
            q1: q1,
            q2: q2,
            q3: q3,
            q4: q4,
            q5: q5,
            q6: q6,
            q7: q7,
            q8: q8,
            q9: q9,
            q10: q10
        }).then(() => {
            notifier.notify({
                title: 'GABARITO SALVO COM SUCESSO',
                message: 'Parabéns você preencheu tudo.'
              });
              res.render("confirmacao", {
                nome: nome,
                q1: q1,
                q2: q2,
                q3: q3,
                q4: q4,
                q5: q5,
                q6: q6,
                q7: q7,
                q8: q8,
                q9: q9,
                q10: q10
            });
        });
    }
});

//rota para envio do gabarito de LPD8
app.post("/gabarito_lpd8", (req, res) => {
    var nome = req.body.name;
    var q1 = req.body.q1;
    var q2 = req.body.q2;
    var q3 = req.body.q3;
    var q4 = req.body.q4;
    var q5 = req.body.q5;
    var q6 = req.body.q6;
    var q7 = req.body.q7;
    var q8 = req.body.q8;
    var q9 = req.body.q9;
    var q10 = req.body.q10;
    
    if(nome==""||q1==null||q2==null||q3==null||q4==null||q5==null||q6==null
    ||q7==null||q8==null||q9==null||q10==null){
        notifier.notify({
            title: 'RESPONDA TODAS AS PERGUNTAS',
            message: 'Você não pode deixar nenhum campo em branco.'
          });
        res.redirect("/lpd8");
    }else {
        Lpd8.create({
            nome: nome.toUpperCase(),
            q1: q1,
            q2: q2,
            q3: q3,
            q4: q4,
            q5: q5,
            q6: q6,
            q7: q7,
            q8: q8,
            q9: q9,
            q10: q10
        }).then(() => {
            notifier.notify({
                title: 'GABARITO SALVO COM SUCESSO',
                message: 'Parabéns você preencheu tudo.'
              });
              res.render("confirmacao", {
                nome: nome,
                q1: q1,
                q2: q2,
                q3: q3,
                q4: q4,
                q5: q5,
                q6: q6,
                q7: q7,
                q8: q8,
                q9: q9,
                q10: q10
            });
        });
    }
});

//rota para envio do gabarito de LPD10
app.post("/gabarito_lpd10", (req, res) => {
    var nome = req.body.name;
    var q1 = req.body.q1;
    var q2 = req.body.q2;
    var q3 = req.body.q3;
    var q4 = req.body.q4;
    var q5 = req.body.q5;
    var q6 = req.body.q6;
    var q7 = req.body.q7;
    var q8 = req.body.q8;
    var q9 = req.body.q9;
    var q10 = req.body.q10;
    
    if(nome==""||q1==null||q2==null||q3==null||q4==null||q5==null||q6==null
    ||q7==null||q8==null||q9==null||q10==null){
        notifier.notify({
            title: 'RESPONDA TODAS AS PERGUNTAS',
            message: 'Você não pode deixar nenhum campo em branco.'
          });
        res.redirect("/lpd10");
    }else {
        Lpd10.create({
            nome: nome.toUpperCase(),
            q1: q1,
            q2: q2,
            q3: q3,
            q4: q4,
            q5: q5,
            q6: q6,
            q7: q7,
            q8: q8,
            q9: q9,
            q10: q10
        }).then(() => {
            notifier.notify({
                title: 'GABARITO SALVO COM SUCESSO',
                message: 'Parabéns você preencheu tudo.'
              });
              res.render("confirmacao", {
                nome: nome,
                q1: q1,
                q2: q2,
                q3: q3,
                q4: q4,
                q5: q5,
                q6: q6,
                q7: q7,
                q8: q8,
                q9: q9,
                q10: q10
            });
        });
    }
});
//rota para envio do gabarito de LPD11
app.post("/gabarito_lpd11", (req, res) => {
    var nome = req.body.name;
    var q1 = req.body.q1;
    var q2 = req.body.q2;
    var q3 = req.body.q3;
    var q4 = req.body.q4;
    var q5 = req.body.q5;
    var q6 = req.body.q6;
    var q7 = req.body.q7;
    var q8 = req.body.q8;
    var q9 = req.body.q9;
    var q10 = req.body.q10;
    
    if(nome==""||q1==null||q2==null||q3==null||q4==null||q5==null||q6==null
    ||q7==null||q8==null||q9==null||q10==null){
        notifier.notify({
            title: 'RESPONDA TODAS AS PERGUNTAS',
            message: 'Você não pode deixar nenhum campo em branco.'
          });
        res.redirect("/lpd11");
    }else {
        Lpd11.create({
            nome: nome.toUpperCase(),
            q1: q1,
            q2: q2,
            q3: q3,
            q4: q4,
            q5: q5,
            q6: q6,
            q7: q7,
            q8: q8,
            q9: q9,
            q10: q10
        }).then(() => {
            notifier.notify({
                title: 'GABARITO SALVO COM SUCESSO',
                message: 'Parabéns você preencheu tudo.'
              });
              res.render("confirmacao", {
                nome: nome,
                q1: q1,
                q2: q2,
                q3: q3,
                q4: q4,
                q5: q5,
                q6: q6,
                q7: q7,
                q8: q8,
                q9: q9,
                q10: q10
            });
        });
    }
});
//rota para envio do gabarito de LPD12
app.post("/gabarito_lpd12", (req, res) => {
    var nome = req.body.name;
    var q1 = req.body.q1;
    var q2 = req.body.q2;
    var q3 = req.body.q3;
    var q4 = req.body.q4;
    var q5 = req.body.q5;
    var q6 = req.body.q6;
    var q7 = req.body.q7;
    var q8 = req.body.q8;
    var q9 = req.body.q9;
    var q10 = req.body.q10;
    
    if(nome==""||q1==null||q2==null||q3==null||q4==null||q5==null||q6==null
    ||q7==null||q8==null||q9==null||q10==null){
        notifier.notify({
            title: 'RESPONDA TODAS AS PERGUNTAS',
            message: 'Você não pode deixar nenhum campo em branco.'
          });
        res.redirect("/lpd12");
    }else {
        Lpd12.create({
            nome: nome.toUpperCase(),
            q1: q1,
            q2: q2,
            q3: q3,
            q4: q4,
            q5: q5,
            q6: q6,
            q7: q7,
            q8: q8,
            q9: q9,
            q10: q10
        }).then(() => {
            notifier.notify({
                title: 'GABARITO SALVO COM SUCESSO',
                message: 'Parabéns você preencheu tudo.'
              });
              res.render("confirmacao", {
                nome: nome,
                q1: q1,
                q2: q2,
                q3: q3,
                q4: q4,
                q5: q5,
                q6: q6,
                q7: q7,
                q8: q8,
                q9: q9,
                q10: q10
            });
        });
    }
});



// ROTAS PARA APAGAR REGISTROS NO BANCO DE DADOS
//*************************************************************************************** */

//rota para apagar um registro da tabela de LPD1
app.post("/deletarlpd1", (req, res) => {
    var id = req.body.id;
    if(id != undefined){
        Lpd1.destroy({
            where: {
                id: id
            }
            
        }).then(()=>{
            res.redirect("/gabaritos");
        });
    }
    
    });

//rota para apagar um registro da tabela de LPD3
app.post("/deletarlpd3", (req, res) => {
    var id = req.body.id;
    if(id != undefined){
        Lpd3.destroy({
            where: {
                id: id
            }
            
        }).then(()=>{
            res.redirect("/gabaritos");
        });
    }
    
    });

//rota para apagar um registro da tabela de LPD15
app.post("/deletarlpd15", (req, res) => {
    var id = req.body.id;
    if(id != undefined){
        Lpd15.destroy({
            where: {
                id: id
            }
            
        }).then(()=>{
            res.redirect("/gabaritos");
        });
    }
    
    });

//rota para apagar um registro da tabela de MATD18
app.post("/deletarmatd18", (req, res) => {
    var id = req.body.id;
    if(id != undefined){
        Matd18.destroy({
            where: {
                id: id
            }
            
        }).then(()=>{
            res.redirect("/gabaritos");
        });
    }
    
    }); 

//rota para apagar um registro da tabela de MATD19
app.post("/deletarmatd19", (req, res) => {
    var id = req.body.id;
    if(id != undefined){
        Matd19.destroy({
            where: {
                id: id
            }
            
        }).then(()=>{
            res.redirect("/gabaritos");
        });
    }
    
    }); 
//rota para apagar um registro da tabela de MATD20
app.post("/deletarmatd20", (req, res) => {
    var id = req.body.id;
    if(id != undefined){
        Matd20.destroy({
            where: {
                id: id
            }
            
        }).then(()=>{
            res.redirect("/gabaritos");
        });
    }
    
    }); 
//rota para apagar um registro da tabela de MATD21
app.post("/deletarmatd21", (req, res) => {
    var id = req.body.id;
    if(id != undefined){
        Matd21.destroy({
            where: {
                id: id
            }
            
        }).then(()=>{
            res.redirect("/gabaritos");
        });
    }
    
    }); 

    //rota para apagar um registro da tabela de MATD22
app.post("/deletarmatd22", (req, res) => {
    var id = req.body.id;
    if(id != undefined){
        Matd22.destroy({
            where: {
                id: id
            }
            
        }).then(()=>{
            res.redirect("/gabaritos");
        });
    }
    
    }); 
    
//rota para apagar um registro da tabela de LPD8
app.post("/deletarlpd8", (req, res) => {
    var id = req.body.id;
    if(id != undefined){
        Lpd8.destroy({
            where: {
                id: id
            }
            
        }).then(()=>{
            res.redirect("/gabaritos");
        });
    }
    
    });

    //rota para apagar um registro da tabela de LPD10
app.post("/deletarlpd10", (req, res) => {
    var id = req.body.id;
    if(id != undefined){
        Lpd10.destroy({
            where: {
                id: id
            }
            
        }).then(()=>{
            res.redirect("/gabaritos");
        });
    }
    
    });

        //rota para apagar um registro da tabela de LPD10
app.post("/deletarlpd11", (req, res) => {
    var id = req.body.id;
    if(id != undefined){
        Lpd11.destroy({
            where: {
                id: id
            }
            
        }).then(()=>{
            res.redirect("/gabaritos");
        });
    }
    
    });

            //rota para apagar um registro da tabela de LPD10
app.post("/deletarlpd12", (req, res) => {
    var id = req.body.id;
    if(id != undefined){
        Lpd12.destroy({
            where: {
                id: id
            }
            
        }).then(()=>{
            res.redirect("/gabaritos");
        });
    }
    
    });

//servidor
app.listen(1519, ()=>{
    console.log("SAEB DIGITAL SENDO EXECUTADO NA PORTA 1519");
});
