import Link from "next/link"

    const getFetch = async () => {
    const res = await fetch("http://localhost:4000/produits")
    const data = await res.json()
    return data
}
export default async function Page(){
    const produits = await getFetch()
    return <>
    <h1>Liste des produits</h1>
    <ul>
        {produits.map((produit) => (
            <li key={produit.id}>
                <Link href={`/produits/${produit.id}`}>
                {produit.id}. {produit.title}
                </Link>
            </li>
        ))}
    </ul>
    </>
}