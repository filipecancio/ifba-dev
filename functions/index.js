const functions = require("firebase-functions");
const admin = require('firebase-admin');
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors({ origin: true }));

app.get('/', async (req, res) => {
    const snapshot = await admin.database().ref('/phones').get();
        const snap = snapshot.val();
        res.send(snap);
});


admin.initializeApp();

exports.helloWorld = functions.https.onRequest((request, response) => {
    functions.logger.info("Hello logs!", { structuredData: true });
    response.send("Hello from Firebase!");
});

exports.getContacts = functions.https.onRequest(app);

exports.getCurses = functions.https.onRequest(async (req, res) => {
    const snapshot = await admin.database().ref('/phones').get();
    const snap = snapshot.val();
    const curses = Object.keys(snap);
    res.send(curses);
});

exports.getFones = functions.https.onRequest(async (req, res) => {
    const reference = `/phones/${req.query.curse}`
    const snapshot = await admin.database().ref(reference).get();
    const snap = snapshot.val();
    const value = snap.map((element, index) => {
        if (element.name == req.query.name) {
            return [element, index];
        }
    })

    console.log(value);

    const info = value.filter(e => e != null);
    res.send(info[0]);
});

exports.updateCode = functions.https.onRequest(async (req, res) => {
    const curse = req.query.curse;
    const name = req.query.name;
    const code = req.query.code;
    const reference = `/phones/${curse}`
    const snapshot = await admin.database().ref(reference).get();
    const snap = snapshot.val();

    const temp = snap.map((element, i) => {
        if (element.name == req.query.name) {
            return i;
        }
    });
    const index = temp.filter(e => e != null)[0]

    if (index != null) {
        const newReference = `/phones/${curse}/${index}/code`
        const newSnapshot = await admin.database().ref(newReference).set(code);
        //const newSnap = newSnapshot.val();
        res.send(`Qr code de ${name} alterado com sucesso!`);
    } else {
        res.send(`O valor não foi alterado pois ${name} não existe. Tente novamente`);
    }
});

exports.setQrcode = functions.database.ref('phones/{curse}/{name}').onCreate((snapshot, context) => {
    const original = snapshot.val();
    const curse = context.params.curse;
    const name = context.params.name;
    const qrcodeurl = context.params.qrcodeurl;

    const value = original.map((element, index) => {
        if (element.name == req.query.name) {
            return index;
        }
    });

    const info = value.filter(e => e != null);
    console.log(info);

    if (info <= 0) {
        return snapshot.ref.parent.child(`${curse}/${info}/qrcodeurl`).set(qrcodeurl);
    } else {
        return `Nenhuma referência de ${name} foi encontrada. Tente novamente.`;
    }



    return info; //snapshot.ref.parent.child('uppercase').set(uppercase);

})
