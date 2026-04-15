import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Menu, X, ArrowRight, Zap, Crosshair, Wind } from 'lucide-react';

const BeilaScarves = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // --- Framer Motion Tokens ---
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  return (
    <div className="bg-[#0A0A0A] text-white min-h-screen font-sans selection:bg-[#0055FF] selection:text-white rounded-none">
      
      {/* --- 1. GLOBAL NAVIGATION --- */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/10 backdrop-blur-md bg-[#0A0A0A]/80">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-12">
            <span className="text-xl font-black tracking-tighter uppercase">BEILA<span className="text-[#0055FF]">.</span></span>
            <div className="hidden md:flex gap-8 text-[11px] uppercase tracking-[0.2em] font-medium text-white/60">
              <a href="#tech" className="hover:text-white transition-colors">Technology</a>
              <a href="#collection" className="hover:text-white transition-colors">Series 01</a>
              <a href="#journal" className="hover:text-white transition-colors">Mission</a>
            </div>
          </div>
          
          <div className="flex items-center gap-6">
            <button className="hidden md:block text-[11px] tracking-[0.15em] uppercase bg-white text-black px-6 py-2.5 font-bold hover:bg-[#0055FF] hover:text-white transition-colors duration-300 rounded-none">
              Shop the Drop
            </button>
            <button className="text-white/80 hover:text-white transition-colors">
              <ShoppingBag strokeWidth={1.5} size={20} />
            </button>
            <button className="md:hidden text-white/80" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X strokeWidth={1.5} size={24} /> : <Menu strokeWidth={1.5} size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* --- 2. CINEMATIC HERO --- */}
      <section className="relative h-screen w-full flex items-end pb-24 md:pb-32 overflow-hidden border-b border-white/10">
        {/* Background Layer */}
        <div className="absolute inset-0 z-0 bg-[#1A1A1A]">
          {/* Replace src with actual video asset */}
          <video 
            autoPlay loop muted playsInline 
            className="w-full h-full object-cover opacity-40 grayscale mix-blend-luminosity"
            src="/hero-tech-hijab-motion.mp4" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/50 to-transparent z-10" />
        </div>

        {/* Content Layer */}
        <div className="relative z-20 max-w-[1600px] mx-auto px-4 md:px-8 w-full">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl"
          >
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
              <div className="h-[1px] w-8 bg-[#0055FF]" />
              <span className="text-[#0055FF] text-[10px] tracking-[0.3em] uppercase font-bold">Protocol 01 // Active Modesty</span>
            </motion.div>
            
            <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.85] mb-6 uppercase">
              Engineered <br />For Modesty.<br />
              <span className="text-white/40">Designed <br />For Motion.</span>
            </motion.h1>
            
            <motion.p variants={fadeUp} className="text-white/60 text-sm md:text-base max-w-lg mb-10 tracking-wide font-light leading-relaxed">
              Experience the intersection of aerodynamic design and premium modest wear. High-performance hijabs crafted for the modern pace.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
              <button className="bg-[#0055FF] text-white px-8 py-4 text-[11px] tracking-[0.2em] font-bold uppercase hover:bg-white hover:text-black transition-colors duration-300 flex items-center justify-center gap-2 rounded-none">
                Explore the Tech <ArrowRight size={14} />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* --- 3. TECHNICAL SPECS (BENTO GRID) --- */}
      <section id="tech" className="py-24 max-w-[1600px] mx-auto px-4 md:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-black tracking-tighter uppercase">Innovation Architecture</h2>
          <p className="text-white/50 text-xs tracking-[0.2em] uppercase mt-2">Proprietary Material Science</p>
        </motion.div>

        {/* Bento Grid Layout 
          Using a 1px gap on a white/10 background creates the perfect hairline border effect 
        */}
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[240px] md:auto-rows-[300px] gap-[1px] bg-white/10 border border-white/10">
          
          {/* Large Feature Card */}
          <motion.div 
            whileHover={{ backgroundColor: '#111' }}
            className="col-span-2 md:col-span-2 row-span-2 bg-[#0A0A0A] p-8 md:p-12 flex flex-col justify-between transition-colors duration-500"
          >
            <Wind className="text-[#0055FF] mb-4" size={32} strokeWidth={1} />
            <div>
              <span className="text-[10px] text-white/50 tracking-[0.2em] uppercase mb-2 block">Spec 01</span>
              <h3 className="text-2xl md:text-4xl font-black tracking-tighter uppercase mb-4">Aero-Knit Fabric</h3>
              <p className="text-white/60 text-sm tracking-wide leading-relaxed max-w-sm">
                Engineered with micro-perforations in high-heat zones. Facilitates rapid thermal exhaust while maintaining complete structural opacity.
              </p>
            </div>
          </motion.div>

          {/* Small Feature 1 */}
          <div className="col-span-2 md:col-span-1 bg-[#1A1A1A] p-6 flex flex-col justify-between group">
            <Zap className="text-white/40 group-hover:text-[#0055FF] transition-colors duration-300" size={24} strokeWidth={1} />
            <div>
              <h4 className="text-lg font-bold tracking-tight uppercase">Thermal Cooling</h4>
              <p className="text-[11px] text-white/50 tracking-wide mt-2">Active temperature regulation down to the fiber level.</p>
            </div>
          </div>

          {/* Small Feature 2 */}
          <div className="col-span-2 md:col-span-1 bg-[#1A1A1A] p-6 flex flex-col justify-between group">
            <Crosshair className="text-white/40 group-hover:text-[#0055FF] transition-colors duration-300" size={24} strokeWidth={1} />
            <div>
              <h4 className="text-lg font-bold tracking-tight uppercase">Anti-Slip Grip</h4>
              <p className="text-[11px] text-white/50 tracking-wide mt-2">Medical-grade silicone micro-dots secure placement.</p>
            </div>
          </div>

          {/* Wide Feature */}
          <div className="col-span-2 bg-[#0A0A0A] p-6 md:p-8 flex items-center justify-between group cursor-pointer hover:bg-[#111] transition-colors">
            <div>
               <span className="text-[10px] text-white/50 tracking-[0.2em] uppercase mb-1 block">Construction</span>
               <h4 className="text-xl font-bold tracking-tight uppercase">Sonic Welded Seams</h4>
            </div>
            <ArrowRight className="text-white/30 group-hover:text-white transition-colors" size={24} />
          </div>

        </div>
      </section>

      {/* --- 4. HORIZONTAL PRODUCT SCROLLER --- */}
      <section id="collection" className="py-24 bg-[#1A1A1A] border-y border-white/10 overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8 mb-12 flex justify-between items-end">
          <div>
            <h2 className="text-3xl md:text-4xl font-black tracking-tighter uppercase">Core Collection</h2>
            <p className="text-white/50 text-xs tracking-[0.2em] uppercase mt-2">Performance Series 01</p>
          </div>
          <a href="#" className="hidden md:flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase font-bold hover:text-[#0055FF] transition-colors">
            View All Configurations <ArrowRight size={14} />
          </a>
        </div>

        {/* Carousel Container */}
        <div className="flex overflow-x-auto hide-scrollbar pl-4 md:pl-8 pr-4 md:pr-8 gap-[1px] snap-x snap-mandatory">
          {[
            { id: '01', name: 'Velocity Pro Hijab', color: 'Carbon Black', price: '$65' },
            { id: '02', name: 'Aero-Fit Headpiece', color: 'Titanium Grey', price: '$55' },
            { id: '03', name: 'Endurance Wrap', color: 'Arctic White', price: '$70' },
            { id: '04', name: 'Velocity Pro Hijab', color: 'Racing Red', price: '$65' },
          ].map((item) => (
            <motion.div 
              key={item.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="min-w-[85vw] md:min-w-[400px] snap-start group relative border border-white/10 bg-[#0A0A0A]"
            >
              <div className="aspect-[3/4] bg-[#111] relative overflow-hidden">
                {/* Image Placeholder - use absolute positioning and grayscale */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#1A1A1A] to-[#0A0A0A] mix-blend-multiply opacity-50 z-10" />
                <img 
                  src={`/api/placeholder/400/533`} 
                  alt={item.name}
                  className="w-full h-full object-cover grayscale opacity-80 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700 ease-out"
                />
                
                {/* Hover CTA */}
                <div className="absolute bottom-0 left-0 w-full p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-20">
                  <button className="w-full bg-white text-black py-4 text-[11px] tracking-[0.2em] font-bold uppercase hover:bg-[#0055FF] hover:text-white transition-colors">
                    Quick Add — {item.price}
                  </button>
                </div>
              </div>
              
              <div className="p-6 border-t border-white/10 flex justify-between items-start">
                <div>
                  <h4 className="text-sm font-bold tracking-tight uppercase">{item.name}</h4>
                  <p className="text-[10px] text-white/50 tracking-[0.1em] uppercase mt-1">Color: {item.color}</p>
                </div>
                <span className="text-[10px] font-mono text-white/40">[{item.id}]</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- 5. TECHNICAL FOOTER --- */}
      <footer className="bg-[#0A0A0A] pt-24 pb-8 border-t border-white/10">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-24">
            
            {/* Brand Column */}
            <div className="md:col-span-4">
              <span className="text-2xl font-black tracking-tighter uppercase mb-6 block">BEILA<span className="text-[#0055FF]">.</span></span>
              <p className="text-white/50 text-xs tracking-wide leading-relaxed max-w-xs">
                Precision engineering for the modern modest athlete. Uncompromising performance meets structural integrity.
              </p>
            </div>

            {/* Lifecycle Marketing / Email Capture */}
            <div className="md:col-span-4 border border-white/10 p-6 relative overflow-hidden group hover:border-white/30 transition-colors">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Wind size={64} />
              </div>
              <h4 className="text-[11px] tracking-[0.2em] uppercase font-bold mb-2">Access the Lab</h4>
              <p className="text-white/50 text-[10px] tracking-wide mb-6">Join the briefing for early access to R&D drops and experimental tech.</p>
              
              <form className="flex border-b border-white/20 focus-within:border-[#0055FF] transition-colors pb-2">
                <input 
                  type="email" 
                  placeholder="ENTER EMAIL ADDRESS" 
                  className="bg-transparent text-xs tracking-widest w-full outline-none placeholder:text-white/20"
                />
                <button type="submit" className="text-white/50 hover:text-white transition-colors">
                  <ArrowRight size={16} />
                </button>
              </form>
            </div>

            {/* Links Columns */}
            <div className="md:col-span-2 flex flex-col gap-4">
              <h5 className="text-[10px] tracking-[0.3em] text-white/40 uppercase mb-2">Platform</h5>
              {['Technology', 'Core Collection', 'Collaborations', 'Stores'].map(link => (
                <a key={link} href="#" className="text-xs tracking-wide text-white/70 hover:text-[#0055FF] transition-colors">{link}</a>
              ))}
            </div>

            <div className="md:col-span-2 flex flex-col gap-4">
              <h5 className="text-[10px] tracking-[0.3em] text-white/40 uppercase mb-2">Support</h5>
              {['Care Instructions', 'Shipping Info', 'Returns', 'Contact'].map(link => (
                <a key={link} href="#" className="text-xs tracking-wide text-white/70 hover:text-[#0055FF] transition-colors">{link}</a>
              ))}
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 gap-4">
            <p className="text-[10px] tracking-[0.2em] text-white/40 uppercase">
              © {new Date().getFullYear()} Beila Scarves. All rights reserved.
            </p>
            <div className="flex gap-6 text-[10px] tracking-[0.2em] text-white/40 uppercase">
              <a href="#" className="hover:text-white transition-colors">Instagram</a>
              <a href="#" className="hover:text-white transition-colors">Twitter // X</a>
              <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Global Styles for hiding scrollbar in standard CSS */}
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </div>
  );
};

export default BeilaScarves;