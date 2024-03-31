/**
 * @param {string} name - Who to say hello to
 */
function hello(name) {
  if (!name) name = "world";
  return `hello, ${name}!`;
}

module.exports = { hello };
