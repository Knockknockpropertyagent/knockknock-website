import React from "react";

export default function HomePage() {
  return (
    <div className="bg-[#384731] min-h-screen text-white font-sans">
      <header className="flex justify-between items-center px-8 py-6 bg-[#384731]">
        <div className="text-xl font-bold tracking-widest">KNOCK KNOCK</div>
        <nav className="space-x-6 text-sm">
          <a href="#about" className="hover:underline">About Us</a>
          <a href="#services" className="hover:underline">Property Services</a>
          <a href="#contact" className="hover:underline">Contact Us</a>
        </nav>
      </header>

      <section className="px-8 py-20 bg-[#384731] text-white text-center">
        <h1 className="text-5xl font-light mb-4">Find your <span className="font-semibold">new home</span></h1>
        <p className="text-lg">In real estate, every detail counts.</p>
      </section>

      <section id="services" className="bg-white text-[#384731] px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div className="shadow-md rounded-2xl p-6 bg-white">
            <div className="text-2xl mb-4">🏠</div>
            <h3 className="text-xl font-semibold mb-2">Property Management</h3>
            <p className="text-sm">Comprehensive management services for your rental property</p>
          </div>
          <div className="shadow-md rounded-2xl p-6 bg-white">
            <div className="text-2xl mb-4">📄</div>
            <h3 className="text-xl font-semibold mb-2">Buying & Selling</h3>
            <p className="text-sm">Expert assistance through the buying and selling process</p>
          </div>
          <div className="shadow-md rounded-2xl p-6 bg-white">
            <div className="text-2xl mb-4">🔑</div>
            <h3 className="text-xl font-semibold mb-2">Renting</h3>
            <p className="text-sm">Find the perfect rental property to suit your needs</p>
          </div>
        </div>
      </section>
    </div>
  );
}