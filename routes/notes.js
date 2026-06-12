const _crypto = require('crypto');
globalThis.crypto = _crypto;
globalThis.crypto.getRandomValues = (arr) => _crypto.randomFillSync(arr);

var express = require('express');
var router = express.Router();
// 接続情報を設定
const { MongoClient } = require("mongodb");
const uri = "***i";
const client = new MongoClient(uri);
router.get('/', async (req, res) => {
// データベース、コレクションを指定
const database = client.db('notes');
const notes = database.collection('notes');
// idが１のドキュメントを取得
const query = {};
const note = await notes.findOne(query);
res.json(note);
})
module.exports = router;