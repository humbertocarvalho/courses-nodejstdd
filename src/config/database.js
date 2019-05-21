module.exports = {
  host: '',
  dialect: 'postgres',
  logging: false,
  dialectOptions: {
    socketPath: ''
  },
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true
  }
};
