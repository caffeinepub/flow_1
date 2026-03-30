import { Skeleton } from "@/components/ui/skeleton";
import {
  AlignLeft,
  ArrowRight,
  Brain,
  ChevronRight,
  Circle,
  Cpu,
  Eye,
  Image,
  Layers,
  LayoutGrid,
  Mail,
  Monitor,
  MousePointer2,
  Move,
  PenTool,
  Sparkles,
  Square,
  Star,
  Triangle,
  Wand2,
  Zap,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import type { EditorFeature, Product } from "./backend.d";
import { useGetAllProducts, useGetEditorFeatures } from "./hooks/useQueries";

// ─── Navbar ───────────────────────────────────────────────────────────────────
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const links = [
    { label: "AI SHOPPING", href: "#ai-shopping" },
    { label: "EDITOR", href: "#editor" },
    { label: "DISCOVER", href: "#features" },
    { label: "FEATURES", href: "#features" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "nav-scrolled" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a
          href="/"
          className="flex items-center gap-2.5 group"
          data-ocid="nav.link"
        >
          <div className="relative">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.75 0.15 215), oklch(0.65 0.2 280))",
                boxShadow: "0 0 16px oklch(0.72 0.18 280 / 0.5)",
              }}
            >
              <Sparkles className="w-4 h-4 text-white" />
            </div>
          </div>
          <span
            className={`text-xl font-bold tracking-tight transition-colors ${
              scrolled ? "text-foreground" : "text-white"
            }`}
          >
            Flow
          </span>
        </a>

        {/* Center Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              data-ocid="nav.link"
              className={`text-xs font-semibold tracking-widest transition-colors hover:opacity-100 ${
                scrolled
                  ? "text-foreground/60 hover:text-foreground"
                  : "text-white/70 hover:text-white"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Right CTAs */}
        <div className="hidden md:flex items-center gap-3">
          <button
            type="button"
            data-ocid="nav.sign_in.button"
            className={`px-5 py-2 rounded-full text-sm font-semibold border transition-all ${
              scrolled
                ? "border-foreground/20 text-foreground hover:border-primary hover:text-primary"
                : "border-white/30 text-white hover:border-white/70"
            }`}
          >
            SIGN IN
          </button>
          <button
            type="button"
            data-ocid="nav.get_started.button"
            className="px-5 py-2 rounded-full text-sm font-semibold text-white btn-gradient transition-all hover:scale-105 hover:shadow-glow"
          >
            GET STARTED
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className={`md:hidden p-2 rounded-lg ${scrolled ? "text-foreground" : "text-white"}`}
          onClick={() => setMobileOpen((v) => !v)}
          data-ocid="nav.toggle"
        >
          <div className="w-5 h-0.5 bg-current mb-1.5 transition-all" />
          <div className="w-5 h-0.5 bg-current mb-1.5" />
          <div className="w-5 h-0.5 bg-current" />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-border px-6 py-4 flex flex-col gap-4"
          >
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm font-semibold tracking-wider text-foreground/70 hover:text-foreground"
                data-ocid="nav.link"
              >
                {l.label}
              </a>
            ))}
            <div className="flex gap-3 pt-2">
              <button
                type="button"
                className="flex-1 px-5 py-2 rounded-full text-sm font-semibold border border-border text-foreground"
                data-ocid="nav.sign_in.button"
              >
                SIGN IN
              </button>
              <button
                type="button"
                className="flex-1 px-5 py-2 rounded-full text-sm font-semibold text-white btn-gradient"
                data-ocid="nav.get_started.button"
              >
                GET STARTED
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

