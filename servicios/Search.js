export default function search(object, searchQuery) {
    const result = object.filter(() => object.name.toLowerCase().includes(searchQuery.toLowerCase()))
    return result
}