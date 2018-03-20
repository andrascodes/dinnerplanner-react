export default {
  root: `${process.env.PUBLIC_URL}/`,
  total: `${process.env.PUBLIC_URL}/total`,
  recipes: `${process.env.PUBLIC_URL}/recipes`,
  search: `${process.env.PUBLIC_URL}/search`,
  dish: `${process.env.PUBLIC_URL}/dish/:id`,
  dishWithId: (id) => `${process.env.PUBLIC_URL}/dish/${id}`
}