// ─── Hero Illustration ────────────────────────────────────────────────────────
function HeroIllustration() {
  return (
    <div className="relative w-full h-[480px] flex items-center justify-center">
      {/* Glow rings */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, oklch(0.65 0.2 280 / 0.2), transparent 70%)",
        }}
      />
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background:
            "radial-gradient(ellipse 40% 30% at 50% 50%, oklch(0.75 0.15 215 / 0.15), transparent 70%)",
        }}
      />

      {/* Main laptop illustration */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{
          repeat: Number.POSITIVE_INFINITY,
          duration: 4,
          ease: "easeInOut",
        }}
        className="relative z-10"
      >
        <img
          src="/assets/generated/hero-laptop-illustration.dim_600x500.png"
          alt="Flow AI Platform"
          className="w-[420px] max-w-full drop-shadow-2xl glow-cyan"
        />
      </motion.div>

      {/* Floating AI card */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{
          repeat: Number.POSITIVE_INFINITY,
          duration: 5,
          ease: "easeInOut",
          delay: 0.5,
        }}
        className="absolute top-16 right-4 md:right-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-4 py-3 flex items-center gap-3 shadow-lg"
      >
        <div
          className="w-9 h-9 rounded-xl flex items-center justify-center"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.6 0.2 215), oklch(0.55 0.22 270))",
          }}
        >
          <Brain className="w-4 h-4 text-white" />
        </div>
        <div>
          <p className="text-white text-xs font-bold">AI Score</p>
          <p className="text-xs" style={{ color: "oklch(0.86 0.12 215)" }}>
            9.8 / 10 match
          </p>
        </div>
      </motion.div>

      {/* Floating UI card */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{
          repeat: Number.POSITIVE_INFINITY,
          duration: 4.5,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute bottom-20 left-4 md:left-0 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-4 py-3 flex items-center gap-3 shadow-lg"
      >
        <div
          className="w-9 h-9 rounded-xl flex items-center justify-center"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.65 0.2 285), oklch(0.6 0.22 310))",
          }}
        >
          <PenTool className="w-4 h-4 text-white" />
        </div>
        <div>
          <p className="text-white text-xs font-bold">Editor</p>
          <p className="text-xs" style={{ color: "oklch(0.8 0.15 285)" }}>
            12 layers active
          </p>
        </div>
      </motion.div>

      {/* Product mini card */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{
          repeat: Number.POSITIVE_INFINITY,
          duration: 3.8,
          ease: "easeInOut",
          delay: 1.5,
        }}
        className="absolute top-24 left-2 md:left-[-10px] bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-2 shadow-lg"
      >
        <img
          src="/assets/generated/product-shoe.dim_400x400.png"
          alt="Product"
          className="w-14 h-14 rounded-lg object-cover"
        />
        <p className="text-white text-[10px] font-semibold mt-1 text-center">
          $129
        </p>
      </motion.div>
    </div>
  );
}

