async function getPosts() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await response.json()
  return data
}

getPosts().then(res => console.log(res))

const obj = Object.assign({}, { a: 1 })
Array.from([1, 2, 3])
