let model = require('../models/Product');

module.exports = {
	show : function(req,res){
		model.find({},function(err,data){
			if(err){
				console.log(err);
				res.sendStatus(500);
			}else{
				res.json(data);
			}
		});
	},
	detail : function(req,res){
		let val_id = req.params.id;
		model.findOne({_id:val_id},function(err,data){
			if(err){
				console.log(err);
				res.sendStatus(500);
			}else{
				res.json(data);
			}
		});
	},
	create: function(req,res){
        let obj = new model;
        obj.nombre = req.body.nombre
		obj.descripcion = req.body.descripcion;
        obj.precio = req.body.precio;
        obj.stock = req.body.stock
		obj.save(function(err,data){
			if(err){
				console.log(err);
				res.sendStatus(500);
			}else{
				res.json('OK');
			}
		});
	},
	update: function(req,res){
		console.log(req.body);
		let val_id = req.body._id;
		let datos = {
            nombre: req.body.nombre,
			descripcion : req.body.descripcion,
            precio : req.body.precio,
            stock: req.body.stock
		};
		model.updateOne({_id:val_id},datos,function(err,data){
			if(err){
				console.log(err);
				res.sendStatus(500);
			}else{
				res.json("OK");
			}
		});
	},
	delete: function(req,res){
		let val_id = req.params.id;
		model.deleteOne({ _id: val_id }, function (err) {
			if (err) return handleError(err);
			res.json('OK');
		});
	}
};
