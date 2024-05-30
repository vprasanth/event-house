export function hello(name: string) {
  if (!name) name = "world";
  return `hello, ${name}!`;
}
