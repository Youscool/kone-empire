
const getFetch = async (id) => {
    try {
const res = await fetch(`http://localhost:4000/produits/${id}`)
    return res.json()
    } catch(err){
     console.log("Erreur du server", err)
    }
}
export default async function Page({params}){
    const { id } = params;
    console.log(id)
    const produit = await getFetch(id)
   
    return<>
    <div className="container">
    <h1>{produit.id} {produit.title}</h1>
    </div>
    </>
}