// ─── Hero Section ─────────────────────────────────────────────────────────────
function HeroSection() {
  return (
    <section className="hero-gradient min-h-screen flex items-center relative overflow-hidden">
      {/* Background mesh */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 80%, oklch(0.55 0.2 285 / 0.15) 0%, transparent 40%), radial-gradient(circle at 80% 20%, oklch(0.72 0.15 215 / 0.12) 0%, transparent 40%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 pt-28 pb-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Copy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-white"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm px-4 py-1.5 text-xs font-semibold text-white/80 mb-6"
            >
              <Sparkles
                className="w-3 h-3"
                style={{ color: "oklch(0.86 0.12 215)" }}
              />
              Powered by AI
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight mb-6">
              Shop Smarter.
              <br />
              <span className="text-gradient">Create Freely.</span>
            </h1>

            <p className="text-lg text-white/70 leading-relaxed mb-10 max-w-md">
              Flow combines AI-powered product discovery with a powerful visual
              editor — all in one seamless platform.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#ai-shopping">
                <button
                  type="button"
                  data-ocid="hero.start_shopping.button"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-bold text-white btn-gradient hover:scale-105 transition-all shadow-glow"
                >
                  <Brain className="w-4 h-4" />
                  Start AI Shopping
                </button>
              </a>
              <a href="#editor">
                <button
                  type="button"
                  data-ocid="hero.explore_editor.button"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-bold text-white border border-white/30 hover:border-white/70 hover:bg-white/10 transition-all"
                >
                  Explore the Editor
                  <ChevronRight className="w-4 h-4" />
                </button>
              </a>
            </div>

            {/* Stats */}
            <div className="flex gap-8 mt-12 pt-8 border-t border-white/10">
              {[
                { value: "2M+", label: "Products" },
                { value: "98%", label: "Match Rate" },
                { value: "50K+", label: "Creators" },
              ].map((s) => (
                <div key={s.label}>
                  <p className="text-2xl font-extrabold text-white">
                    {s.value}
                  </p>
                  <p className="text-xs text-white/50 mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <HeroIllustration />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── Star Rating ──────────────────────────────────────────────────────────────
function StarRating({ value }: { value: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          className={`w-3.5 h-3.5 ${
            i <= Math.round(value)
              ? "fill-amber-400 text-amber-400"
              : "text-muted-foreground/40"
          }`}
        />
      ))}
      <span className="text-xs text-muted-foreground ml-1">
        {value.toFixed(1)}
      </span>
    </div>
  );
}

// ─── Product Card ─────────────────────────────────────────────────────────────
function ProductCard({ product, index }: { product: Product; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="bg-card rounded-2xl overflow-hidden card-shadow product-card-hover flex-shrink-0 w-56"
      data-ocid={`product.item.${index + 1}`}
    >
      <div className="relative h-44 overflow-hidden bg-muted">
        <img
          src={`https://picsum.photos/seed/${encodeURIComponent(product.name)}/300/300`}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          loading="lazy"
        />
        {/* AI Badge */}
        <div
          className="absolute top-3 left-3 flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-bold text-white"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.5 0.18 150), oklch(0.45 0.2 165))",
            boxShadow: "0 2px 8px oklch(0.5 0.18 150 / 0.4)",
          }}
        >
          <Brain className="w-3 h-3" />
          AI {product.aiScore.toFixed(1)}
        </div>
      </div>

      <div className="p-4">
        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">
          {product.category}
        </p>
        <h3 className="font-bold text-foreground text-sm leading-tight mb-2 line-clamp-2">
          {product.name}
        </h3>
        <StarRating value={product.rating} />
        <div className="flex items-center justify-between mt-3">
          <span className="text-lg font-extrabold text-foreground">
            ${product.price.toFixed(2)}
          </span>
          <button
            type="button"
            data-ocid={`product.view_details.button.${index + 1}`}
            className="text-xs font-bold px-3 py-1.5 rounded-full text-white btn-gradient hover:scale-105 transition-all"
          >
            View Details
          </button>
        </div>
      </div>
    </motion.div>
  );
}

