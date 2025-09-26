"use client"

import { useRouter } from "next/navigation";

export default async function AddForm() {
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    // Ajout d'un article
    fetch("http://localhost:4000/produits", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: Math.floor(Math.random() * 1000),
        title: data.title,
        description: data.description,
        date: new Date(),
      }),
    }).then(() => {
      router.refresh();
      router.push("/");
    });
  };
    return <>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
  <span className="input-group-text">First and last name</span>
  <input type="text" aria-label="First name" className="form-control" name="title"/>
  <input type="text" aria-label="Last name" className="form-control" name="description"/>
</div>
        <button className="btn btn-primary" type="submit">
        Ajouter un article
        </button>
      </form>
    </>
}