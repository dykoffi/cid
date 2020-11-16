const Sequelize = require('sequelize')
const DataTypes = require('sequelize').DataTypes
const sequelize = new Sequelize('postgres://oscav:1234@localhost:5432/cid', { logging: false })

//try to connect
try {
    (async () => sequelize.authenticate())();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
};

// definition des models
const Projet = sequelize.define('Project', {
    nom: { type: DataTypes.STRING, unique: true },
    type: { type: DataTypes.STRING },
    details: { type: DataTypes.TEXT },
    photo: { type: DataTypes.STRING }
});
const Team = sequelize.define('Team', {
    nom: { type: DataTypes.STRING, unique: true },
});
const Member = sequelize.define('Member', {
    nom: { type: DataTypes.STRING },
    tel: { type: DataTypes.STRING },
    mail: { type: DataTypes.STRING },
    role: { type: DataTypes.STRING }
});
const Responsable = sequelize.define('Responsable', {
    nom: { type: DataTypes.STRING },
    responsabilite: { type: DataTypes.STRING },
    photo: { type: DataTypes.STRING }
});
const Club = sequelize.define('Club', {
    nom: { type: DataTypes.STRING, nom: true },
    type: { type: DataTypes.STRING },
    details: { type: DataTypes.TEXT },
    photo: { type: DataTypes.STRING }
});

//Associations
/* Projet => Team */
Team.hasMany(Projet);
Projet.belongsTo(Team);

/* Member => Team */
Team.hasMany(Member);
Member.belongsTo(Team);

(() => sequelize.sync({ alter: true }))();

exports.Projet = Projet
exports.Club = Club
exports.Team = Team
exports.Member = Member
exports.Responsable = Responsable