// ─── AI Shopping Section ──────────────────────────────────────────────────────
function AIShoppingSection() {
  const { data: products, isLoading } = useGetAllProducts();
  const scrollRef = useRef<HTMLDivElement>(null);

  const fallbackProducts: Product[] = [
    {
      name: "Air Flow Runner Pro",
      description: "Premium running shoe",
      imageUrl: "",
      category: "Footwear",
      rating: 4.8,
      price: 149.99,
      aiScore: 9.6,
    },
    {
      name: "SoundWave Elite Headphones",
      description: "Noise cancelling",
      imageUrl: "",
      category: "Electronics",
      rating: 4.7,
      price: 299.0,
      aiScore: 9.4,
    },
    {
      name: "Minimalist Leather Watch",
      description: "Classic timepiece",
      imageUrl: "",
      category: "Accessories",
      rating: 4.9,
      price: 249.0,
      aiScore: 9.8,
    },
    {
      name: "Urban Backpack Pro",
      description: "35L capacity",
      imageUrl: "",
      category: "Bags",
      rating: 4.6,
      price: 89.99,
      aiScore: 9.1,
    },
    {
      name: "Wireless Mechanical Keyboard",
      description: "RGB backlit",
      imageUrl: "",
      category: "Electronics",
      rating: 4.8,
      price: 179.0,
      aiScore: 9.5,
    },
    {
      name: "Polarized Sunglasses",
      description: "UV400 protection",
      imageUrl: "",
      category: "Eyewear",
      rating: 4.5,
      price: 69.99,
      aiScore: 9.0,
    },
  ];

  const displayProducts =
    products && products.length > 0 ? products : fallbackProducts;

  return (
    <section id="ai-shopping" className="py-24 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold tracking-wider uppercase mb-4 border"
            style={{
              borderColor: "oklch(0.72 0.18 280 / 0.3)",
              color: "oklch(0.52 0.2 270)",
              background: "oklch(0.52 0.2 270 / 0.06)",
            }}
          >
            <Cpu className="w-3 h-3" />
            Shop Smarter with AI
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4">
            Your AI‑Curated
            <br />
            <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-muted-foreground max-w-xl text-base leading-relaxed">
            Our AI analyzes your style, preferences, and behavior to surface the
            products you'll actually love — before you even know you want them.
          </p>
        </motion.div>

        {/* Product carousel */}
        {isLoading ? (
          <div
            className="flex gap-5 overflow-x-auto pb-4"
            data-ocid="product.loading_state"
          >
            {Array.from(["s1", "s2", "s3", "s4", "s5"]).map((sk) => (
              <div key={sk} className="flex-shrink-0 w-56">
                <Skeleton className="h-44 w-full rounded-2xl" />
                <div className="p-4 space-y-2">
                  <Skeleton className="h-3 w-16" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-3 w-24" />
                  <Skeleton className="h-8 w-full mt-2" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto pb-4 -mx-2 px-2"
            style={{ scrollbarWidth: "none" }}
            data-ocid="product.list"
          >
            {displayProducts.map((product, i) => (
              <ProductCard key={product.name} product={product} index={i} />
            ))}
          </div>
        )}

        {/* CTA below */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex justify-center mt-12"
        >
          <button
            type="button"
            data-ocid="ai_shopping.view_all.button"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border text-sm font-bold transition-all hover:bg-primary hover:text-primary-foreground"
            style={{
              borderColor: "oklch(0.52 0.19 270 / 0.3)",
              color: "oklch(0.52 0.19 270)",
            }}
          >
            Explore All Products
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Mock Editor UI ───────────────────────────────────────────────────────────
function MockEditorUI() {
  const tools = [
    { icon: MousePointer2, label: "Select" },
    { icon: Square, label: "Rectangle" },
    { icon: Circle, label: "Ellipse" },
    { icon: Triangle, label: "Triangle" },
    { icon: PenTool, label: "Pen" },
    { icon: AlignLeft, label: "Text" },
    { icon: Image, label: "Image" },
    { icon: Move, label: "Move" },
  ];

  return (
    <div
      className="editor-mock w-full max-w-[560px] shadow-2xl"
      data-ocid="editor.canvas_target"
    >
      {/* Title bar */}
      <div
        className="flex items-center gap-2 px-4 py-3 border-b"
        style={{
          borderColor: "oklch(0.35 0.06 255)",
          background: "oklch(0.18 0.04 255)",
        }}
      >
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-400" />
          <div className="w-3 h-3 rounded-full bg-yellow-400" />
          <div className="w-3 h-3 rounded-full bg-green-400" />
        </div>
        <span className="text-white/40 text-xs ml-2 font-medium">
          flow-design.project
        </span>
        <div className="ml-auto flex items-center gap-3">
          <Eye className="w-3.5 h-3.5 text-white/40" />
          <Layers className="w-3.5 h-3.5 text-white/40" />
          <Wand2
            className="w-3.5 h-3.5"
            style={{ color: "oklch(0.72 0.18 280)" }}
          />
        </div>
      </div>

      {/* Editor body */}
      <div className="flex" style={{ height: "360px" }}>
        {/* Toolbar */}
        <div
          className="flex flex-col items-center gap-1 px-2 py-3 border-r"
          style={{
            borderColor: "oklch(0.28 0.05 255)",
            background: "oklch(0.14 0.04 255)",
          }}
        >
          {tools.map(({ icon: Icon, label }) => (
            <button
              type="button"
              key={label}
              title={label}
              className="w-8 h-8 rounded-lg flex items-center justify-center transition-colors hover:bg-white/10 text-white/40 hover:text-white/80"
            >
              <Icon className="w-3.5 h-3.5" />
            </button>
          ))}
        </div>

        {/* Canvas */}
        <div
          className="flex-1 relative overflow-hidden"
          style={{
            background: "oklch(0.12 0.03 255)",
            backgroundImage:
              "radial-gradient(oklch(0.3 0.04 255) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        >
          {/* Mock design elements */}
          <div
            className="absolute top-8 left-12 rounded-2xl"
            style={{
              width: 180,
              height: 100,
              background:
                "linear-gradient(135deg, oklch(0.6 0.2 255 / 0.8), oklch(0.55 0.22 285 / 0.8))",
              boxShadow: "0 8px 32px oklch(0.6 0.2 255 / 0.3)",
            }}
          />
          <div
            className="absolute top-16 left-32 rounded-xl"
            style={{
              width: 120,
              height: 60,
              background: "oklch(0.9 0.08 215 / 0.9)",
              boxShadow: "0 4px 16px oklch(0.75 0.12 215 / 0.3)",
            }}
          />
          <div
            className="absolute bottom-16 right-8 rounded-lg"
            style={{
              width: 80,
              height: 80,
              background: "oklch(0.72 0.18 285 / 0.7)",
              boxShadow: "0 4px 16px oklch(0.72 0.18 285 / 0.3)",
            }}
          />
          <div
            className="absolute bottom-24 left-8 rounded-full"
            style={{
              width: 48,
              height: 48,
              background: "oklch(0.8 0.15 60 / 0.8)",
            }}
          />
          {/* Selection indicator */}
          <div
            className="absolute top-7 left-11"
            style={{
              width: 182,
              height: 102,
              border: "1.5px solid oklch(0.72 0.18 215)",
              borderRadius: 18,
            }}
          >
            {/* Corner handles */}
            {[
              { top: -4, left: -4, id: "tl" },
              { top: -4, right: -4, id: "tr" },
              { bottom: -4, left: -4, id: "bl" },
              { bottom: -4, right: -4, id: "br" },
            ].map((pos) => (
              <div
                key={pos.id}
                className="absolute w-2 h-2 rounded-sm bg-white border"
                style={{ ...pos, borderColor: "oklch(0.72 0.18 215)" }}
              />
            ))}
          </div>
        </div>

        {/* Right panel */}
        <div
          className="w-36 border-l flex flex-col gap-2 p-3 overflow-hidden"
          style={{
            borderColor: "oklch(0.28 0.05 255)",
            background: "oklch(0.14 0.04 255)",
          }}
        >
          <p className="text-white/40 text-[10px] font-bold uppercase tracking-wider">
            Properties
          </p>
          {[
            { label: "W", value: "180px" },
            { label: "H", value: "100px" },
            { label: "X", value: "48px" },
            { label: "Y", value: "32px" },
            { label: "R", value: "16px" },
          ].map(({ label, value }) => (
            <div key={label} className="flex items-center justify-between">
              <span className="text-white/30 text-[10px] font-medium">
                {label}
              </span>
              <span
                className="text-[10px] font-mono px-1.5 py-0.5 rounded"
                style={{
                  background: "oklch(0.22 0.04 255)",
                  color: "oklch(0.75 0.1 215)",
                }}
              >
                {value}
              </span>
            </div>
          ))}
          <div
            className="mt-2 pt-2 border-t"
            style={{ borderColor: "oklch(0.28 0.05 255)" }}
          >
            <p className="text-white/40 text-[10px] font-bold uppercase tracking-wider mb-2">
              Fill
            </p>
            <div className="flex items-center gap-1.5">
              <div
                className="w-5 h-5 rounded-md"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.6 0.2 255), oklch(0.55 0.22 285))",
                }}
              />
              <span
                className="text-[9px] font-mono"
                style={{ color: "oklch(0.65 0.1 215)" }}
              >
                Gradient
              </span>
            </div>
          </div>
          <div className="mt-1">
            <p className="text-white/40 text-[10px] font-bold uppercase tracking-wider mb-2">
              Layers
            </p>
            {["Rectangle 1", "Ellipse", "Text Layer"].map((name) => (
              <div
                key={name}
                className="text-[9px] px-1.5 py-1 rounded mb-0.5 cursor-pointer hover:bg-white/5"
                style={{ color: "oklch(0.65 0.08 255)" }}
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Status bar */}
      <div
        className="flex items-center gap-4 px-4 py-2 border-t"
        style={{
          borderColor: "oklch(0.28 0.05 255)",
          background: "oklch(0.14 0.04 255)",
        }}
      >
        <span className="text-[10px] text-white/30">100%</span>
        <span className="text-[10px] text-white/30">3 layers</span>
        <div className="ml-auto flex items-center gap-1">
          <div
            className="w-1.5 h-1.5 rounded-full"
            style={{ background: "oklch(0.65 0.2 142)" }}
          />
          <span className="text-[10px] text-white/30">AI Active</span>
        </div>
      </div>
    </div>
  );
}

// ─── Editor Section ───────────────────────────────────────────────────────────
function EditorSection() {
  const { data: features, isLoading } = useGetEditorFeatures();

  const iconMap: Record<string, React.FC<{ className?: string }>> = {
    drag: Move,
    move: Move,
    mouse: MousePointer2,
    ai: Wand2,
    wand: Wand2,
    sparkles: Sparkles,
    eye: Eye,
    preview: Monitor,
    layers: Layers,
    zap: Zap,
    cpu: Cpu,
    grid: LayoutGrid,
  };

  const fallbackFeatures: EditorFeature[] = [
    {
      title: "Drag-and-Drop",
      description: "Intuitive canvas editing with precise control",
      icon: "drag",
    },
    {
      title: "AI Assets",
      description: "Generate images, icons, and components with AI",
      icon: "ai",
    },
    {
      title: "Live Preview",
      description: "See changes instantly across all device sizes",
      icon: "preview",
    },
  ];

  const displayFeatures =
    features && features.length > 0 ? features : fallbackFeatures;

  const getIcon = (iconName: string) => {
    const key = iconName.toLowerCase();
    return iconMap[key] ?? Zap;
  };

  return (
    <section
      id="editor"
      className="py-24"
      style={{ background: "oklch(0.96 0.01 265)" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold tracking-wider uppercase mb-4 border"
            style={{
              borderColor: "oklch(0.65 0.2 285 / 0.3)",
              color: "oklch(0.5 0.2 275)",
              background: "oklch(0.5 0.2 275 / 0.06)",
            }}
          >
            <PenTool className="w-3 h-3" />
            Creative Suite
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground">
            Unlock Your Creativity:
            <br />
            <span className="text-gradient">The Flow Editor</span>
          </h2>
        </motion.div>

        {/* 2-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Mock Editor */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex justify-center"
          >
            <MockEditorUI />
          </motion.div>

          {/* Right: Features */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
              Design.
              <br />
              Personalize.
              <br />
              Build.
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-10">
              The Flow Editor gives you professional design tools with the
              simplicity of drag-and-drop. AI assists every step — from layout
              suggestions to asset generation.
            </p>

            {isLoading ? (
              <div className="space-y-4" data-ocid="editor.loading_state">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex gap-4">
                    <Skeleton className="w-12 h-12 rounded-xl flex-shrink-0" />
                    <div className="flex-1 space-y-2">
                      <Skeleton className="h-4 w-32" />
                      <Skeleton className="h-3 w-full" />
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-5" data-ocid="editor.panel">
                {displayFeatures.map((f, i) => {
                  const Icon = getIcon(f.icon);
                  return (
                    <motion.div
                      key={f.title}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1, duration: 0.4 }}
                      className="flex items-start gap-4 p-4 rounded-2xl bg-card card-shadow"
                      data-ocid={`editor.item.${i + 1}`}
                    >
                      <div
                        className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{
                          background: `linear-gradient(135deg, oklch(${0.58 + i * 0.03} 0.2 ${260 + i * 15}), oklch(${0.52 + i * 0.03} 0.22 ${285 + i * 15}))`,
                          boxShadow: `0 4px 12px oklch(0.58 0.2 ${265 + i * 15} / 0.3)`,
                        }}
                      >
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground mb-1">
                          {f.title}
                        </h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {f.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── Features Section ─────────────────────────────────────────────────────────
function FeaturesSection() {
  const features = [
    {
      icon: Brain,
      title: "Personalized Feed",
      description:
        "Flow's AI learns from your interactions to curate a product feed tailored specifically to your taste and lifestyle.",
      gradient:
        "linear-gradient(135deg, oklch(0.6 0.2 255), oklch(0.52 0.22 275))",
      glow: "oklch(0.6 0.2 255 / 0.25)",
    },
    {
      icon: Layers,
      title: "Advanced Editor",
      description:
        "Professional-grade design tools in the browser. Collaborate in real-time, export anywhere, and publish instantly.",
      gradient:
        "linear-gradient(135deg, oklch(0.55 0.22 285), oklch(0.48 0.2 310))",
      glow: "oklch(0.55 0.22 285 / 0.25)",
    },
    {
      icon: Zap,
      title: "AI Insights",
      description:
        "Get intelligent suggestions, trend predictions, and actionable insights that keep you ahead of what's next.",
      gradient:
        "linear-gradient(135deg, oklch(0.72 0.18 215), oklch(0.6 0.2 245))",
      glow: "oklch(0.72 0.18 215 / 0.25)",
    },
  ];

  return (
    <section id="features" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4">
            Transforming
            <br />
            <span className="text-gradient">Browsing &amp; Editing</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Three core pillars power the Flow experience — seamlessly integrated
            for the modern creator and shopper.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              data-ocid={`features.item.${i + 1}`}
              className="bg-card rounded-2xl p-8 card-shadow hover:-translate-y-1 transition-all duration-300 group"
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                style={{
                  background: f.gradient,
                  boxShadow: `0 8px 24px ${f.glow}`,
                }}
              >
                <f.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-extrabold text-foreground mb-3">
                {f.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {f.description}
              </p>
              <div
                className="mt-6 flex items-center gap-1.5 text-sm font-semibold"
                style={{ color: "oklch(0.52 0.2 270)" }}
              >
                Learn more{" "}
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  const [email, setEmail] = useState("");
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";
  const caffeineUrl = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`;

  const links = {
    Product: ["AI Shopping", "Editor", "Discover", "Features"],
    Company: ["About", "Blog", "Careers", "Press"],
    Support: ["Help Center", "Community", "Privacy", "Terms"],
  };

  return (
    <footer
      className="py-16"
      style={{
        background:
          "linear-gradient(180deg, oklch(0.15 0.04 260), oklch(0.12 0.04 264))",
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-10 border-b"
          style={{ borderColor: "oklch(0.3 0.04 260)" }}
        >
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.75 0.15 215), oklch(0.65 0.2 280))",
                  boxShadow: "0 0 16px oklch(0.72 0.18 280 / 0.5)",
                }}
              >
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Flow</span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              Shop smarter and create freely with AI-powered tools built for the
              modern web.
            </p>

            {/* Newsletter */}
            <div className="mt-6">
              <p className="text-white/70 text-sm font-semibold mb-3">
                Stay in the loop
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  data-ocid="footer.newsletter.input"
                  className="flex-1 px-4 py-2.5 rounded-full text-sm text-white outline-none border focus:border-white/40 transition-colors"
                  style={{
                    background: "oklch(0.2 0.04 260)",
                    borderColor: "oklch(0.3 0.04 260)",
                  }}
                />
                <button
                  type="button"
                  data-ocid="footer.newsletter.submit_button"
                  className="px-5 py-2.5 rounded-full text-white text-sm font-bold btn-gradient hover:scale-105 transition-all"
                >
                  <Mail className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([title, items]) => (
            <div key={title}>
              <h4 className="text-white/90 font-bold text-sm mb-4 uppercase tracking-wider">
                {title}
              </h4>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="/"
                      data-ocid="footer.link"
                      className="text-white/40 hover:text-white/80 text-sm transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-8">
          <p className="text-white/30 text-sm">
            © {year} Flow. All rights reserved.
          </p>
          <p className="text-white/30 text-sm">
            Built with ❤️ using{" "}
            <a
              href={caffeineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white/60 transition-colors underline underline-offset-2"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

// ─── App ──────────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <AIShoppingSection />
        <EditorSection />
        <FeaturesSection />
      </main>
      <Footer />
    </div>
  );
}
