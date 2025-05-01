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

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-black text-white p-6 font-sans">
      <div className="max-w-xl mx-auto mt-10">
        <h1 className="text-3xl font-bold mb-4 border-b pb-2 border-white uppercase">
          Filmfestival Innsending
        </h1>

        <div className="bg-zinc-900 rounded-2xl shadow-md p-6">
          {submitted ? (
            <p className="text-green-400 text-lg">
              Takk for innsendingen! Vi tar kontakt ved behov.
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
