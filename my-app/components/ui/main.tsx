
"use client";

import { useState } from "react";
import { Gift, Plus, Trash2, Heart } from "lucide-react";

export default function People() {
  const [wishes, setWishes] = useState([
    "Llibre de programació",
    "Auriculars sense fils",
    "Planta per l'oficina"
  ]);
  const [newWish, setNewWish] = useState("");

  const handleAddWish = (e: React.FormEvent) => {
    e.preventDefault();
    if (newWish.trim()) {
      setWishes([...wishes, newWish.trim()]);
      setNewWish("");
    }
  };

  const handleDeleteWish = (index: number) => {
    setWishes(wishes.filter((_, i) => i !== index));
  };

  return (
    <>
      <main className="min-h-screen pt-24 px-4 sm:px-8 pb-16 bg-gradient-to-br from-pink-50 via-white to-purple-50">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Gift className="w-4 h-4" />
              <span>Aniversari 2024</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Llista de Regals
            </h1>
            <p className="text-lg text-gray-600">
              Ajuda'm a triar el regal perfecte! 🎁
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left Column - Person Info */}
            <div className="space-y-6">
              {/* Profile Card */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="flex flex-col items-center text-center">
                  {/* Profile Image Placeholder */}
                  <div className="w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center mb-4 shadow-xl">
                    <span className="text-5xl">👤</span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    Nom de la Persona
                  </h2>
                  <p className="text-gray-600 mb-4">
                    📅 Aniversari: 15 de Novembre
                  </p>
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <Heart className="w-4 h-4 text-red-500" />
                    <span>{wishes.length} idees de regal</span>
                  </div>
                </div>
              </div>

              {/* Add New Wish Form */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Plus className="w-5 h-5 mr-2 text-purple-600" />
                  Afegir Nova Idea
                </h3>
                <form onSubmit={handleAddWish} className="space-y-4">
                  <input
                    type="text"
                    value={newWish}
                    onChange={(e) => setNewWish(e.target.value)}
                    placeholder="Escriu una idea de regal..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
                  />
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2"
                  >
                    <Plus className="w-5 h-5" />
                    <span>Afegir a la llista</span>
                  </button>
                </form>
              </div>
            </div>

            {/* Right Column - Wishlist */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <Gift className="w-6 h-6 mr-2 text-purple-600" />
                Idees de Regal
              </h3>

              {wishes.length === 0 ? (
                <div className="text-center py-12 text-gray-400">
                  <Gift className="w-16 h-16 mx-auto mb-4 opacity-50" />
                  <p>Encara no hi ha cap idea de regal</p>
                </div>
              ) : (
                <ul className="space-y-3">
                  {wishes.map((wish, index) => (
                    <li
                      key={index}
                      className="flex items-center justify-between bg-purple-50 p-4 rounded-lg hover:bg-purple-100 transition-colors group"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-purple-200 rounded-full flex items-center justify-center text-purple-700 font-semibold text-sm">
                          {index + 1}
                        </div>
                        <span className="text-gray-800 font-medium">{wish}</span>
                      </div>
                      <button
                        onClick={() => handleDeleteWish(index)}
                        className="text-gray-400 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100"
                        aria-label="Eliminar"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </li>
                  ))}
                </ul>
              )}

              {wishes.length > 0 && (
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="text-sm text-gray-600 text-center">
                    💡 Pots afegir més idees a l'esquerra
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}