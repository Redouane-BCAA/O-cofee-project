const client = require("./database");

const dataMapper = {
  getNewsCoffee: async () => {
    const sql = `SELECT * FROM coffee
    ORDER BY id DESC
    LIMIT 3;`;

    const result = await client.query(sql);
    return result.rows;
  },
  getAllCoffee: async () => {
    const sql = `SELECT * FROM coffee;`;

    const result = await client.query(sql);
    return result.rows;
  },
  getAllCategories: async () => {
    const sql = 'SELECT * FROM categorie';
    const result = await client.query(sql);
    return result.rows;
  },
  getCoffeeByCategory: async (categoryId) => {
    const sql = 'SELECT * FROM coffee WHERE categorie_id = $1';
    const values = [categoryId];
    const result = await client.query(sql, values);
    return result.rows;
  },
  getOneCoffee: async (id) => {
    const sql = `SELECT * FROM coffee WHERE id = ${id}`;
    const result = await client.query(sql);
    return result.rows[0];
  }
};

module.exports = dataMapper;
