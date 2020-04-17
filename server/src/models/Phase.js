module.exports = (sequelize, DataTypes) => {
    const Phase = sequelize.define('Phase', {
      phasename: {
        type: DataTypes.STRING,
        unique: true,
      },
      modelename: {
        type: DataTypes.STRING,
      },
      linenumber: DataTypes.INTEGER,
    });
  
    return Phase;
  };