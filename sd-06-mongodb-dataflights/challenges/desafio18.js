db.voos.find({ "passageiros.pagos": { $gte: 7000 } }, { _id: 0, vooId: 1, mes: 1, ano: 1 }).limit(1);
