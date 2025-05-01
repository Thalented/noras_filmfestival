import React, { useState } from "react";

export default function FilmSubmissionForm() {
  const [form, setForm] = useState({
    fornavn: "",
    tittel: "",
    motiv: "",
    lenke: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycbwFMElhikEtnVV4yf-9dhrnqry9n_p0stuQsoojsdatOlK8iaYMgp2ssQWDAY0DRD_o/exec", {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });
      setSubmitted(true);
    } catch (error) {
      console.error("Submission error:", error);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white p-6 font-sans">
      <div className="max-w-xl mx-auto mt-10">
        <h1 className="text-3xl font-bold mb-4 border-b pb-2 border-white uppercase">
          Innsending til NORA-festivalen
        </h1>

        <div className="bg-zinc-900 rounded-2xl shadow-md p-6">
          {submitted ? (
            <p className="text-green-400 text-lg">
              Takk for innsendingen! Du får beskjed dersom filmen din blir valgt ut til festivalprogrammet.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block mb-1">Fornavn</label>
                <input
                  name="fornavn"
                  value={form.fornavn}
                  onChange={handleChange}
                  required
                  className="w-full p-2 bg-zinc-800 text-white rounded"
                />
              </div>

              <div>
                <label className="block mb-1">Tittel på filmen</label>
                <input
                  name="tittel"
                  value={form.tittel}
                  onChange={handleChange}
                  required
                  className="w-full p-2 bg-zinc-800 text-white rounded"
                />
              </div>

              <div>
                <label className="block mb-1">Motiv / Tema</label>
                <textarea
                  name="motiv"
                  value={form.motiv}
                  onChange={handleChange}
                  required
                  className="w-full p-2 bg-zinc-800 text-white rounded"
                />
              </div>

              <div>
                <label className="block mb-1">Lenke til filmen</label>
                <input
                  name="lenke"
                  value={form.lenke}
                  onChange={handleChange}
                  type="url"
                  required
                  className="w-full p-2 bg-zinc-800 text-white rounded"
                />
              </div>

              <button
                type="submit"
                className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200"
              >
                Send inn bidrag
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
