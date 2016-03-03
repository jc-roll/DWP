module.exports = function() {
  var db = require('./db.js');
  var sequelize = db.connection;

  function _create(payload, err, success){
    var cleanData = payload;
    db.app.create(cleanData).then(success).catch(err);
  }

  function _update(payload, err, success){
    var cleanData = payload;
    db.app.find({where:{id:cleanData.id}}).then(function(matchedapp){
        matchedapp.updateAttributes(payload).then(success).catch(err);
    }).catch(err);
  }

  function _find(payload, err, success){
    var cleanData = payload;
    db.app.find({where:{id:cleanData.id}}).then(success).catch(err);
  }

  function _findAll(err, success){
    db.app.findAll().then(success).catch(err);
  }

  function _destroy(payload, err, success){
    var cleanData = payload;
    db.app.destroy({where:{id:cleanData.id}, force: payload.force}).then(success).catch(err);
  }

  return {
    create: _create,
    update: _update,
    find: _find,
    findAll: _findAll,
    destroy: _destroy,
  }
}();