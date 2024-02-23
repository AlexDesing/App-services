const mongoose = require('mongoose');
const mongooseLeanVirtuals = require('mongoose-lean-virtuals');
const {Schema}=mongoose;
const path=require('path') 
const rolesValidos = ['Root'];
const esRolValido = (rol) => {
    return rolesValidos.includes(rol);
};
const userSchema = new Schema({ 
    nombre:{
        type:String,
        required:true
    }, 
    apellidos:{
        type:String,
        required:true
    },    
    correo:{
        type:String,
        required:true,
        unique:true
    }, 
    rol: {
        type: String,
        required: true, 
        validate: {
            validator: esRolValido,
            message: props => `${props.value} no es un rol válido`
        }
    },
    usuario:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },   
    celualr:{
        type:Number,
        required:true
    },   
    status:{
        type:Boolean,
        required:true,
        default:false
    },   
    fechaRegistro:{
        type:Date,
        default:Date.now,
        required:true
    }, 
     
}); 
module.exports=mongoose.model('user',userSchema);
